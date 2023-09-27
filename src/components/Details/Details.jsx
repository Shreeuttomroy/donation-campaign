import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";

function Details(){
  const [donate, setDontae] = useState({});

  const { id } = useParams();

  const donateDatas = useLoaderData();
  useEffect(() => {

    
    const donateData = donateDatas?.find((d) => d.id == id);
    setDontae(donateData);
  }, [id, donateDatas]);

  return (
    <div>
      <Detail donate={donate}/>
    </div>
  );
}

export default Details;