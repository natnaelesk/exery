import arrow from "./images/down.png";
import imgg from "./images/bag-3.jpg";
import add from "./images/add-plus-button.png";
import heart2 from "./images/heart2.png";
import heart3 from "./images/heart(3).png"
import { useState } from "react";
const Products = () => {
    const img = {
        backgroundImage:`url(${imgg})`,
    }
    const [likePic,setLikPic] = useState(heart2)
    const [likePic1,setLikPic1] = useState(heart2)
    const [likePic2,setLikPic2] = useState(heart2)
    const [likePic3,setLikPic3] = useState(heart2)
    const heart = {
        backgroundImage:`url(${heart2})`,
    }
    let [liked,setLiked] = useState(false);
    const like =()=>{
        if (!liked){
            setLikPic(heart3);
            setLiked(true);
        }else{
            setLikPic(heart2);
            setLiked(false);
        }
        
    }
    let [liked1,setLiked1] = useState(false);
    const like1 =()=>{
        if (!liked1){
            setLikPic1(heart3);
            setLiked1(true);
        }else{
            setLikPic1(heart2);
            setLiked1(false);
        }
        
    }
    let [liked2,setLiked2] = useState(false);
    const like2 =()=>{
        if (!liked2){
            setLikPic2(heart3);
            setLiked2(true);
        }else{
            setLikPic2(heart2);
            setLiked2(false);
        }
        
    }
    let [liked3,setLiked3] = useState(false);
    const like3 =()=>{
        if (!liked3){
            setLikPic3(heart3);
            setLiked3(true);
        }else{
            setLikPic3(heart2);
            setLiked3(false);
        }
        
    }
    
    return ( 
        <section className="mx-12 rounded-3xl px-12  w-scren main-title bg-white">
            <div className="flex  items-center w-full h-1/3 ">
                <div className="flex   justify-between items-center w-1/3 h-full ">
                    <h1 className="text-black  text-7xl font-bold uppercase text-left ">Last arrival</h1>
                </div>
                <div className="flex  ml-12 justify-between items-center w-1/3 h-full ">
                    <h1 className="text-black  text-base font-bold w-4/5 text-left ">lorem lpsum is simply text of the printing and typesetting indusry.</h1>
                </div>
                <div className="flex  justify-end items-center w-1/3 h-full ">
                <button className="mt-8 btn-color py-4 px-9 text-lg  rounded-full flex justify-center items-center" >All Products <img src={arrow} alt="" className="mx-3 w-9 h-10 -rotate-90" /></button>
                </div>
            </div>
            <div className="w-full h-2/3 flex justify-evenly ">
                
                <div className=" relative h-full w-80   ">
                    <div  style={img} className="w-full h-96 rounded-2xl image-pro" ></div>
                    <div className="w-full h-1/3 bg-green-30 flex flex-col relative justify-start items-start py-3 ">
                        <h1 className="text-black  text-base  w-4/5 text-left ">Lorem lpsum is simpley</h1>
                        <h1 className="text-black  text-base font-bold w-4/5 text-left ">$141</h1>
                        <button className="flex justify-center items-center w-14 h-14 rounded-xl absolute top-3 bb-- right-0"><img src={add} alt="" className="w-6 h-6 " /></button>
                    </div>
                    <img src={likePic} onClick={()=>{ like()}} className="w-9 h-9  absolute top-2 right-2 image-pro"/>
                </div>
                <div className=" relative h-full w-80   ">
                    <div  style={img} className="w-full h-96 rounded-2xl image-pro" ></div>
                    <div className="w-full h-1/3 bg-green-30 flex flex-col relative justify-start items-start py-3 ">
                        <h1 className="text-black  text-base  w-4/5 text-left ">Lorem lpsum is simpley</h1>
                        <h1 className="text-black  text-base font-bold w-4/5 text-left ">$141</h1>
                        <button className="flex justify-center items-center w-14 h-14 rounded-xl absolute top-3 bb-- right-0"><img src={add} alt="" className="w-6 h-6 " /></button>
                    </div>
                    <img src={likePic1} onClick={()=>{ like1()}} className="w-9 h-9  absolute top-2 right-2 image-pro"/>
                </div>
                <div className=" relative h-full w-80   ">
                    <div  style={img} className="w-full h-96 rounded-2xl image-pro" ></div>
                    <div className="w-full h-1/3 bg-green-30 flex flex-col relative justify-start items-start py-3 ">
                        <h1 className="text-black  text-base  w-4/5 text-left ">Lorem lpsum is simpley</h1>
                        <h1 className="text-black  text-base font-bold w-4/5 text-left ">$141</h1>
                        <button className="flex justify-center items-center w-14 h-14 rounded-xl absolute top-3 bb-- right-0"><img src={add} alt="" className="w-6 h-6 " /></button>
                    </div>
                    <img src={likePic2} onClick={()=>{ like2()}} className="w-9 h-9  absolute top-2 right-2 image-pro"/>
                </div>
                <div className=" relative h-full w-80   ">
                    <div  style={img} className="w-full h-96 rounded-2xl image-pro" ></div>
                    <div className="w-full h-1/3 bg-green-30 flex flex-col relative justify-start items-start py-3 ">
                        <h1 className="text-black  text-base  w-4/5 text-left ">Lorem lpsum is simpley</h1>
                        <h1 className="text-black  text-base font-bold w-4/5 text-left ">$141</h1>
                        <button className="flex justify-center items-center w-14 h-14 rounded-xl absolute top-3 bb-- right-0"><img src={add} alt="" className="w-6 h-6 " /></button>
                    </div>
                    <img src={likePic3} onClick={()=>{ like3()}} className="w-9 h-9  absolute top-2 right-2 image-pro"/>
                </div>
                
            </div>
        </section>
     );
}
 
export default Products;