import React from "react";

const ItemServSlide = props => {
    let {imgSrcSlide, nameService} = props.data;
  return (
      <div className="itemServicio">
        <div className="boxItem">
          <div className="boxIcon">
            <figure>
              <img src={imgSrcSlide} alt="" className="img-fluid"></img>
            </figure>
          </div>
          <div className="boxTexto">
            <h2>{nameService}</h2>
          </div>
        </div>
      </div>
  );
};

export default ItemServSlide;
