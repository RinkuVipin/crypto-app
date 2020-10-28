import React from "react";
import ReactHighcharts from "react-highcharts";
import { AppContext } from "../App/AppBar/AppProvider";
import { Tile } from "../Shared/Tile";
import ChartSelect from "./ChartSelect";
import highChartConfig from "./HighChartConfig";
import HighChartTheme from "./HighChartTheme";

ReactHighcharts.Highcharts.setOptions(HighChartTheme);

export default function PriceChart() {
  return (
    <AppContext.Consumer>
      {(historical) => (
        <Tile>
          <ChartSelect />
          {historical ? (
            <ReactHighcharts config={highChartConfig(historical)} />
          ) : (
            <div>Loading Historical Data...</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
