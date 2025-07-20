import { Background } from "../../assets/assest";
import { aboutTexts } from "../../data/content";
import Paragraph from "../Reusebale/Paragraph";

function About(){
    return (
        <section id="about" className="bg-no-repeat bg-center bg-cover bg-blend-overlay"
            style={{
        backgroundImage: `url(${Background})`,
        backgroundColor: "rgba(35,38,42,0.70)",
        backgroundBlendMode: "overlay",
      }}
        >   
            <div className="p-15 flex flex-col lg:w-3/5 gap-5 md:gap-8 lg:gap-10 text-wrap">
                <h1 className="text-white font-extrabold after:mt-5
                    text-4xl md:text-5xl lg:text-6xl
                    after:content-[''] after:h-1.5 after:rounded 
                    after:bg-white after:block after:w-20 
                    md:after:h-2  md:after:w-25
                    lg:after:h-3 lg:after:w-30"
                >
                    ABOUT
                </h1>

                {aboutTexts.map((text, index) => 
                    <Paragraph 
                        key={index}
                    > 
                        {text}
                    </Paragraph>
                )}
            </div>
        </section>
    )
}
export default About;