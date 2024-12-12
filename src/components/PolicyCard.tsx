interface PolicyCardProps {
  logo: string;
  title: string;
  description: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="">
        <img src={logo} alt="" className="w-12 sm:w-16" />
      </div>
      <div className="text-center text-xs sm:text-sm font-medium">
        <h6>{title}</h6>
        <p className="leading-6 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default PolicyCard;
