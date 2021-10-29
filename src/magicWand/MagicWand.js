import React from 'react'
import './MagicWand.scss'
import Menu from "../../Component/Menu/Menu";
import Footer from "../../Component/Footer/Footer";

export const MagicWand = () => {
    return (
        <div>
            <Menu/>
            {/*Первый блок*/}
            <div className="Logo">
                <div className="image">
                    <img src="/images/Logo.png" alt="logo"/>
                </div>
                <div>
                    <h1 className="text_logo">ANIGAV.ADZIP</h1>
                </div>
            </div>
            <div className="MagicWandWrapper">
                <div className="MagicWandWrapper_Content">
                    <h1 className="NameProduct">Magic Wand</h1>
                    <p className="cost">
                        4399₽
                    </p>
                    <a className="Button" href="#">
                        Заказать
                    </a>
                    <img className="ImageProduct" src="/images/ProductMagicWand.png" alt="ProductMagicWand"/>
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
                        <img src="/images/Time3.gif" alt="TimeGif" className="Gif_300"/>
                    </div>
                    <div>
                        <p className="LabelForGif_300">
                            20 <br/>
                            незабываемых <br/>
                            режимов
                        </p>
                        <img src="/images/Vibro.gif" alt="VibroGif" className="Gif_300"/>
                    </div>
                    <div>
                        <p className="LabelForGif_300">
                            9000 тысяч <br/>
                            оборотов <br/>
                            в минуту
                        </p>
                        <img src="/images/Motor.gif" alt="MotorGif" className="Gif_300"/>
                    </div>
                </div>
            </div>

            {/*Третий блок*/}
            <div className="SpecificationsMagicWandWrapperLong">
                <div className="SpecificationsMagicWandRight">
                    <p className="LabelForGif_Long">Это вертолёт</p>
                    <img className="imagesSpecifcations Left" src="/images/360.gif" alt="360"/>
                </div>
                <div className="SpecificationsMagicWandLeft">
                    <p className="LabelForGif_Long">Душ любит тишину</p>
                    <img className="imagesSpecifcations" src="/images/water.gif" alt="Water IP67" id="hoh"/>
                </div>
                <div className="SpecificationsMagicWandRight">
                    <p className="LabelForGif_Long">Мягкий как <br/> попка младенца</p>
                    <img className="imagesSpecifcations" src="/images/Body.gif" alt="Super Soft"/>
                </div>
                <div className="SpecificationsMagicWandLeft">
                    <p className="LabelForGif_Long"> Его энергия - <br/> ее энергия</p>
                    <img className="imagesSpecifcations" src="/images/usb.gif" alt="UsbCharge"/>
                </div>
                <div className="SpecificationsMagicWandRight">
                    <p className="LabelForGif_Long">Невозможно уснуть</p>
                    <img className="imagesSpecifcations" src="/images/sleep.gif" alt="sleep"/>
                </div>
            </div>

            {/*Четвертый блок*/}
            <div className="AllSpecificationsWrapper">
                <div className="AllSpecifications">
                    <img className="Vibro_img" src="images/Pink.png" alt="Pink"/>
                    <p className="SpecificationsText">
                        <h3 className="Specifications">Характеристика:</h3>
                        20 Режимов <br/>
                        5 Часов работы от одной зарядки <br/>
                        Защита по стандарту IPX7 <br/>
                        Зарядка от USB <br/>
                        9000 оборотов в минуту <br/>
                        Медицинский силикон <br/>
                        Цвет: Розовый / Желтый <br/>
                        Высота: 20.8 см <br/>
                        Ширина: 4.5 см</p>
                    <img className="Vibro_img" src="images/Yellow.png" alt="Yellow"/>
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

export default MagicWand;