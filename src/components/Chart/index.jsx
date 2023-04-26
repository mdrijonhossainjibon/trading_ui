
import { createChart ,CrosshairMode }from 'lightweight-charts';
import { Spin } from 'antd';
import { useState } from 'react';
//import { nightModeTheme } from 'lightweight-charts/dist/bundle.esm';

//import 'lightweight-charts/dist/lightweight-charts.css'
export const   CandelChart=()=>{

const [data,setdata ] = useState([{ time: '2022-01-01', open: 100, high: 120, low: 80, close: 110 }])

// Define the data for the candlestick chart
const candlestickData = [
  { time: '2022-01-01', open: 100, high: 120, low: 80, close: 110 },
  { time: '2022-01-02', open: 110, high: 130, low: 90, close: 120 },
  { time: '2022-01-03', open: 120, high: 140, low: 10, close: 130 },
  { time: '2022-01-04', open: 124, high: 145, low: 15, close: 140 },
  { time: '2022-01-05', open: 129, high: 140, low: 9, close: 900},
  { time: '2022-01-06', open: 129, high: 900, low: 129, close: 9 },
  { time: '2022-01-08', open: 129, high: 140, low: 9, close: 130 },
  { time: '2022-01-09', open: 129, high: 140, low: 9, close: 130 },
  { time: '2022-01-10', open: 129, high: 140, low: 9, close: 130 },
  { time: '2022-01-11', open: 129, high: 140, low: 9, close: 130 },
  { time: '2022-01-12', open: 129, high: 140, low: 9, close: 130 },
  { time: '2022-01-13', open: 129, high: 140, low: 135, close: 130 },
  // and so on...
];

setTimeout(() => {
  
  // Create a new chart
const chart = createChart(document.querySelector('.chart'), { width: 785, height: 440 });

// Add a candlestick series to the chart
const candlestickSeries = chart.addCandlestickSeries();
const line = chart.addLineSeries();
line.setData([{time: '2022-01-01', value : 110 },
{time: '2022-01-02', value : 120 },
{time: '2022-01-03', value : 130 },
{time: '2022-01-05', value : 900 },
{time: '2022-01-06', value : 9 }])
// Apply the data to the candlestick series
candlestickSeries.setData(data);
candlestickSeries.applyOptions({upColor : "#0ecb81",downColor : '#f6465d',borderVisible : false,borderDownColor : 'none',})
}, 1000);




    return(
        

<div class="div252">
  
<div class="div253">
<div class="div254">
                <div class="div255">
                  <div class="div256">
                    <div class="div257">
                    <div class="div258">
                        <div class="time">Time</div>
                        <div class="s">1s</div>
                        <div class="m">15m</div>
                        <div class="h">1H</div>
                        <div class="h1">4H</div>
                        <div class="d">1D</div>
                        <div class="w">1W</div>
                      </div>
                      <img class="svg-icon19" alt="" src="./public/svg19.svg" />
                        </div>
                        </div>
                        </div>
                        </div>

                       <div className='spin'> <Spin delay={1000}/></div>
                     <div class="chart" style={{    color: 'red',
    position: 'absolute',
    top: '39px',
    left: '3px',width : '100%',height : '100%'}}></div>
</div>
</div>

    )

}
