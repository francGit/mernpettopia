import React from "react";
import "../components/ListPets.scss";
const ListPets = ({ petslist = [] }) => {
  return (
    <>
      {petslist.map((item, index) => (
        <div key={index} className="col-md-6 pt-4">
          <div className="boxProfile p-4">
            <div className="row">
              <div className="col-md-3">
                <div className="boxImgProfile">
                  <img src={item.file} alt="" className="avatar" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="boxUserNameDash">
                  <h2>{item.nameanimal}</h2>{" "}
                  <i>
                    <img src="image/Edit.svg" className="img-fluid" alt="" />
                  </i>
                </div>
                <hr className="mt-3" />
                <ul className="datPet pt-4">
                  <li>
                    Tengo: <b>{item.years} años</b>
                  </li>
                  <li>
                    Tipo: <b>{item.typeanimal}</b>
                  </li>
                  <li>
                    Soy de raza: <b>{item.racetype}</b>
                  </li>
                  <li>
                    Vivo en: <b>Bogota - Colombia</b>
                  </li>
                </ul>

                <hr className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPets;
