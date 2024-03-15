import react from "react";
import hero_img from '../../assets/images/img-hero-10.jpg'
import '../HeroSection/HeroSection.scss';


const HeroSection = () => {

    return (
        <div className="hero">
            <img className="hero__img" src={hero_img} alt="manufacturing"/>
        </div>
    )
}

export default HeroSection