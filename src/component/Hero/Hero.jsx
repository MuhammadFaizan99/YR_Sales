import React from "react";
import HeroStyles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate()
  return (
    <div className={HeroStyles.heroContainer}>
      <div className={HeroStyles.overlay}>
        <div className={HeroStyles.heroContent}>
          <h1 className={HeroStyles.heading}>
          Wholesale United
            <br />
            Your Gateway to Premium Products
          </h1>
          <p className={HeroStyles.subText}>
            Driving Products to Markets Nationwide
          </p>
          <button className={HeroStyles.contactButton} onClick={(()=>{navigate("/contact")})}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
