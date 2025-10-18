import { IoMdStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export default function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<IoMdStar key={i} className="text-4xl text-amber-300" />);
    } else if (rating >= i - 0.5) {
      stars.push(<IoIosStarHalf key={i} className="text-4xl text-amber-300" />);
    } else {
      stars.push(<IoIosStarOutline key={i} className="text-4xl text-amber-300" />);
    }
  }

  return <div className="flex">{stars}</div>;
}
