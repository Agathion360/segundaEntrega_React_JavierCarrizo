const productos=[{id:"1", nombre:"BUZO MAORI CCC RUS",precio:13090,img:"../public/image/buzo1.jpg",idCat:"3"},
 {id:"2", nombre:"T-SHIRT CCC ROUGHT TEE",precio:8480,img:"../public/image/teeshirt.jpg",idCat:"3"},
 {id:"3", nombre:"MEDIAS LARGAS JUEGO CCC",precio:4200,img:"../public/image/medias1.jpg",idCat:"5"},
 {id:"4", nombre:"PELOTA MENTRE TRAINING",precio:9500,img:"../public/image/guinda1.jpg",idCat:"2"},
 {id:"5", nombre:"REMERA LOGO TEE CCC ",precio:8320,img:"../public/image/remeratee2.jpg",idCat:"3"},
 {id:"6", nombre:"REMERA TERMICA MANGA LARGA GILBERT",precio:9950,img:"../public/image/termicagilbert.jpg",idCat:"5"},
 
 {id:"7", nombre:"PACK 16 TAPONES DE ALUMINIO + MARIPOSA",precio:4729,img:"../public/image/tapones.jpg",idCat:"5"},
 {id:"8", nombre:"TEE DE RUGBY, TELESCOPICO",precio:9350,img:"../public/image/tee.jpg",idCat:"5"},
 {id:"9", nombre:"CASCO PROCER",precio:13900,img:"../public/image/cascoprocer.JPG",idCat:"7"},
 {id:"10", nombre:"PECHERA TWS ",precio:26850,img:"../public/image/pechera.jpg",idCat:"7"},
 {id:"11", nombre:"CASCO ADIDAS",precio:22000,img:"../public/image/cascoAdidas.jpg",idCat:"7"}, 
 {id:"12", nombre:"GUINDA GILBERT",precio:12000,img:"../public/image/guinda2.jpg",idCat:"2"},
 
 {id:"13", nombre:"PROTECTOR BUCAL D3 GEL",precio:5600,img:"../public/image/pbucal2.jpg",idCat:"7"},
 {id:"14", nombre:"BOTINES CCC STAMPEDE 2.0",precio:39700,img:"../public/image/botnesCCC1.jpg",idCat:"6"},
 {id:"15", nombre:"BOTINES CCC PHOENIX 2",precio:32000,img:"../public/image/botnesCCC2.jpg",idCat:"6"},
 {id:"16", nombre:"BOTINES CCC PHOENIX 2 SG WHITE",precio:43000,img:"../public/image/botnesCCC3.jpg",idCat:"6"},
 {id:"17", nombre:"BUZO TRAINING TOP 1/2 CIERRE FLASH ",precio:16700,img:"../public/image/buzoFlash.jpg",idCat:"3"},
 {id:"18", nombre:"TSHIRT ENTRENAMIENTO ",precio:7000,img:"../public/image/TSHIRTENTRENAMIENTO.jpg",idCat:"3"},
 {id:"19", nombre:"PROTECTOR BUCAL GILBERT GEL",precio:4700,img:"../public/image/pbucal1.jpg",idCat:"7"},
 {id:"20", nombre:"HOMBRERA GILBERT MERCURY",precio:32800,img:"../public/image/hombreragilbert.jpg",idCat:"7"}
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}


export const getUnProducto = (id)=>{
    return new Promise(resolve => {
        setTimeout( ()=>{
            const producto = productos.find(prod => prod.id ===id)
            resolve(producto)
        },2000)
    })
}
export const getProductosCat = (idCategoria) =>{
    return new Promise(resolve=>{
        setTimeout( ()=>{
            const productosCategoria = productos.filter(prod => prod.idCat===idCategoria)
            resolve(productosCategoria)
        },2000)
    })
}