import React from 'react';
import './PHead.css';
import {ImSearch} from "react-icons/im";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Language } from '@mui/icons-material';
function PHead() {
  return (
    <div className="pheader">
      <img className="himg" src="https://www.pngkit.com/png/full/24-245711_amazon-prime-instant-video-logo-png-amazon-prime.png"/>
      <div>
        <ul className="listhead">
            <li>Home</li>
            <li>Store</li>
            <li>Channels</li>
            <li><b typeof='small'>Categories</b></li>
            <li>My Stuff</li>
        </ul>
      </div>
      <button className="trybut">Try for free</button>
      <ImSearch className="search" color='white' cursor="pointer"/>
      <Language className="globe"/><h5 className="en">En</h5>
      <PersonOutlineIcon className="acc"/>
    </div>
  )
}

export default PHead
