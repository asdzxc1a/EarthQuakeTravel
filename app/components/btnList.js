import React from 'react';

const BtnList = (props) => {
  return (
    <div className="earthquake-btn-select">
     
      <button className="btn" onClick={props.Earthquakes_PastDay}>Find Best Place To Travel</button>
//      
    </div>
  );
}

export default BtnList;
