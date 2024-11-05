import React from 'react';
import { mainBody } from '../../Assets/Assets';
import './Mainbody.css'

const Mainbody = () => {
  return (
    <div className='main-body-container'>
      {mainBody.map(item => (
        <div key={item._id} className="main-body-item">
            <img src={item.image} alt="pizza image" />
            <h2 className='title'>{item.title}</h2>
            <h3 className="desc">{item.desc}</h3>
            <h3 className="price">{item.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default Mainbody