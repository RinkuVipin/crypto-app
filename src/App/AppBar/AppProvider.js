import moment from "moment";
import React, { Component, createContext } from "react";
const cc = require("cryptocompare");

const MAX_FAVORITE_LENGTH = 10;
const TIME_UNITS = 10;

export const AppContext = createContext();

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "dashboard",
      favorites: ["42"],
      ...this.savedSettings(),
      chartInterval: "months",
      setActivePage: this.setActivePage,
      confirmFavourites: this.confirmFavourites,
      addToFavorite: this.addToFavorite,
      removeFromFavorite: this.removeFromFavorite,
      isFavouriteCoin: this.isFavouriteCoin,
      setFilteredCoins: this.setFilteredCoins,
      highlightFavorite: this.highlightFavorite,
      fetchHistoryData: this.fetchHistoryData,
      changeChartSelect: this.changeChartSelect,
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistoryData();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let priceList = await this.getPrices();
    this.setState({ priceList });
  };

  getPrices = async () => {
    let priceList = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let price = await cc.priceFull(this.state.favorites[i], "USD");
        priceList.push(price);
      } catch (error) {
        throw new Error("ERROR OCCURED DURING PRICE DISPLAY. " + error);
      }
    }
    return priceList;
  };

  addToFavorite = (coinKey) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITE_LENGTH) favorites.push(coinKey);
    this.setState({ favorites });
  };

  removeFromFavorite = (coinKey) => {
    let favoriteList = [...this.state.favorites];
    let newFavList = favoriteList.filter((key) => key !== coinKey);
    this.setState({
      favorites: newFavList,
    });
  };

  isFavouriteCoin = (coinKey) => {
    let favoriteList = [...this.state.favorites];
    return favoriteList.includes(coinKey);
  };

  setFilteredCoins = (filteredCoins) => {
    this.setState({ filteredCoins });
  };

  confirmFavourites = () => {
    let topFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        activePage: "dashboard",
        topFavorite,
        historical: null,
      },
      () => {
        this.fetchPrices();
        this.fetchHistoryData();
      }
    );
    localStorage.setItem(
      "cryptoData",
      JSON.stringify({
        favorites: this.state.favorites,
        topFavorite,
      })
    );
  };

  highlightFavorite = (coinSymbol) => {
    this.setState(
      {
        topFavorite: coinSymbol,
        historical: null,
      },
      this.fetchHistoryData
    );
    localStorage.setItem(
      "cryptoData",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoData")),
        topFavorite: coinSymbol,
      })
    );
  };

  savedSettings = () => {
    let cryptoData = JSON.parse(localStorage.getItem("cryptoData"));
    if (!cryptoData) {
      return {
        firstVisit: true,
        activePage: "settings",
      };
    }
    let { favorites, topFavorite } = cryptoData;
    return { favorites, topFavorite };
  };

  setActivePage = (page) => {
    this.setState({
      activePage: page,
    });
  };

  fetchHistoryData = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historicalData();
    let historical = [
      {
        name: this.state.topFavorite,
        data: results.map((value, index) => [
          moment()
            .subtract({ [this.state.chartInterval]: TIME_UNITS - index })
            .valueOf(),
          value.USD,
        ]),
      },
    ];
    this.setState({ historical });
  };

  historicalData = () => {
    let promises = [];
    for (let unit = TIME_UNITS; unit > 0; unit--) {
      promises.push(
        cc.priceHistorical(
          this.state.topFavorite,
          ["USD"],
          moment()
            .subtract({ [this.state.chartInterval]: unit })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };

  changeChartSelect = (optionValue) => {
    this.setState(
      { chartInterval: optionValue, historical: null },
      this.fetchHistoryData
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
