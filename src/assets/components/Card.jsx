import Img from "./Img";

const Card = ({ imgUrl, name, buttonText }) => {
  return (
    <li className="card">
      <Img imgUrl={imgUrl} />
      <p className="name">{name} </p>
      <button>{buttonText} </button>
    </li>
  );
};

export default Card;
