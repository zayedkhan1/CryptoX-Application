import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import { CoinContext } from '../Context/CoinContext';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const {allCoin,currency}=useContext(CoinContext);
  const [displayCoin,setDisplayCoin]=useState([]);
  const [input,setInput]=useState('');

  const InputHandler=(e)=>{
   setInput(e.target.value)
   if(e.target.value== ""){
    setDisplayCoin(allCoin);
   }

  }
  const searchHandler=async(e)=>{
    e.preventDefault();
     const coins= await allCoin.filter((item)=>{
     return  item.name.toLowerCase().includes(input.toLowerCase());

    })
    setDisplayCoin(coins);

  }

  useEffect(()=>{
         setDisplayCoin(allCoin);
  },[allCoin])

  const navigate=useNavigate();
  const handleCoin=(id)=>{
    navigate(`/coin/${id}`)
  }

    return (
        <div className='bg-amber-900'>
          {/*  */}
         <section className="w-full h-100 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-700 px-4 text-center">
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto flex flex-col items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="block">Largest</span>
          <span className="block">Crypto Marketplace</span>
        </h2>
        <p className="text-gray-200 mb-4 text-sm md:text-base">
          Welcome to the world's largest cryptocurrency marketplace. <br />
          Sign up to explore more about cryptos.
        </p>
      </div>

      <form onSubmit={searchHandler} className="w-11/12 sm:w-full max-w-lg bg-white rounded-lg shadow p-2 flex flex-col sm:flex-row items-center gap-2 relative group">
        <input 
         onChange={InputHandler}
          type="text" 
          list='coinlist'
          value={input}
          placeholder="Search crypto..." 
          className="flex-1 px-4 py-2 border-none rounded-md focus:outline-none  w-full"
          required
        />

        <datalist id='coinlist'>
            {allCoin.map((item,idx)=>(<option key={idx}
                value={item.name}></option>))}
        </datalist>

        <button 
          type="submit" 
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition w-full sm:w-auto"
        >
          Search
        </button>

        
      </form>
    </section>
    {/* crypto table */}
     <section className="w-full px-4 py-8 bg-gradient-to-b from-indigo-900 to-indigo-700 flex justify-center">
      <div className="w-full max-w-4xl bg-indigo-950 rounded-lg overflow-hidden shadow-md">
        <table className="w-full text-white text-sm md:text-base">
          <thead className="bg-indigo-900">
            <tr>
              <th className="py-3 px-2 text-left">#</th>
              <th className="py-3 px-2 text-left">Coins</th>
              <th className="py-3 px-2 text-left">Price</th>
              <th className="py-3 px-2 text-left">24H Change</th>
              <th className=" hidden md:table-cell py-3 px-2 text-left">Market Cap</th>
            </tr>
          </thead>
          <tbody>
      {
        displayCoin.slice(0,10).map((itme,idx)=>(
            
       
            <tr key={idx} className="bg-indigo-800 border-t border-indigo-700 hover:bg-indigo-700 transition">
              <td className="py-3 px-2">{itme.market_cap_rank}</td>
             <td onClick={()=>{handleCoin(itme.id)}} className='cursor-pointer' >
              <p className="py-3 px-2 flex items-center gap-2">
                <img className='w-[35px]' src={itme.image} alt="" />
                <span>{itme.name +"-"+ itme.symbol}</span>
              </p>
             </td>
              <td className="py-3 px-2">{currency.symbol} {itme.current_price.toLocaleString()} </td>
              <td className={
                itme.price_change_percentage_24h> 0?'text-green-400 py-3 px-2 ':'text-red-400  py-3 px-2 '    }> {Math.floor(itme.price_change_percentage_24h)/100}</td>
              <td className=" hidden md:table-cell  py-3 px-2">{currency.symbol} {itme.market_cap.toLocaleString()}</td>
            </tr>
  
            
        ))
      }
          </tbody>
        </table>
      </div>
    </section>
          {/*  */}
        </div>
    );
};
//CG-eTUprMH1kZH88yfVQwfFZnDn

export default Home;