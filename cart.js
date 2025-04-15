const GetDataCart = () => {
    let cartData = JSON.parse(localStorage.getItem("products")) || [];
    let box1 = document.querySelector("#cartItems")

    cartData.forEach(element => {
        let row = document.createElement("div")
        row.className = "flex"
        row.innerHTML = `
                    <div className="col-md-3">
                        <img src="${element.image}" id="img"/>
                    </div>
                    <div className="col-md-6">
                        <h5 id="title">${element.title}</h5>
                        <h4>Price: ${element.price}$</h4>
                    </div>
                    <div class="d-flex justify-content-between" id="qty">
                    <button style="border: 0px" onclick="decreaseQuantity" id="decrease">-</button>
                    <p class="mt-2">1</p>
                    <button style="border: 0px" onclick="increaseQuantity id="increase">+</button>
                </div>
                `

        box1.appendChild(row)
    });

}

const getPrice = () => {
    let cartData = JSON.parse(localStorage.getItem("products")) || [];
    let total = document.querySelector("#total")

    let totalPrice = cartData.reduce((a, currents) => {
        return a + currents.price
    }, 0)

    total.innerText = totalPrice+"$";

}
GetDataCart()
getPrice()