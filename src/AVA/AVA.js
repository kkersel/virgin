import React from 'react'
import './Ava.scss'
import Menu from "../Component/Menu/Menu";
import Footer from "../Component/Footer/Footer";
import {NavLink} from "react-router-dom";

export const Ava = () => {
    return (
        <div>
            <Menu/>
            {/*Первый блок*/}
            <div className="Logo">
                <div className="image">
                    <NavLink to="/MainPage">
                        <img src="/images/Logo.png" alt="logo"/>
                    </NavLink>
                </div>
                <div>
                    <NavLink className="text_logo" to="/MainPage">
                        <h1 className="text_logo">ANIGAV.ADZIP</h1>
                    </NavLink>
                </div>
            </div>
            <div className="MagicWandWrapper">
                <div className="MagicWandWrapper_Content">
                    <h1 className="NameProduct">Ava</h1>
                    <p className="cost">
                        3199₽
                    </p>
                    <a className="Button" href="#">
                        Заказать
                    </a>
                    <img className="ImageProduct" src="/images/AVA/ProductAva.png" alt="ProductMagicWand"/>
                </div>
            </div>

            {/*Второй блок*/}
            <div className="SpecificationsMagicWandWrapper">
                <div className="SpecificationsMagicWand">
                    <div>
                        <p className="LabelForGif_300">
                            5 часов <br/>
                            беспрерывного <br/>
                            Брррррр...
                        </p>
                        <img src="/images/AVA/vibro.gif" alt="Battery" className="Gif_300"/>
                    </div>
                    <div>
                        <p className="LabelForGif_300">
                            20 <br/>
                            незабываемых <br/>
                            режимов
                        </p>
                        <img src="/images/AVA/Water.png" alt="Water" className="Gif_300"/>
                    </div>
                    <div>
                        <p className="LabelForGif_300">
                            Настолько гибки, <br/>
                            что доберется <br/>
                            до любой точки G
                        </p>
                        <img src="/images/AVA/Strech.gif" alt="Strech" className="Gif_300"/>
                    </div>
                </div>
            </div>

            {/*Третий блок*/}
            {/*<div className="SpecificationsMagicWandWrapperLong">*/}
            {/*    <div className="SpecificationsMagicWandRight">*/}
            {/*        <p className="LabelForGif_Long">Это вертолёт</p>*/}
            {/*        <img className="imagesSpecifcations Left" src="/images/360.gif" alt="360"/>*/}
            {/*    </div>*/}
            {/*    <div className="SpecificationsMagicWandLeft">*/}
            {/*        <p className="LabelForGif_Long">Душ любит тишину</p>*/}
            {/*        <img className="imagesSpecifcations" src="/images/water.gif" alt="Water IP67" id="hoh"/>*/}
            {/*    </div>*/}
            {/*    <div className="SpecificationsMagicWandRight">*/}
            {/*        <p className="LabelForGif_Long">Мягкий как <br/> попка младенца</p>*/}
            {/*        <img className="imagesSpecifcations" src="/images/Body.gif" alt="Super Soft"/>*/}
            {/*    </div>*/}
            {/*    <div className="SpecificationsMagicWandLeft">*/}
            {/*        <p className="LabelForGif_Long"> Его энергия - <br/> ее энергия</p>*/}
            {/*        <img className="imagesSpecifcations" src="/images/usb.gif" alt="UsbCharge"/>*/}
            {/*    </div>*/}
            {/*    <div className="SpecificationsMagicWandRight">*/}
            {/*        <p className="LabelForGif_Long">Невозможно уснуть</p>*/}
            {/*        <img className="imagesSpecifcations" src="/images/sleep.gif" alt="sleep"/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*Четвертый блок*/}
            <div className="AllSpecificationsWrapperAva">
                <div className="AllSpecifications">
                    <img className="Vibro_img" src="images/AVA/Pink.png" alt="Pink"/>
                    <p className="SpecificationsText">
                        <h3 className="Specifications">Характеристика:</h3>
                        20 Режимов <br/>
                        5 Часов работы от одной зарядки <br/>
                        Защита по стандарту IPX7 <br/>
                        Зарядка от USB <br/>
                        9000 оборотов в минуту <br/>
                        Медицинский силикон <br/>
                        Цвет: Розовый / Белый <br/>
                        Высота: 20 см <br/>
                        Ширина: 4.7 см</p>
                    <img className="Vibro_img" src="images/AVA/white.png" alt="Yellow"/>
                </div>
                <div className="BtnWrapper">
                    <a href="#" className="Button">Оформить заказ</a>
                </div>
            </div>
            <Menu/>
            <Footer/>
        </div>
    )
}

export default Ava;