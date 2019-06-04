import React, {Component} from 'react';
import monthEnum from "../month-enum.js" //Use month enum to get date name from number in data
import {
  LineChart, ResponsiveContainer, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class SalesGraph extends Component {

  //Generate aggrigated salses data per month for graph display
  generateData() {
    var aggrigatedSalesData = [];
    this.props.salesData.forEach((sales) => {
      var monthNum = sales.weekEnding.split("-")[1];
      var monthName = monthEnum[monthNum];
      var monthVal = parseInt(monthNum,10)

      if(aggrigatedSalesData.length == monthVal-1) {
        aggrigatedSalesData.push({
          monthName: monthName
          , retailSales: sales.retailSales
          , wholesaleSales: sales.wholesaleSales
        })
      } else {
        aggrigatedSalesData[monthVal-1].retailSales += sales.retailSales;
        aggrigatedSalesData[monthVal-1].wholesaleSales += sales.wholesaleSales;

      }
    })
    return aggrigatedSalesData;

  }


  //Use recharts (http://recharts.org/en-US) in order to display a line chart
  //of retail sales and wholesale sales per month
  render() {
    return(
      <div className="sales-graph-container">
      <ResponsiveContainer height='100%' width='100%'>
          <LineChart data={this.generateData()} margin={{ top: 20, right: 30, left: 20, bottom: 20}}>
            <XAxis dataKey="monthName" />
            <Tooltip />
            <Line type="monotone" dataKey="retailSales" stroke="#8884d8"/>
            <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default SalesGraph;
