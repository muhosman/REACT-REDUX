import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  dog,
  gator,
  heart,
  horse,
  cow,
};

function AnimalShow({ type }) {
  return (
    <div>
      <img alt="animal" src={svgMap[type]} />
    </div>
  );
}

export default AnimalShow;
