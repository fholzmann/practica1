// Realizar una función llamada “calculatePrice” que reciba dos parámetros, el primero siendo el nombre de un producto 
// (ej: Laptop), y el segundo el precio de ese producto (sin el signo $). Dicha función deberá imprimir en consola el 
// nombre del producto, el costo del envío del mismo, y el precio final.

// El texto impreso por la consola debería verse de la siguiente manera: 
// ‘El producto <nombre del producto> cuesta <precio del producto>. Su costo de envío es de <costo de envío>. 
// Por lo tanto, el precio final es de <precio final>’ 

// Para probar que el código funcione correctamente, utilizar los siguientes ejemplos.
// Tener en cuenta: no pueden ser modificados de ninguna manera.

// calculatePrice(‘Macbook’, 2500);
// calculatePrice(‘Celular’, 500);
// calculatePrice(‘Playstation’, 4500);


// Cada producto tiene un costo de envío individual según su rango de precio:

// Si el precio es $ 1 - $ 2000 el costo de envío → es de $ 300 
// Si el precio es $ 2001 - $ 4000 el costo de envío → es de $ 500
// Si el precio es > $ 4000 el costo de envío → es de $ 700

const calculatePrice = (product, price) => {
    let shipping = 0
    if (price > 1 && price <= 2000) {
        shipping = 300
    } else if (price > 2000 && price <= 4000) {
        shipping = 500        
    } else if (price > 4000) {
        shipping = 700
    }

    const finalCost = price + shipping
    return `El producto ${product} cuesta $${price}. Su costo de envío es de $${shipping}.\nPor lo tanto, el precio final es $${finalCost}.`
}

console.log(calculatePrice("Macbook", 2500));
console.log(calculatePrice("Celular", 500));
console.log(calculatePrice("Playstation", 4500));