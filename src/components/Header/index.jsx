import React from "react";
import logo from "../../assets/images/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.css"
import { Margin } from "@mui/icons-material";

const Header=()=>{
    return(
        <>
        <div className="header-main-container">
            <section>
            <div className="logo-section">
            <img src={logo} alt="amazon-logo" className="amazon-logo"/>
            <div className="address-section">
                <div className="address-text"><p style={{marginLeft:20}}>Delivering to Chandigarh 160001</p></div>
                <div className="address-icon">
                 <LocationOnIcon/>
                 <p>Update location</p>
                </div>
            </div>
            </div>
            </section>

            <section className="input-section">
                <div className="input-container">
                    <div className="input-dropdown">
                        <select name="input-dropdown" id="input-dropdown">
                            <option value="0">All</option>
                            <option value="1">Alexa Skills</option>
                            <option value="2">Amazon Devices</option>
                            <option value="3">Amazon Fashion</option>
                            <option value="4">Amazon Pharmacy</option>
                            <option value="5">Appliance</option>
                            <option value="6">App & Games</option>
                            <option value="7">Audible Audibooks</option>
                            <option value="8">Baby</option>
                            <option value="9">Beauty</option>
                            <option value="10">Books</option>
                            <option value="11">Car & Motorbike</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
};

export default Header;