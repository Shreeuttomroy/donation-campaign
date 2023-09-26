import PropTypes from 'prop-types';

function Donation({ d }) {
  const { title, category, img, color, colorbg, price, colorcardbg } = d;
  const pStyle = {
    backgroundColor: colorbg,
  };
  const bStyle ={
    backgroundColor:color
  }
  const pDiv = {
    color: color,
    backgroundColor: colorcardbg,
  };
  return (
    <>
      <div style={pDiv} className=" rounded-lg flex mx-2 my-4">
        <img className=" bg-cover w-1/3 h-30" src={img} alt="Thumbnail" />
        <div className="p-5">
          <p style={pStyle} className="px-3 py-1 rounded-lg my-1 w-fit h-fit">
            {category}
          </p>
          <p className=" text-lg font-bold">{title}</p>
          <p className=" py-1 font-semibold rounded-lg my-1 w-fit h-fit">$ {price}</p>
          <button style={bStyle} className="text-white px-2 py-1 rounded-md" >View Details</button>
        </div>
      </div>
    </>
  );
}
Donation.propTypes = {
  d: PropTypes.object
};

export default Donation;
