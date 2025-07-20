import ServiceCard from "../Reusebale/ServiceCard";
import { services } from "../../data/content";

const Services = () => {

  return (
    <section
      id="services"
      className="bg-primary opacity-95 flex flex-col justify-center items-center 
      p-12 gap-8 overflow-hidden
      md:gap-10"
    >
      <h1 className="text-white text-4xl font-bold text-center
        md:text-5xl lg:text-6xl"
      >
        SERVICES
      </h1>

      <div className="grid grid-cols-1 pb-3 gap-6 max-w-6xl mx-auto px-4
        md:grid-cols-2 ">
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
