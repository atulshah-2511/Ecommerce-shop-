var PRODUCTS = []

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        PRODUCTS = data;
        display(data)
    })

function display(products) {
    let row = document.querySelector(".row")

    products.forEach((item) => {
        let col = document.createElement("div")
        col.setAttribute("class", "col-md-3")

        col.innerHTML = `
        <div class ="card">
        <img src= ${item.image}>
        <h2> ${item.title}</h2>
        <p>${item.description}</p>
        <span>Price: ${item.price}$</span>
        <br/>
        <button> Deatails </button>
        <br/>
        <button onClick='AddCart(${item.id})'> Add to Cart </button>
        </div>
        `
        row.appendChild(col)
    })

}

function firstAnimation() {
    console.log("firstAnimation");

    //gsap is use for animation
    var tl = gsap.timeline()
    tl.from("#banner", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
        .to("#banner-text1", {
            y: 0,
            duration: 2,
            ease: Expo.easeInout,
            stagger: 0.2,
            delay: -1
        })
        .from("banner-text3", {
            y: -10,
            duration: 0,
            ease: Expo.easeInout,
            duration: 1.5,
            delay: -1
        })
}

firstAnimation()


function AddCart(id) {
    let currentItem = PRODUCTS.find((product) => {
        return product.id === id
    })

    currentItem.Quantity = 1
    var prevItems = JSON.parse(localStorage.getItem('products')) || []

    prevItems.push(currentItem)

    localStorage.setItem('products', JSON.stringify(prevItems))
    alert("Item Successfully Added")
}
 
