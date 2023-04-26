//import CandleStickChart from '../../charting_library/costom_chart/chart_1'
import  { init, dispose, Chart, CandleType, LineType,ChartType } from  'klinecharts'
import { useEffect , useRef} from 'react';
///import TradingViweWidget  from '../../charting_library/charting_library.min';
import generatedDataList from './generatedDataList'
import './style.css';
import Layout from './Layout';

function updateData (chart) {
    setTimeout(() => {
      if (chart) {
        const dataList = chart.getDataList()
        const lastData = dataList[dataList.length - 1]
        const newData = generatedDataList(lastData.timestamp, lastData.close, 1)[0]
        newData.timestamp += 1000 * 60
        chart.updateData(newData)
      }
      updateData(chart)
    }, 1000)
  }
  
  const types = [
    { key: 'candle_solid', text: '蜡烛实心' },
    { key: 'candle_stroke', text: '蜡烛空心' },
    { key: 'candle_up_stroke', text: '蜡烛涨空心' },
    { key: 'candle_down_stroke', text: '蜡烛跌空心' },
    { key: 'ohlc', text: 'OHLC' },
    { key: 'area', text: '面积图' }
  ]

const TradingScreen = ()=>{

    useEffect(() => {
        const chart = init('update-k-line')
        chart?.applyNewData({
            open: 5,
            low: 4,
            high: 9,
            close: 5,
            volume: 345,
            timestamp : new Date() / 60 / 1000 * 60 * 1000
          })
        chart?.createIndicator('MA', false, { id: 'candle_pane' })
        chart?.createIndicator('VOL')
        
             console.log(generatedDataList())
        updateData(chart)
        return () => {
          dispose('update-k-line')
        }
      }, [])

      const chart = useRef()



      useEffect(() => {
        chart.current = init('real-time-k-line', {
        styles: { grid: { horizontal: { style: LineType.Dashed } } }
        })
        chart.current?.applyNewData(generatedDataList())
        chart.current?.createIndicator('MA', false, { id: 'candle_pane' })
        return () => {
          dispose('real-time-k-line')
        }
      }, [])



      return(
     
        <div className='app'>
            <Layout
      title="实时更新">
      <div id="update-k-line" className="k-line-chart"/>
    </Layout>

    <Layout
      title="图表类型">
      <div id="real-time-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          types.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  chart.current && chart.current.setStyles({
                    candle: {
                      type: key 
                    }
                  })
                }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
        </div>
   
     

      )


}
export default TradingScreen