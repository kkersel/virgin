import React from 'react'
import './MainPage.scss'
import {NavLink} from "react-router-dom";
import Footer from "../Component/Footer/Footer";

export const MainPage = () => {
    return (
        <div className="WrapperMainPage">
            <div className="MainPage">
                <div className="ProductBlock">
                    <NavLink to="/Ava" className="ProductOneMagicWand">
                        <p>Ava</p>
                        <img  className="imagesProduct" src="/images/AVA/ProductAva.png" alt="Ava"/>
                    </NavLink>
                    <NavLink to="/MagicWand" className="ProductTwoAva">
                        <p className="LabelForLink">MagicWand</p>
                        <img className="imagesProduct" src="/images/ProductMagicWand.png" alt="MagicWand"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainPage;