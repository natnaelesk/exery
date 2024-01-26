import heart from './images/heart.png';
// import bag from './bag.svg';
import bag from "./images/bag-nav.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const NavBar = () => {
    return ( 
        
       <nav className="w-full flex justify-between align-center p-1 content-center h-24 px-5 text-white">
        
        <div className=" w-3per pl-12 flex justify-between items-center h-full font-mono text-xl">
            <li className=""> <a href="#" className='link'> Home </a></li>
            <li className=""><a href="#about" className='link' >Product</a></li>
            <li className=""><a href="#" className='link'>Blogs</a></li>
            <li className=""><a href="#" className='link'>Contacts</a></li>
        </div>
        <div className="w-3per flex justify-center items-center">
            <h2 className="text-5xl font-goblen">EXERY</h2>
        </div>
        <div className="w-3per  flex justify-end gap-4 items-center relative">
            <input type="text"  className=" w-64 h-14 rounded-full ser-box px-6" placeholder="Search" />
            {/* <button className="bg-slate-600 p-2 s--"><img src={serch} alt="" /></button> */}
            <div className="w-20 relative gap-2 h-14 items-center flex">
                <img src={heart} alt="heart" className='w-7 '/>
                <img src={bag} alt="bag" className='w-9 '/>
                <div className='absolute bg-red-500 w-4 h-4 right-1 top-7 rounded-full '></div>
            </div>
        </div>
       </nav>
     );
}
 
export default NavBar