import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";

function Details(){
  const [donate, setDontae] = useState({});

  const { id } = useParams();
  console.log(id);

  const donateDatas = useLoaderData();
  console.log(donateDatas);
  useEffect(() => {

    
    const donateData = donateDatas?.find((d) => d.id == id);
    console.log(donateData);
    setDontae(donateData);
  }, [id, donateDatas]);
  console.log(donate);

  return (
    <div>
      <Detail donate={donate}/>
    </div>
  );
}

export default Details;