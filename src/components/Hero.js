const Hero = () => {
    return (   

        <div id="home" className="header-hero bg_cover" style={{backgroundImage: "url(assets/images/banner-bg.svg)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="header-hero-content text-center">
                            <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Basic - SaaS Landing Page</h3>
                            <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Kickstart Your SaaS or App Site</h2>
                            <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</a>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/header-hero.png" alt="hero" />
                        </div> 
                    </div>
                </div> 
            </div> 
            <div id="particles-1" className="particles"></div>
        </div> 
     );
}
 
export default Hero;