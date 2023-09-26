import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ card}) {
  const { id,title, category, img, color, colorbg, colorcardbg } = card;
  // console.log(typeof card);
  const pStyle = {
    backgroundColor: colorbg,
  };
  const pDiv = {
    color: color,
    backgroundColor: colorcardbg,
  };

  return (
    <>
      <Link to={`/${id}`}>
        <div
          style={pDiv}
          className=" rounded-lg w-[350px] md:w-[300px] mx-auto my-4">
          <img className=" bg-cover w-full h-52" src={img} alt="Thumbnail" />
          <div className="p-3">
            <p style={pStyle} className="px-3 py-1 rounded-lg my-1 w-fit h-fit">
              {category}
            </p>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
Card.propTypes = {
  card: PropTypes.object,
  donateCard: PropTypes.func,
};
export default Card;
