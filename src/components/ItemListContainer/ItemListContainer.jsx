import { useEffect,useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProductos,getProductosCat } from '../../asyncmock'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]=useState([])

  const {idCategoria} = useParams()

  useEffect( () => {

    const funcionProductos = idCategoria ? getProductosCat : getProductos
    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error))




  },[idCategoria])

  return (
    <>
    <h2 className='saludo'>{greeting}</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
