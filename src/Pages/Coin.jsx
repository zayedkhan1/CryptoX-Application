import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../Context/CoinContext';
import LineChart from './LineChart';


const Coin = () => {
    const {coinId}=useParams();
    const [coinData,setCoinData]=useState();
    const [historicalData,setHistoricalData]=useState();

    const {currency}=useContext(CoinContext);

    const fetchCoinData=async()=>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-eTUprMH1kZH88yfVQwfFZnDn	'
  }
};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(res => res.json())
  .then(res => setCoinData(res))
  .catch(err => console.error(err));
}

const fetchHistoricalData=async()=>{
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-eTUprMH1kZH88yfVQwfFZnDn	'
  }
};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
  .then(res => res.json())
  .then(res => setHistoricalData(res))
  .catch(err => console.error(err));
}

useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
},[currency])


// LineChart


    return (
        <div className='text-white'>
         <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-slate-900 text-white flex flex-col items-center px-4 py-8">
      <div className="flex flex-col items-center space-y-4">
        
        <img src={coinData?.image?.large} alt="" />

         
        <h1 className="text-3xl md:text-4xl font-bold">{coinData?.name} ({coinData?.symbol.toUpperCase()}) </h1>
      </div>

      {/* Graph Section */}
      <div className="mt-8 w-full max-w-3xl bg-white rounded-xl shadow-lg p-4">
        <LineChart historicalData={historicalData} ></LineChart>
      </div>
            {/* Graph Section */}


      {/* Table Section */}
      <div className="mt-8 w-full max-w-2xl bg-slate-800 rounded-xl shadow-lg p-6">
        <table className="w-full text-left text-sm md:text-base">
          <tbody>
            <tr className="border-b border-slate-600">
              <td className="py-2">Crypto Market Rank</td>
              <td className="py-2 text-right">{coinData?.market_cap_rank}</td>
            </tr>
            <tr className="border-b border-slate-600">
              <td className="py-2">Current Price</td>
              {/* toLocalString use hobe [].toLocalString() */}
              <td className="py-2 text-right">{currency.symbol} {coinData?.market_data?.current_price[currency?.name]?.toLocaleString()}</td>
            </tr>
            <tr className="border-b border-slate-600">
              <td className="py-2">Market cap</td>
              <td className="py-2 text-right">{currency.symbol} {coinData?.market_data?.market_cap[currency.name]?.toLocaleString()} </td>
            </tr>
            <tr className="border-b border-slate-600">
              <td className="py-2">24 Hour High</td>
              <td className="py-2 text-right">{currency.symbol} {coinData?.market_data?.high_24h[currency.name]?.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="py-2">24 Hour Low</td>
              <td className="py-2 text-right">{currency.symbol} {coinData?.market_data?.low_24h[currency.name]?.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default Coin;