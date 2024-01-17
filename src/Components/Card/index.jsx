import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({name,brandName,colour,id,img,price}) {
  return (
    <div class="card" style={{width:'400px'}}>
  <img src={`https://${img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{brandName}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{colour}</li>
    <li class="list-group-item">{price}</li>
  </ul>
  <div class="card-body">
    <Link to={`/product-details/${id}/${name.split(' ').join('-')}`} class="card-link">more info</Link>

  </div>
</div>
  )
}
