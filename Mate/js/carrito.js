let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const carritoDiv = document.getElementById("carrito")
const precioTotal = document.getElementById("precioTotal")
const comprar = document.getElementById("final")
comprar.addEventListener('click', comprarClick);

carrito.forEach(producto=>{
    let div = document.createElement("div")
    div.className = "productoCarrito"
    div.innerHTML += `  <div>
                            <img class="imgCarrito" src=${producto.img} alt="Imagen producto">
                        </div>
                        <p>${producto.nombre}</p>
                        <p>${producto.desc}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>$${producto.precio}</p>`
    carritoDiv.appendChild(div)
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0)
})

function comprarClick(){
    carritoDiv.innerHTML ='';
    precioTotal.innerText = 0;
    localStorage.removeItem("carrito")
}