import React from 'react'
const User = props => {
    return (
        <div className="form-inline justify-content-between mt-3 " >
        <h5> {props.email}</h5>
        <input className="btn  btn-primary  " type="button" value="Logout" onClick={props.logout}  />
    </div>
    )


}
export default User