import React from "react";

const ListUsers = ({ characters = [] }) => {
  return (
    <>
      {characters.map((item, index) => (
        <tr key={index}>
          <td>{item.dni}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
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

export default ListUsers;
