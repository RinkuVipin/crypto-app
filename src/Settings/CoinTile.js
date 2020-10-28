import React from "react";
import { AppContext } from "../App/AppBar/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/Tile";
import CoinGridHeader from "./CoinGridHeader";
import CoinImage from "./CoinImage";

const onClickCoin = (coinKey, favSection, addCoin, removeCoin) => {
  if (!favSection) return addCoin(coinKey);
  return removeCoin(coinKey);
};

export default function CoinTile({ coinKey, favSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addToFavorite, removeFromFavorite, isFavouriteCoin }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (favSection) TileClass = DeletableTile;
        else if (isFavouriteCoin(coinKey)) TileClass = DisabledTile;

        return (
          <TileClass
            onClick={() =>
              onClickCoin(
                coinKey,
                favSection,
                addToFavorite,
                removeFromFavorite
              )
            }
          >
            <CoinGridHeader
              coinName={coin.CoinName}
              coinSymbol={coin.Symbol}
              favSection={favSection}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
