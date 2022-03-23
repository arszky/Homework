import React from 'react';
import data from '../../data/dataAlbum';
import './index.css';

const Card=()=>{
  return (
    <div className='card'>
      <div className='card-wrap'>
        <img src={data.album.images[0].url} alt={data.album.name} className="card_img"/>

        <h3 className='card_album'>{data.name}</h3>
        <h3 className='card_artist'>{data.artists[0].name}</h3>

        <div className="button_wrapper">
          <button className="card_button">Select</button>
        </div>
        </div>
    </div>
  )
}

export default Card;