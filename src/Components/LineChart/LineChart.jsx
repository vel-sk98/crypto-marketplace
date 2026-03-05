import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ hisData}) => {

  const [data, setData] = useState([["Date", "Prices"]]);
  
  useEffect(() => {
    let dataCopy = [["Data", "Prices"]];
    if (hisData.prices) {
      hisData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
      })
      setData(dataCopy)
    }
  }, [hisData]);


  return (
    <>
      <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
      
      />
    </>
  )
}

export default LineChart