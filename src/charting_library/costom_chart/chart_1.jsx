import React, { PureComponent } from 'react';


import {
  Chart,
  Drawer,
  
  CandleStickDrawer,
  CandleStickVolumeDrawer,
  ChartBlackTheme,
  createYAxisPlugin,
  formateDate,
  /* main drawer plugin */
  createMAPlugin,
  createEMAPlugin,
  createSMAPlugin,
  createBOLLPlugin,
  createSARPlugin,
  /* auxiliary drawer plugin */
  createMACDPlugin,
  createKDJPlugin,
  createKDJYAxisPlugin,
  createRSIYAxisPlugin,
  createRSIPlugin,
  createDMAPlugin,
} from '@gitpad/finance-chart';
import clamp from 'lodash/clamp';

const INDICATORS = [
  'MA',
  'EMA',
  'SMA',
  'BOLL',
  'SAR',
  '-',
  'MACD',
  'VOL',
  'KDJ',
  'RSI',
  'DMS',
];
 


class CandleStickChart extends PureComponent {
  rootNode = null
  /**
   * @type {Chart} chart instance
   */
  chart = null
  state = {
    anchorEl: null
  }
  anchorEl = null
  componentDidMount() {
    this.chart = new Chart({
      theme: ChartBlackTheme,
      selector: this.rootNode,
      count: 40,
      data: [],
      mainDrawer: {
        constructor: CandleStickDrawer,
        options: {
          plugins: [
            createYAxisPlugin(),
          ],
          exclusivePlugins: [
            createMAPlugin([
              {
                key: '5',
                color: '#FF8E29',
              },
              {
                key: '10',
                color: '#ADE3F3',
              },
              {
                key: '20',
                color: '#EC6ED9',
              },
              {
                key: '60',
                color: '#01F46A',
              },
            ]),
            createEMAPlugin([
              {
                key: '12',
                color: '#FF8E29',
              },
              {
                key: '50',
                color: '#ADE3F3',
              },
            ]),
            createSMAPlugin([
              {
                key: '5',
                color: '#FF8E29',
              },
              {
                key: '10',
                color: '#ADE3F3',
              },
              {
                key: '20',
                color: '#EC6ED9',
              },
            ]),
            createBOLLPlugin(),
            createSARPlugin(),
          ],
        }
      },
      auxiliaryDrawers: [
        {
          constructor: Drawer,
          options: {
            plugins: [
              createYAxisPlugin(),
            ],
            exclusivePlugins: [
              createMACDPlugin(),
            ],
          },
        },
        {
          constructor: CandleStickVolumeDrawer,
        },
        {
          constructor: Drawer,
          options: {
            plugins: [
              createKDJYAxisPlugin(),
            ],
            exclusivePlugins: [
              createKDJPlugin(),
            ],
          },
        },
        {
          constructor: Drawer,
          options: {
            plugins: [
              createRSIYAxisPlugin(),
            ],
            exclusivePlugins: [
              createRSIPlugin([
                {
                  key: '1',
                  color: '#FF8E29',
                },
                {
                  key: '2',
                  color: '#ADE3F3',
                },
                {
                  key: '3',
                  color: '#EC6ED9',
                },
              ], 'rsi'),
            ],
          },
        },
        {
          constructor: Drawer,
          options: {
            plugins: [
              createYAxisPlugin(),
            ],
            exclusivePlugins: [
              createDMAPlugin(),
            ],
          },
        },
      ],
      detailProvider(i, data) {
        const datum = data[i];
        const WEEK_DAY_MAP = {
          0: '周日',
          1: '周一',
          2: '周二',
          3: '周三',
          4: '周四',
          5: '周五',
          6: '周六',
        };
        const date = new Date(data[i].time.replace(/-/g, '/')); // fix error on safari
        const riseColor = '#F55559';
        const fallColor = '#7DCE8D';

        const autoColor = (key) => {
          if (i === 0) return riseColor;
          return data[i][key] > data[i - 1].close ? riseColor : fallColor;
        };
        return {
          title: `${formateDate(date, 'yyyy/MM/dd')} ${WEEK_DAY_MAP[date.getDay()]}`,
          tables: [
            {
              color: autoColor('close'),
              name: 'Close',
              value: datum.close.toFixed(2),
            },
            {
              color: autoColor('open'),
              name: 'Open',
              value: datum.open.toFixed(2),
            },
            {
              color: autoColor('high'),
              name: 'High',
              value: datum.open.toFixed(2),
            },
            {
              color: autoColor('low'),
              name: 'Low',
              value: datum.open.toFixed(2),
            },
          ],
        };
      },
      onMoreData(step) {
        return step < 0 && fetchCandleSticks(this.movableRange.data.length);
      }
    });

    this.fetch();
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  onNextMainDrawer = () => {
    this.chart.nextMainExclusivePlugin();
  }
  onNextAuxiliaryDrawer = () => {
    this.chart.nextAuxiliarDrawer();
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleClose = () => {
    this.setState({ anchorEl: null });
  }
  switchIndicator(i) {
    const dividerIndex = INDICATORS.indexOf('-');
    if (i < dividerIndex) {
      this.chart.useMainExclusivePlugin(i);
    } else {
      this.chart.useAuxiliarDrawer(i - dividerIndex - 1);
    }
    this.handleClose();
  } 
  fetch() {
    fetchCandleSticks()
      .then(data => this.chart.setData(data))
  }
  render() {
  
    return (
      <div
        style={{
          width: '100%',
        }}
      >
        
        <h3 style={{color : '#EC6ED9'}}>PAPERCASH</h3>
        
        <button onClick={()=> this.chart.nextAuxiliarDrawer()}>LL</button>
        <div
          style={{
            height: '500px',
          }}
          ref={ref => this.rootNode = ref}
        />
      </div>
    )
  }
}

export default (CandleStickChart);

export function fetchCandleSticks(skip = 0, count = 90) {
  console.log('request candle stick data:');
  const end = MOCK_DATA.length - skip;
  const start = clamp(end - count, 0, end);
  const response = MOCK_DATA.slice(start, end);
  const delay = Math.random() * 100 + 10;
  console.group(`response more data in ${delay.toFixed(2)} ms: `);
  console.log(response);
  console.groupEnd();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, delay);
  });
}


const MOCK_DATA = require('./MOCK_DATA.json')