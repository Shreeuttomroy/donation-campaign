import { useState, useEffect } from "react";
import Donation from "./Donation";

function Donations() {
  const [Donations, setDonations] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    
    if (cards) {
      setDonations(cards);
    } else {
      setNofound("Donation Not Found!");
      console.log("Not found");
    }
  }, []);
  function deleteAll() {
    localStorage.clear();
    setDonations([]);
    setNofound("Donation Not Found!");
  }
  return (
    <>
      {!noFound > 0 ? (
        <div className="w-full">
          <div className="w-full flex justify-center">
            <button
              className=" mx-auto w-fit text-red-400 my-3 text-2xl text-center font-bold"
              onClick={deleteAll}>
              Delete All
            </button>
          </div>
          <div className=" mx-auto my-8 grid grid-cols-1 md:grid-cols-2">
            {isShow
              ? Donations.map((d) => <Donation key={d.id} d={d} />)
              : Donations.slice(0, 4).map((d) => <Donation key={d.id} d={d} />)}
          </div>
          <div className="w-full flex justify-center">
            {Donations.length>4? <button className=" mx-auto w-fit text-neutral-500 my-3 text-xl text-center font-semibold" onClick={()=>setIsShow(!isShow)}>{isShow? 'See Less...': "See More..."}</button>:''}
          </div>
        </div>
      ) : (
        <p className=" mx-auto w-fit text-red-400 my-52 text-3xl font-extrabold">
          Donation not found!
        </p>
      )}
    </>
  );
}

export default Donations;
