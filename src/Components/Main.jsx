import React, { useState } from "react";
import upper_Arrow from "../Images/Search_Icon/arrow_drop_up_24px.png";
import { useEffect } from "react";
import axios from "axios";
import "../Styles/Main.css"
import { SearchBar } from "./SearchBar";
import { Side_drawer } from "./Side_drawer";

export const Main = () => {
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  const [value,setValue]=useState("")

  const apifetching = async (page,value) => {
    if(value){
    let res = await axios.get(`https://www.balldontlie.io/api/v1/games?page=${page}&per_page=8&seasons[]=${value}`);
    console.log(res.data.data)
    setData(res.data.data)
    }
    else{
      let res = await axios.get(`https://www.balldontlie.io/api/v1/games?page=${page}&per_page=8`);
      setData(res.data.data);
    }
  };


  useEffect(() => {
    apifetching(page,value);
  }, [page,value]);

  return (
    <div>
      <SearchBar  setValue={setValue}/>
      <div className="table_heading">
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

      <div>{data.length>0 && data.map((elem)=>(<div key={elem.id}>{<Side_drawer elem={elem}/>}</div>))}</div>

   <div className="pagination" >
        <button data-cy="page_decrease" disabled={page===1? true :false } onClick={() => setPage((page) => page - 1)}>{"<"}</button>
        <button data-cy="current_page">{page}</button>
        <button className="page_end">4</button>
        <button data-cy="page_increase" disabled={page===4? true :false } className="Inc" onClick={() => setPage((page) => page + 1)}>{">"}</button>
      </div>
    </div>
  );
};


