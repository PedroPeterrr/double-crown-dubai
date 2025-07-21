import { ArrowDown } from "lucide-react";

import {
    Building,
    Logo
} from "../../assets/assest";

function Hero(){
    return(
        <section id="home" className="min-h-screen bg-no-repeat bg-center bg-cover
            flex items-center justify-center
            px-2 py-8 md:px-4 md:py-8"
           style={{ backgroundImage: `url(${Building})` }}
        >
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src={Logo} 
                        alt="Double Crowns Logo" 
                        className="w-60 md:w-70 lg:w-100"
                    />
                    
                    <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                        Double Crowns
                    </h1>

                    <span className="font-medium text-[20px] md:text-lg
                    lg:text-xl no-white-space">
                        CONTRACTING L.L.C
                    </span>

                    <a 
                        href="#projects"
                        className=" bg-primary text-white px-3 py-1
                        text-[20px] cursor-pointer whitespace-nowrap hover:bg-primary-hover
                        md:text-lg
                        lg:px-6 lg:py-3 rounded-xl"
                    >
                        VIEW OUR PROJECTS
                    </a>
                </div>

            <div className="absolute bottom-1
                flex flex-col items-center animate-bounce"
            >   
                <span className="text-sm mb-2">Scroll</span>
                
                <a href="#services"
                    aria-label="Scroll to Services section">
                    <ArrowDown className="h-5 w-5" />
                </a>
            </div>
        </section>
    )
}

export default Hero;