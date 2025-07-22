import React, { useContext, useState } from 'react';
import logo from '../../src/assets/Logo/logo.png'
import arrow from '../../src/assets/Logo/arrow_icon.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { CoinContext } from '../Context/CoinContext';


const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {setCurrency}=useContext(CoinContext);
  
  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd",Symbol:"$"});
        break;
      }
      case "euro":{
        setCurrency({name:"uro",Symbol:"€"});
        break;
      }
      case "bdt":{
        setCurrency({name:"bdt",Symbol:"৳"});
        break;
      }
      default :{
        setCurrency({name:"usd",Symbol:"$"});
        break;
      }
    }

  }

    return (
      <div>
          <nav className="w-full bg-sky-300   top-0 left-0 z-50 shadow-lg">
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4 md:gap-2 text-center md:text-left ${menuOpen ? 'space-y-4' : ''}`}>
        {/* Logo */}
        <a href="#" className="text-xl font-bold flex-shrink-0">
          <img src={logo} alt="Logo" className="mx-auto md:mx-0  h-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        {/* Select & Button */}
        <div className="flex  md:flex-row items-center gap-2 w-full md:w-auto">
          <select onChange={currencyHandler} className="border w-full md:w-auto border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
            <option value="usd">USD</option>
            <option value="uro">Euro</option>
            <option value="bdt">BDT</option>
          </select>
          <button className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2">
            Sign Up <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </button>

          {/* Hamburger Icon */}
          <div className="md:hidden ml-2 cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-3 px-4 space-y-2 w-full">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>

      </div>
    );
};

export default Navbar;