import React from 'react';

import Coment from './Coment'
const Coments = ({comments}) => {
  const keys = Object.keys(comments)
  console.log(keys);

  return (
    <div >
      {keys.map(key => <Coment key={key} c={comments[key]} />)}

    </div>
  );

}

export default Coments;
