import React from 'react'
import "./Footer.scss"

export const Footer = () => {
    return (
        // <div className="FooterBg">
        //     <div className="Container">
        //         <img className="LogoFooter" src="images/LogoFooter.png" alt="logo"/>
        //         <h1 className="DBK">Designed by Kersel</h1>
        //         <div className="SocialIcons">
        //             <div className="SocialLinkWrapper">
        //                 <a className="SocialLink" href="#">
        //                     <img className="imagesLink" src="images/tg.png" alt="telegram"/>
        //                 </a>
        //             </div>
        //             <div className="SocialLinkWrapper">
        //                 <a className="SocialLink" href="#">
        //                     <img className="imagesLink" src="images/insta.png"  alt="instagram"/>
        //                 </a>
        //             </div>
        //             <div className="SocialLinkWrapper">
        //                 <a className="SocialLink" href="#">
        //                     <img className="imagesLink" src="images/wa.png"  alt="WA"/>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

       <div className="WrapperBack">
           <div className="Wrapper">
               <div>
                   <img className="LogoFoter" src="/images/LogoFooter.png" alt="LogoFooter"/>
               </div>
               <div>
                   <h2 className="DBK">Designed by kersel</h2>
               </div>

               <div className="SocialWrapper">
                   <div className="tg social">
                       <a href="#">
                           <img src="/images/tg.png" alt="Telegram"/>
                       </a>
                   </div>
                   <div className="insta social">
                       <a href="#">
                           <img src="/images/insta.png" alt="Instagram"/>
                       </a>
                   </div>
                   <div className="wa social">
                       <a href="#">
                           <img src="/images/wa.png" alt="WA"/>
                       </a>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Footer;