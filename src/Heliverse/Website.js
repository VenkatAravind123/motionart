import React from 'react'
import './style.css'
import logo from '../images/logo1.png'
import gimage from '../images/gimage.png'
import leaf from '../images/leaf.png'
import wordimage from '../images/wordimage.png'
import star from '../images/stars.png'
import motion from '../images/motionlogo.png'
import section from '../images/section.png'
import page from '../images/page.png'
import browsers from '../images/browsers.png'
import thunder from '../images/thunder.png'
import like from '../images/like.png'
import moon from '../images/moon.png'
import magicwand from '../images/magicwand.png'


export default function Website() 
{
    const buy = ()=>{
            window.location.href="https://codecanyon.net/checkout/102291317/create_account?_ga=2.173408355.1142388693.1715927923-1884038864.1715927923"
    }
    const logoclick = ()=>{
        window.location.href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*p6shou*_ga*MTg4NDAzODg2NC4xNzE1OTI3OTIz*_ga_ZKBVC1X78F*MTcxNjEwODA0MS43LjEuMTcxNjEwOTc3Ny4wLjAuMA..&_ga=2.181272679.1142388693.1715927923-1884038864.1715927923"
    }

    const purchaseclick = ()=>{
      window.location.href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
    }
  return (
    <div className='body'>
<nav id="navbar">
<h1 class="logo">
  <div class="logo">
    <img src={logo} alt="Logo" border="0" width="175" height="30" onClick={logoclick}></img>
  </div>
  <button className='buy' id='buy' onClick={buy}>Buy Now</button>
</h1>
  </nav>
  <header id="showcase">
    <div className='imageheading'>
        <img src={motion} alt='image00' className='motion' width="230" height="60" ></img>
        <button className='purchase' onClick={purchaseclick}>Purchase Now</button>
    </div>
    <div className='bheading'>
        <span className='head1'>Transform <br/> Your Website</span>
        <br/>With Motion Art<br/> Effect
    </div>
    <div class="showcase-content">
      <h1 class="l-heading" >Attract Your Visitors Attention With Colorful <span className='motionart'>Motion Art Effect</span></h1>
      <p class="lead">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
    </div>
    
  </header>
  
    <div class="container">
      <h2 class="m-heading">Trusted by thousands of users around the world</h2>
      <div class="items">
        <div class="item1">
          <img src={leaf} alt='image08' class="leaf"></img>
            <img src={star}  alt='image09' className='starimage'></img>
            <p className='subscribers'>4.5 Score,9 Reviews</p>
        </div>
        <div class="item2">
            <img src={gimage} alt='image23' class="gimage"></img>
            <img src={star} alt='image12' className='starimage'></img>
            <p className='subscribers'>4.5 Score,9 Reviews</p>
        </div>
        <div class="item3">
            <img src={wordimage} alt='image22' class="wordimage"></img>
            <img src={star}  alt='image90' className='starimage'></img>
            <p className='subscribers'>4.5 Score,9 Reviews</p>
        </div>
      </div>
    </div>
  
  
    <div class="who-img">
        <div className='magicwand'>
        Turn Your Cursor Into A Colorful<br/> Magic Wand & Charm Your Visitors
        </div>
        <div className='magic'>
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br/>your website with visually stunning motion art elements.<br/><br/>
        <button className='envato' onClick={purchaseclick}>Purchase From Envato 🡢</button>
        </div>
        
        <img src={magicwand} alt='wand' className='wand'/>
    </div>

    <div className='page'>
    Apply On Any Section Or Enable  <br/>For Whole Page
    </div>

    <div className='page1'>
        <div className='page1-heading'>Apply On Section</div><br/>
        <div className='page1-description'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </div>
        <img src={section} alt='image33' className='page1-img'></img>
    </div>
    <div className='page2'>
        <div className='page2-heading'>Apply On Page</div>
        <div className='page2-description'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </div>
        <img src={page} alt='image23' className='page2-img'></img>
    </div><br/>
<br/>

<div className='support'>
<div className='supporters'>
<div className='supportheading'>Supported by All Popular Browsers</div>
<div className='supportdescription'>Rest assured, Motion Art is designed to be compatible <br/>with all major web browsers.</div>
<img src={browsers} alt='image23' className='chrome' ></img>
</div>
</div>

<div className='advantages'>
    <div className='head'>An All-Round Plugin With <br/>Powerful Features</div>
    <div className='headitems'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
    <div className='lightweight'>
        <img src={thunder}  alt='image34' className='lightweight-img'></img>
        <div className='lighthead'>Light Weight</div>
        <div className='lightdescription'>Motion Art for Elementor is designed to be lightweight.</div>
    </div>
    <div className='response'>
        <img src={like} alt='image1' className='response-img'></img>
        <div className='responsehead'>100% Responsive</div>
        <div className='responsedescription'>Create a consistent visual experience across all devices.</div>
        </div>
    <div className='moon'>
        <img src={moon} alt='imag' className='moon-img'></img>
        <div className='moonhead'>User Friendly Interface</div>
        <div className='moondescription'>Ensure a smooth experience for both applicants and administrators.</div>
    </div>
</div>


  <footer class="copywrite">
    <div class="container1">
      <p className='copy'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <a href='https://qodematrix.com/docs/motion-art-for-elementor/' className='documentation'>Documentation</a>
      <a href='https://support.qodematrix.com/login' className='support1'>Support</a>
    </div>
  </footer>


</div>
  )
}
