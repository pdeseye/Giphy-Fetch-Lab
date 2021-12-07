import React from 'react'

function GiphyInfo({ giphy }){
  return  (
    <div>
      {/* <h1>Type: {giphy.data.title}</h1> */}
      <img src={giphy.data.images.original.url} alt='giphy' />

    </div>
  )  
}
export default GiphyInfo