import React from 'react'
import './myprojects.css'
// import IMG1 from '../../assets/img5.jpg'
import IMGLABELLA from '../../assets/labella.png'
import IMGKEAN from '../../assets/kean.png'
import IMGPOSYANDU from '../../assets/banner-posyandu.png'
import IMGBIONMED from '../../assets/banner-bionmed.png'
import IMGCAKRAWALA from '../../assets/banner-cakrawala.png'
// import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMGKEAN} alt="" />
            </div>
            <h3>KEAN ONLINE STORE</h3>
            <small className='text-light'>Laravel (PHP) | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              
            <a href="https://keansignature.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMGPOSYANDU} alt="" />
            </div>
            <h3>Mobile App Posyandu</h3>
            <small className='text-light'>KOTLIN | JAVA</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/Thakshila-Bandara/my-resume" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
              <a href="https://kelcilendektimur.kotabogor.go.id/welcome/posyandu" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMGLABELLA} alt="" />
            </div>
            <h3>Labella Online Store</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              
            <a href="https://www.labellaonlinestore.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
       
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMGBIONMED} alt="" />
            </div>
            <h3>Mobile App Bionmed</h3>
            <small className='text-light'>FLUTTER</small>
            <div className="portfolio__item-cta">
              <a href="https://play.google.com/store/apps/details?id=com.bionmed_app" target="_blank" rel='noreferrer' className='btn btn-primary'>View Play Store</a>  

              <a href="https://apps.apple.com/app/mitra-bionmed/id6471907689" target="_blank" rel='noreferrer' className='btn btn-primary'>View App Store</a>  
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMGCAKRAWALA} alt="" />
            </div>
            <h3>Mobile App Cakrawala</h3>
            <small className='text-light'>FLUTTER</small>
            <div className="portfolio__item-cta">
              <a href='https://play.google.com/store/search?q=cakrawala&c=apps' target="_blank" rel='noreferrer' className='btn btn-primary'>View Play Store</a>  

            </div>
        </article>
      </div>
    </section>
  )
}

export default Myprojects