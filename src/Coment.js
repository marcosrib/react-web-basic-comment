import React from 'react';

/* teste */
const Coments = ({ c }) => {

    let comment = 'vazio'
    let email = 'vazio'
    if (c) {
        comment = c.comment
    }
    if (c.email) {
        email = c.email
    }
    return (
        <div className="card mt-3" style={{width: 600, height:100, backgroundColor:'#D3D3D3'}}>
            <div className="body">
                <div>
                {email} : <br/>
                {comment}
                     
                    
                </div>
            </div>
        </div>
    );
}

export default Coments;