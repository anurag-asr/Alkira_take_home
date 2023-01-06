import React, { useState } from "react";
import upper_Arrow from "../Images/Search_Icon/arrow_drop_up_24px.png";
import { useEffect } from "react";
import axios from "axios";
import { Drawerproto } from "./Drawerproto";
import { useDisclosure } from "@chakra-ui/react";

export const Frame1 = () => {
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  const {  onOpen  } = useDisclosure()

  const datafetch = async (p) => {
    let res = await axios.get(`https://www.balldontlie.io/api/v1/games?page=${p}&per_page=8`);
    setData(res.data.data);
  };
  useEffect(() => {
    datafetch(page);
  }, [page]);

  console.log(data);

  function Clicable(){
    return (
        <Drawerproto onOpen={onOpen}/>
    )
  }
  return (
    <div>
      <div className="rectangle1">
        <p>Team Name</p>
        <div className="city">
          <p>City</p>
          <img
            className="upper_arrow"
            src={upper_Arrow}
            alt="upper_arrow_icon_in_city"
          />
        </div>
        <p>Abbreviation</p>
        <p>Conference</p>
        <p>Division</p>
      </div>

      <div >
        {
            data.length>0 && data.map((elem)=>(
               
              <div>{<Drawerproto elem={elem}/>}</div>  
              
            ))
        }
      </div>

      <div className="pagination" >
        <button onClick={() => setPage((page) => page - 1)}>{"<"}</button>
        {/* <span>{page}</span> */}
        <button className="page_int" disabled={page<=1}>{page}</button>
        <button className="page_end">4</button>
        <button className="Inc" onClick={() => setPage((page) => page + 1)}>{">"}</button>
      </div>
      
    </div>
  );
};


