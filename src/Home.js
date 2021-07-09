import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
               <img 
                   className='home__image' 
                   src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                   alt=""
               />
            </div>
               
               <div className="home__row">
                    <Product 
                    id="516946316"
                    title='The World For Sale' price={599} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51AbgTr0pLL._SX327_BO1,204,203,200_.jpg"
                    rating={4} 
                    />
                    <Product
                    id="681698262"
                    title='The Lean Startup' price={499} 
                    image="	https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                    rating={3}
                     
                    />
                    
               </div>
               <div className="home__row">
               <Product 
               id="54666555"
               title='OnePlus Nord CE 5G' price={25999} 
               image="https://m.media-amazon.com/images/I/41e1JcORdNS.jpg"
               rating={3}
               />
               <Product 
               id="46944646"
               title='MI 11i Lite' price={29999.00} 
               image="https://images-na.ssl-images-amazon.com/images/I/71gYR8pOaQS._SY679_.jpg"
               rating={4} 
               />
               <Product 
               id="6564646"
               title='Vivo V21e 5G  ' price={23999} 
               image="https://images-eu.ssl-images-amazon.com/images/I/416mAsyG00S._AC_SX184_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/I/416mAsyG00S._AC_SX368_.jpg"
               rating={2} 
               />
               </div>
               <div className="home__row">
             
               <Product 
               id="54646465"
               title='Samsung 34-inch Monitor' price={69499} 
               image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SX425_.jpg"
               rating={5} 
               />
                    
               
               </div>




        </div>            
    )
}

export default Home
