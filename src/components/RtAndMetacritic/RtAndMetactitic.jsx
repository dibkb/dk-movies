import React from 'react'
import './RtAndMetacritic.scss'
const RtAndMetactitic = ({rating}) => {
   const rottenTomato = rating.find((item) => item.Source === 'Rotten Tomatoes')
   const metacritic = rating.find((item) => item.Source === 'Metacritic')
   return (
      <div className = 'rt-metacritic-container'>
         {rottenTomato && <div className="rt-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/1920px-Rotten_Tomatoes_logo.svg.png" alt="" className = 'rt-img-container'/>
            <span className = 'rt-score'>Tomatometer : {rottenTomato.Value}</span>
         </div>}
         {metacritic && <div className="metacritic-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/640px-Metacritic_logo_original.svg.png" alt="" className = 'metacritic-img-container'/>
            <span className = 'rt-score'>Metacritic : {metacritic.Value}</span>
         </div>}
      </div>
   )
}

export default RtAndMetactitic
