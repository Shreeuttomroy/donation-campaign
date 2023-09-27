import PropTypes from "prop-types";
import swal from "sweetalert";

function Detail({ donate }) {
  const { id, color, img, title, price, desc } = donate;
  const bgcolor = { backgroundColor: color };
  const arr = [];
  let totalDonate = 0;
  function hanleDonates() {
    const Cards = JSON.parse(localStorage.getItem("cards"));
    if (!Cards) {
      arr.push(donate);
      localStorage.setItem("cards", JSON.stringify(arr));
      swal("Thanks for your donation!");
      if (arr.length>0) {
        arr.map((d) => {
          totalDonate += parseInt(d.price);
        })
    }
    localStorage.setItem("totalDonate",totalDonate)
    } else {
      const isExits = Cards.find((d) => d.id == id);
      if (!isExits) {
        arr.push(...Cards, donate);
        localStorage.setItem("cards", JSON.stringify(arr));
        swal("Thanks for your donation!");
        if (arr.length>0) {
            arr.map((d) => {
              totalDonate += parseInt(d.price);
            });
        }
        localStorage.setItem("totalDonate",totalDonate)
      } else {
        swal("Already, You are donated!");
      }
    }

  }
  return (
    <>
      <div className=" w-[100%-16px] mx-2">
        <div className=" relative h-[500px]">
          <img
            className="w-full bg-cover h-full relative"
            src={img}
            alt="Thumbnail"
          />
          <div className=" bg-[#0B0B0B80] w-full h-20 flex justify-start bottom-0 absolute">
            <button
              style={bgcolor}
              onClick={hanleDonates}
              className=" py-2 px-3 rounded-lg items-center font-semibold text-white my-auto mx-2">
              Donate: {price}
            </button>
          </div>
        </div>
        <div>
          <p className=" text-2xl font-bold my-3">{title}</p>
          <p className=" mb-10">{desc}</p>
        </div>
      </div>
    </>
  );
}
Detail.propTypes = {
  donate: PropTypes.object,
};

export default Detail;
