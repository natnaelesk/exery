import truck from "./images/delivery-truck.png";
import coin from "./images/coin.png";
import recycle from "./images/recycle.png";
import shield from "./images/shield.png";
import up from "./images/up-arrow.png";
import down from "./images/down.png";
import bag2 from "./images/bag-2.jpg";
import bag3 from "./images/bag-3.jpg";
import pic from "./images/bag.jpeg";


import { useEffect, useState } from "react";






const Home = () => {


// copy code 

// end of copy code


    let [i,setI] = useState(1);
    const [deskPic , setDsskPic] = useState(pic);

    let sectionStyle = {
        backgroundImage : `url(${deskPic})`,
      };
    let barActive = {
        width:'12px',
        height:"60px",
        borderRadius: "99999px",
        backgroundColor:"#fff",
        transition:"all 1s"
    }
    let barInActive = {
        width:'12px',
        height:"35px",
        borderRadius: "99999px",
        backgroundColor:"#7F7F7F",
        transition:"all 1s"
    }
    let a = barActive;
    let b = barInActive; 

    
    const [bars,setBars] =useState([a,b,b]);
    
    const allpic = [pic,bag2,bag3];

    const handleDown = () => {
        let cd = [b,b,b];
        cd[i] = a;
        setBars(cd);
        setDsskPic(allpic[i]);
        setI(i+=1);
        if ( i > 2){
            setI(0);
        }
        
        return console.log(i) ;
        
    }
   
    //  .................

    useEffect(() => {
    const degreeToRadian = angle => {
        return angle * (Math.PI / 180);
    }
    
    const pointOnCircle = (radius, angle = 0) => {
        const xPos = radius * Math.cos(degreeToRadian(angle));
        const yPos = radius * Math.sin(degreeToRadian(angle));
        return {
            x: xPos,
            y: yPos
        }
    }
    
    const radius = 75;
    const diameter = radius * 2;
    
    const circle = document.querySelector('#circular-text');
    
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    
    const text = circle.innerText;
    const characters = text.split('');
    circle.innerText = null;
    
    const startAngle = -90;
    const endAngle = 270;
    const angleRange = endAngle - startAngle;
    
    const deltaAngle = angleRange / characters.length;
    let currentAngle = startAngle;
    
    characters.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.innerText = char;
        circle.appendChild(charElement);
    
        let { x: xPos, y: yPos } = pointOnCircle(radius, currentAngle);
        
        /**
         * Move center of drawn circle to 
         * match parents center.
         */
        xPos += radius;
        yPos += radius;
    
        const translate = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${index * deltaAngle}deg)`;
    
        charElement.style.transform = `${translate} ${rotate}`;
    
        currentAngle += deltaAngle ;
    });
    })

// ..............................
    
    return ( 
        <main className="w-full ">
            
            <div className="main-title flex justify-center  px-12 pt-6 items-center h-4/5 " >
                <div className="w-1/2 mr-9 main-bg h-full text-white rounded-3xl flex flex-col items-left justify-start text-left px-12 py-24 ">
                    <p className="text-6xl hand-font">Tom Flicher</p>
                    <h1 className="text-8xl my-6 bold-font uppercase">Elegant leather men's backpacks</h1>
                    <p className="text-lg text-color  w-4/5">
                        If we define any element size with px then it will fix its size on all screen sizes but if we use % then it uses a relative size. So defining elements size using % will help in designing responsive web pages.</p>
                        <button className="mr-auto mt-8 btn-color py-4 px-9 text-lg  rounded-full" >Explore More</button>
                </div>

                <div style={ sectionStyle } className="w-1/2 relative  ml-9 h-full rounded-3xl  flex justify-center items-center deck-bg  ">

                    <div className="flex flex-col   justify-between items-center  absolute w-32 h-4/5  bottom-0 right-0 ">
                        <div className="w-4/5 h-1/2   flex flex-col justify-end gap-3 items-center">
                            <div style={bars[0]}></div>
                            <div style={bars[1]}></div>
                            <div style={bars[2]}></div>
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
                    <div className="w-1/3 h-1/3 absolute top-0 right-0 flex flex-col justify-center items-center ">
                        <div className="w-28 h-28  rounded-full relative flex flex-col justify-center items-center">
                        <div id='circular-text' className=" uppercase ">Explore more . Explore more . </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center ">
                        <img src={down} alt="" className="w-12 h-12 -rotate-90"  />
                        </div>
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