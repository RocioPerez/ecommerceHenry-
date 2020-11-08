import React, { useState, useEffect} from 'react';
import axios from 'axios'
import './create.css'

function CreateUpdateProduct({id}){
    // si usamos un estado vacio, estamos simulando que es un create, si le ponemos valores inciales, es un update.
    let [product, setProduct] = useState();
   
    const handleOnClick = (e) => {
        e.preventDefault()
        // const {ngoId, name, description, price, stock} = product;
        // if (ngoId && name && description && price && stock){ 
        if (!id) {
            axios.post(`http://localhost:3001/products`, product)
                .then((response) => {
                    console.log(response);
                    alert("Producto agregado")
                }, (error) => {
                    console.log(error);
                    alert("Hubo un error. Por favor, intentá de nuevo.")
                });    
                // } else {
                //     alert('FALTAN CAMPOS POR COMPLETAR')
            }
            else {
                axios.put(`http://localhost:3001/products/${id}`, product)
                .then((response) => {
                    console.log(response);
                    alert("Producto modificado")
                }, (error) => {
                    console.log(error);
                    alert("Hubo un error. Por favor, intentá de nuevo.")
                });    
            }
        }
    
    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        setProduct({
            ...product,
            [name]: value
        });
        console.log(product)
    }

    // const onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         let img = event.target.files[0];
    //         img = URL.createObjectURL(img)
    //         setProduct({
    //           imagen: img
    //         });
    //     }
    // }

    useEffect( () => {
        if (id) {
            (async () => {
            product = await axios.get(`http://localhost:3001/products/${id}`)
            setProduct(product.data)  
            }
        )()}}, [id])

    let src = "";

    if (product) src = product.img;

    return (
        <div>
            <h1 className="tituloForm">{id ? 'Actualizar' : 'Crear'} Producto</h1>
            <br /><br />
            <form className="">
                <input className="input1" onChange={handleInputChange} value={product ? product.ngoId : ""} name="ngoId" required type="text" placeholder="ONG" /><br /><br />
                <input className="input2" onChange={handleInputChange} value={product ? product.name : ""} name="name" required type="text" placeholder="Título del producto" /><br /><br />
                <input className="input3" onChange={handleInputChange} value={product ? product.description : ""} name="description" required type="text" placeholder="Descripción del producto" /><br /><br />
                <input className="input4" onChange={handleInputChange} value={product ? product.categoryId : ""} name="categoria" required type="text" placeholder="Categoría del producto" /><br /><br />
                <input className="input5" onChange={handleInputChange} value={product ? product.price : ""} name="price" required type="number" placeholder="Precio del producto ($)" /><br /><br />
                <input className="input6" onChange={handleInputChange} value={product ? product.stock : ""} name="stock" required type="number" placeholder="Stock del producto" /><br /><br />
                <input className="input7" onChange={handleInputChange} value={product ? product.img : ""} name="img" required type="text" placeholder="URL de la imagen del producto" /><br /><br />
                <img src={src} alt={"Imagen no encontrada"}/>
                {/* {src !== "" ? <div> <input onChange={onImageChange} name="img" required type="file" placeholder="Upload Product Image" /><br /><br /> </div>: null} */}
                <button className="button" onClick={handleOnClick}>{id ? 'ACTUALIZAR' : 'CREAR'}</button>
                {/* <button onClick={handleOnClick}>{id ? 'DELETE' : 'NODELETE'}</button> */}
            </form>
        </div>
    );
}

export default CreateUpdateProduct;
