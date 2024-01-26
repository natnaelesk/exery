const About = () => {
    return ( 
        <section id="about" className="relative flex  p-12 items-center  ">
            <div className="flex flex-col justify-left items-left p-12 text-left w-1/2 h-full  text-white">
                <h1 className="text-8xl uppercase about-title">About us</h1>
                <p className="mt-8 w-3/5 text-sm ">The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging </p>
                <p className=" mt-10 text-lg w-4/5 ">The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) and Rich Communication Services (RCS), which can contain digital images, videos, and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger applications (usually the term is used when on mobile devices).</p>
            </div>
            <div className="relative w-2/5 h-full">
            <div className="w-full h-full absolute about-pic z-10"></div>
            <div className="absolute w-80 h-48  sm-color bottom-20 -right-20 rounded-2xl z-0 "></div>
            </div>
        </section>
     );
}
 
export default About;