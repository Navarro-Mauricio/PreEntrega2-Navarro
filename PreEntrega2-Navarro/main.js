const precios = {
    4: 150,
    6: 170,
    8: 190,
  };
  
  const compras = [];
  
  function agregarCompra(tamano, cantidad) {
    const precio = precios[tamano];
    const subtotal = precio * cantidad;
    compras.push({ tamano, cantidad, precio, subtotal });
  }
  
  function calcularTotal() {
    return compras.reduce((total, compra) => total + compra.subtotal, 0);
  }
  
  function realizarCompra() {
    const nombre = prompt("Bienvenido a Sebs Calcos, ingrese su nombre para continuar.");
  
    while (true) {
      const tamano = Number(prompt("De qué tamaño desea los stickers (4, 6, u 8 cm)?"));
  
      if (precios[tamano]) {
        const cantidad = Number(prompt(`Hola ${nombre}, ingrese la cantidad de stickers de ${tamano} cm que desea comprar.`));
  
        if (cantidad > 0) {
          agregarCompra(tamano, cantidad);
  
          const total = calcularTotal();
  
          alert(`Lo agregado sería $${compras[compras.length - 1].subtotal} y el total de la compra hasta ahora es $${total}`);
  
          const continuar = confirm("¿Desea agregar más productos?");
          if (!continuar) {
            alert(`Tiene que abonar $${total}. Gracias por su compra.`);
            break;
          }
        } else {
          alert("Por favor, ingrese una cantidad válida.");
        }
      } else {
        alert("Por favor, ingrese un tamaño válido (4, 6, u 8 cm).");
      }
    }
  }
  
  function mostrarDetallesCompra(funcionMostrar) {
    compras.forEach(funcionMostrar);
  }
  
  realizarCompra();
  
  mostrarDetallesCompra(compra => {
    alert(`Tamaño: ${compra.tamano} cm, Cantidad: ${compra.cantidad}, Precio unitario: $${compra.precio}, Subtotal: $${compra.subtotal}`);
  });
  