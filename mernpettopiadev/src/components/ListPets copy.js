import React from "react";
import "../components/ListPets.scss";
const ListPets = ({ petslist = [] }) => {
  return (
    <>
      {petslist.map((item, index) => (
        <tr key={index}>
          <td>
            <figure>
              <img src={item.file} alt="" className="avatar" />
            </figure>
          </td>
          <td>{item.nameanimal}</td>
          <td>{item.racetype}</td>
          <td>{item.typeanimal}</td>
          <td>{item.years}</td>
          <td>
            <div className="actionsIcons">
              <i className="bi bi-trash"></i>
              <i className="bi bi-pencil-square"></i>
              {/* <i className="bi bi-eye"></i> */}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListPets;
