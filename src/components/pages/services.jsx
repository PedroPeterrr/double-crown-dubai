import Team from "../../assets/image/Team.svg";
import Cap from "../../assets/image/Cap.svg";

const ServiceCard = ({ 
  title,
  description, 
  image 
}) => {
  return (
    <div className="flex flex-col rounded-2xl max-w-md w-full shadow-md overflow-hidden bg-white text-center">
     
        <img src={image} alt={title}  />
   
      <div className="p-4 gap-2 flex flex-col flex-grow lg:p-10 lg:gap-5">
        <h3 className="text-[16px] font-extrabold mb-2 text-primary 
          md:text-[22px] lg:text-5xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}
        >{title}</h3>
        <p 
          className="text-[13px] flex-grow overflow-y-auto 
          md:text-lg lg:text-3xl leading-normal"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}
        >
          {description}
        </p>

      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Our Team",
      description: "Highly qualified engineers with long experience between 15 to 30 years of work in India, Egypt and Dubai. Shared in huge recognized projects.",
      image: Team,
    },
    {
      title: "We Provide",
      description: "Construction and execution of buildings from A to Z, including infrastructure and landscape.",
      image: Cap,
    }
  ];

  return (
    <section
      id="services"
      className="bg-primary opacity-95 flex flex-col justify-center items-center p-10 gap-8 overflow-hidden
      md:gap-15 md:p-20 "
    >
      <h1 className="text-white text-[16px] font-bold text-center
        md:text-5xl lg:text-6xl
      ">OUR SERVICES</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 lg:grid-cols-2 grid-cols-1
        md:gap-25 lg:gap-30
      ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
