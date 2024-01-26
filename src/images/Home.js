import truck from "./delivery-truck.png";
import coin from "./coin.png";
import recycle from "./recycle.png";
import shield from "./shield.png";
import up from "./up-arrow.png";
import down from "./down.png";
import bag2 from "./bag-2.jpg";
import bag3 from "./bag-3.jpg";
import bag4 from "./bag-4.jpg";
import pic from "./bag.jpeg";


import { useState } from "react";


const Home = () => {
    
    
    const [deskPic , setDsskPic] = useState(pic);

    let sectionStyle = {
        backgroundImage : `url(${deskPic})`,
      };
    let barActive = {
        width:'12px',
        height:"58px",
        borderRadius: "99999px",
        backgroundColor:"#fff",
        transition:"all 1s"
    }
    let barInActive = {
        width:'12px',
        height:"30px",
        borderRadius: "99999px",
        backgroundColor:"#7F7F7F",
        transition:"all 1s"
    }
    let a = barActive;
    let b = barInActive; 
    let c = barInActive; 
    let d = barInActive; 
    const cd = [a,b,c,d];
    const [bars,setBars] =useState(cd);
    let i = 1;
    const handleDown = () => {
        const allpic = [pic,bag2,bag3,bag4];
        setDsskPic(allpic[i]);
        i+=1;
        if(i >=3){
            i=0;
        }
    }
   
    


    
    return ( 
        <main className="w-full ">
            
            <div className="main-title flex justify-center  px-12 pt-6 items-center h-4/5 " >
                <div className="w-1/2 mr-9 main-bg h-full text-white rounded-3xl flex flex-col items-left justify-start text-left px-12 py-24 ">
                    <p className="text-6xl hand-font">Tom Flicher</p>
                    <h1 className="text-8xl my-6 bold-font uppercase">Elegant leather <br /> men's backpacks</h1>
                    <p className="text-lg text-color  w-4/5">
If we define any element size with px then it will fix its size on all screen sizes but if we use % then it uses a relative size. So defining elements size using % will help in designing responsive web pages.</p>
<button className="mr-auto mt-8 btn-color py-4 px-9 text-lg  rounded-full" >Explore More</button>
                </div>

                <div style={ sectionStyle } className="w-1/2  ml-9 h-full rounded-3xl relative flex justify-center items-center deck-bg  ">

                    <div className="flex flex-col justify-between items-center  absolute w-32 h-2/3  bottom-0 right-0 ">
                        <div className="w-4/5 h-2/5  flex flex-col justify-between items-center">
                            <div style={bars[0]}></div>
                            <div style={bars[1]}></div>
                            <div style={bars[2]}></div>
                            <div style={bars[3]}></div>
                        </div>
                        <div className="w-4/5 h-1/2  gap-2 flex flex-col justify-center items-center">
                            <button className="flex justify-center items-center w-9 h-20 rounded-full bg-transparent border-white border-2 ">
                                <img src={up} alt="" className="w-8 h-9" />
                            </button>
                            <button  onClick={()=> {handleDown()}} className="flex justify-center items-center w-9 h-20 rounded-full bg-white">
                            <img src={down} alt="" className="w-8 h-9"  />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full 0 px-12  h-72 flex justify-center items-center text-white">
                    <div className="w-full h-4/5 rounded-xl bhh flex justify-evenly  items-center">
                        <div className="w-56 gap-5 h-4/5 00 flex flex-col justify-center items-center">
                                <img src={truck} alt="" className="h-24" />
                                <h3>Free Shipping and Return</h3>
                        </div>
                        <div className="w-56 gap-5 h-4/5  flex flex-col justify-center items-center">
                                <img src={coin} alt="" className="h-20" />
                                <h3>100% Monye Back Guarantee</h3>
                        </div>
                        <div className="w-56 gap-5 h-4/5  flex flex-col justify-center items-center">
                                <img src={recycle} alt="" className="h-20" />
                                <h3>High Quantity material</h3>
                        </div>
                        <div className="w-56 gap-5 h-4/5  flex flex-col justify-center items-center">
                                <img src={shield} alt="" className="h-20" />
                                <h3>Safe and Secure Checkout</h3>
                        </div>
                        
                      
                    </div>
            </div>
        </main>
        
     );
}
 
export default Home;