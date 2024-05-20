import { Card } from '../components/Card';
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';

export const ComprasPage = () => {
  
  const { productos } = useContext(ProductosContext);

  const {agregarCompra, eliminarCompra} = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }

  return (
    <>
      <h1>Productos:</h1>
      <hr></hr>
      {
        productos.map(producto => (
          <Card 
            key={producto.id}
            titulo={producto.title}
            imagen={producto.image}
            descripcion={producto.description}
            precio={producto.price}
            id={producto.id}
            handleAgregar={()=>handleAgregar(producto)}
            handleQuitar={()=>handleQuitar(producto.id)}
           />
        ))
      }
    </>
  )
}
