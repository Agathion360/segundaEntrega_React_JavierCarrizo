import  './ItemDetail.css'


const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    // <div className="contenedorItem">
    //     <h2>Nombre: {nombre}</h2>
    //     <h3>Precio: {precio}</h3>
        
    //     <h3>{id}</h3>
    //     <img src={img} alt={nombre}/>
    // </div>


    <div className="card mb-3 contenedorItem" >
  <div className="row g-0">
    <div className="col-md-8 contimg">
      <img src={img} alt={nombre} className="img-fluid rounded-start imgproducto"  />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <div className="is-divider small"></div>
        <p className="card-text">Precio: <strong> <small>$</small> {precio}</strong></p>
        <p className="card-text">Id: <strong> {id}</strong></p>
        <p className="carde-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nobis nam eius hic velit a facilis, commodi quo provident modi? Laudantium velit ab odit qui, provident doloribus officia iure aperiam?</p>
      
      </div>
    </div>
  </div>
</div>

  )
}

export default ItemDetail
