import React from 'react'
import {GoThreeBars} from "react-icons/go"
import './Subhead.css'
import { Link } from 'react-router-dom'
function Subhead() {
  return (
    <div className="subhead">
        <div className="subhead_icon">
      <GoThreeBars />
      <div> All</div></div>
      <div className="subdata">Fresh</div>
      <div className="subdata">Amazon miniTV</div>
      <div className="subdata">Gift Cards</div>
      <div className="subdata">Buy Again</div>
      <div className="subdata">Health,Household & Personal Care</div>
      <div className="subdata">Amazon Basics</div>
      <div className="subdata">Home Improvement</div>
      <div className="subdata">Coupons</div>
      <Link to="/prime"><img className="sub_ad" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Farzi-Launch/400x39-SWM_NP._CB613859124_.jpg"/></Link>
    </div>
  )
}

export default Subhead
