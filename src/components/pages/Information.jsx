import { statistics } from "../../data/content";

function Information() {
  return (
    <section className="bg-[#881c16e3] p-5 md:p-10 font-bold md:flex md:justify-center">
      
        <div className="
                max-w-screen-xl 
                grid grid-cols-2 md:grid-cols-3
                gap-5 md:gap-5 
                md:text-center
            ">
            {statistics.map((stat, index) => {
                const isMiddle = index === 1;

                const wrapperClasses = `
                flex flex-col md:items-center gap-2 
                ${isMiddle 
                    ? 'px-2 md:px-25 lg:px-50 md:border-l-3 md:border-r-3 md:border-white' 
                    : 'px-1 md:px-10 lg:px-20'
                }
                `;

                return (
                    <div key={stat.value} className={wrapperClasses}>
                        <span className="
                            text-white text-shadow-lg text-3xl 
                            md:text-5xl lg:text-6xl
                            "
                        >
                            {stat.value}
                        </span>
                        <p className="
                            text-xl md:text-2xl lg:text-3xl 
                            text-shadow-lg text-[#23262A]
                            ">
                                {stat.lines[0]}
                                <br/>
                                {stat.lines[1]}
                        </p>
                    </div>
                );
            })}
        </div>
    </section>
  );
}

export default Information;
