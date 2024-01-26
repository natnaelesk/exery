import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import arrow from "./images/down.png";
import imgg from "./images/bag-3.jpg";
import add from "./images/add-plus-button.png";
import heart2 from "./images/heart2.png";
import heart3 from "./images/heart(3).png";
import { useState } from "react";

const List = ({blogs}) => {
    const img = {
        backgroundImage:`url(${imgg})`,
    }
    const [likePic,setLikPic] = useState(heart2)
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
    return ( 
        <div>
             { blogs.map( (blog) => (
                <Link to={``}>
                <div className=" relative h-full w-80   " key={blog.id}>
                    <div  style={img} className="w-full h-96 rounded-2xl image-pro" ></div>
                    <div className="w-full h-1/3 bg-green-30 flex flex-col relative justify-start items-start py-3 ">
                        <h1 className="text-black  text-base  w-4/5 text-left ">{blog.title}</h1>
                        <h1 className="text-black  text-base font-bold w-4/5 text-left ">${blog.price}</h1>
                        <button className="flex justify-center items-center w-14 h-14 rounded-xl absolute top-3 bb-- right-0"><img src={add} alt="" className="w-6 h-6 " /></button>
                    </div>
                    <img src={likePic}  className="w-9 h-9  absolute top-2 right-2 image-pro"/>
                </div>
                </Link>
           )) }
       </div>
     );
}
 
export default List;
