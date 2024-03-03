import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
const StarRating = ({ NoOfStars = 5 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (id) => setRating(id);
  const handleMousLeave = () => setRating();
  const handleMousMove = (id) => setHover(id);

  return (
    <div>
      {[...Array(NoOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= hover || rating ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseLeave={() => handleMousLeave()}
            onMouseMove={() => handleMousMove(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
