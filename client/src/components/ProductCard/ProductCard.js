import React from 'react'
import Stars from "./Stars"
import {useHistory } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {getProducts, deleteProduct} from 'redux/actions/actions'

function ProductCard({product, small=true, stars, admin, id, refresh}) {
  const history = useHistory();

  const dispatch = useDispatch()
  const deleted = useSelector(state => state.deleted)

  function handleOnClickEdit(id){
    history.push(`/product/edit/${id}`)
  }

  function handleOnClickDelete(id) {
      dispatch(deleteProduct(id));
    }

  function handleOnClickAddProduct() {}

  return (
  <>
    <div className={small ? "product-card-container-small" : "product-card-container"}>
        <img className={small ? "product-card-photo-small" : "product-card-photo"} src={product.img} alt={"Imagen no encontrada"}/>
        <div className="product-card-content">
          <a href={"/products/" + product.id}>
            <div className="title">{product.name}</div>
          </a>
          {/* {small && <div className="stars-small"> <Stars disabledClick={true} stars={stars}/> </div>} */}
          <div className="price">${product.price}</div>
          {!small ? <><div className="divider"/>
            <div className="description">{product.description}</div>
             {/* <div className="link"> <span>Ver más en:</span> <a href ={product.link}>{product.link}</a> </div> */}
            <div className="divider"/>
            <div className="cantidad"></div>
            <div className="stock">{product.stock}</div>
            <div className="review">Review</div></> : null}
            {!small && <Stars disabledClick={true} stars={stars}/>}
            {small && admin ? <div className="buttons-container">
                <div className="product-card-button" onClick={() => handleOnClickEdit(id)}>Editar</div>
                <div className="product-card-button" onClick={() => handleOnClickDelete(id)}>Eliminar</div>
            </div> : null}
           {!small ? <div className="product-card-button" onClick={handleOnClickAddProduct}>Agregar al carrito</div> : null} 

          </div>
          <div>
      </div>
    </div>
  </>
  )
}

export default ProductCard
