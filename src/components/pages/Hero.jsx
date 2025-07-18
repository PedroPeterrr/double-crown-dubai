import Building from "../../assets/image/Building.png"
import logo from "../../assets/logo/Double-Crown-Logo.png"

function Hero(){
    return(
        <section id="home"  className="relative">

            <div className="lg:h-[835px]">
                <img 
                    src={Building} 
                    alt="Double Crowns Logo" 
                    className="w-full h-full object-cover object-center" 
                />
            </div>

         
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src={logo} 
                        alt="Double Crowns Logo" 
                        className="w-30 md:w-70 lg:w-100"
                    />
                    
                    <h1 className="font-extrabold md:text-5xl lg:text-6xl">
                        Double Crowns
                    </h1>

                    <span className="font-medium text-[10px] md:text-lg
                    lg:text-xl no-white-space">
                        CONTRACTING L.L.C
                    </span>

                    <a 
                        href="#projects"
                        className=" bg-primary text-white px-3 py-1
                        text-[10px] cursor-pointer whitespace-nowrap hover:bg-primary-hover
                        md:text-lg
                        lg:px-6 lg:py-3 rounded-xl"
                    >
                        VIEW OUR PROJECTS
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;