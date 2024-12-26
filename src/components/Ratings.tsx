import { Star } from "lucide-react";

const Ratings = () => {
  const rating = 4;
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          fill={rating > index ? "#FF532E" : "#FFC4B7"}
          color="none" size={16}
        />
      ))}
    </div>
  );
};

export default Ratings;
