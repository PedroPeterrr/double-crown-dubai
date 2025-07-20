const ServiceCard = ({ 
  title,
  description, 
  image 
}) => {
  return (
    <div className="
      flex flex-col rounded-2xl max-w-md w-full shadow-md
      overflow-hidden bg-white text-center
      
      transform transition-transform duration-200
      hover:scale-105"
    >
        <img src={image} alt={title} />
   
      <div className="p-2 gap-2 flex flex-col flex-grow md:p-5 lg:p-10 lg:gap-5">
        <h3 className="text-[16px] font-extrabold mb-2 text-primary 
          md:text-4xl lg:text-5xl text-shadow-lg"
        >
          {title}
        </h3>
        <p 
          className="text-[13px] md:text-2xl lg:text-3xl leading-normal
          text-shadow-lg "
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default ServiceCard;