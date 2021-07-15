import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="516946316"
          title="The World For Sale"
          price={599}
          image="https://images-na.ssl-images-amazon.com/images/I/51AbgTr0pLL._SX327_BO1,204,203,200_.jpg"
          rating={4}
        />
        <Product
          id="51694526"
          title="Harry Potter "
          price={299}
          image="https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg"
          rating={4}
        />
        <Product
          id="681698262"
          title="The Lean Startup"
          price={499}
          image="	https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="54666555"
          title="iPhone 11"
          price={51999}
          image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg"
          rating={5}
        />

        <Product
          id="6564646"
          title="iPhone XR"
          price={39999}
          image="https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SY500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="54646465"
          title="Samsung 34-inch Monitor"
          price={69499}
          image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SX425_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
