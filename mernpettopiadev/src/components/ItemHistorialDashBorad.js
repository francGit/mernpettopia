import React from 'react'
import PropTypes from 'prop-types'
const ItemHistorialDashBorad = ({service,dateHistory}) => {
  return (
    <>
        <li className="itemList">
             <div className="boxDetail">
                        <i><img src="image/Pin.svg" alt="" className="img-fluid" /></i>
                        <strong>{service}</strong> <span>{dateHistory}</span>
                        <p className="detalleModal"><i> <img src="image/External_link.svg" alt="" className="img-fluid" /> </i> Ver detalle</p>
              </div>
        </li>
    </>
  )
}

export default ItemHistorialDashBorad

ItemHistorialDashBorad.propTypes={
    service:PropTypes.string.isRequired,
    dateHistory:PropTypes.string.isRequired
}

