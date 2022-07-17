import Navbar from "../components/Navbar"
import { getProducts,addToCart,setProducts } from "../localStrorage"
import { rerender } from "../utils"


const sorting = (sort) =>{
  var products = getProducts()
  if( sort == "acs" ){
    var sorted = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    setProducts(sorted)
  }else{
    var sorted = products.sort((a, b) => parseFloat(b.price) > parseFloat(a.price))
    setProducts(sorted)
  }
  rerender(Products)
  console.log(sort)
}

const fetchData = async (category) => {
  try {
    if (category == "") {
      var res = await fetch("https://fakestoreapi.com/products")
      var data = await res.json()        
      setProducts(data) 
    }else{
      
      var res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      var data = await res.json() 
           
      setProducts(data) 
    }
           
} catch (error) {
    console.log(error.message)
}
  rerender(Products)
}

const Products = {
   
    after_render: async () => {
      
      document.querySelectorAll('input[name="sorting"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
         sorting(event.target.value)
        });
      });

      document.querySelectorAll('input[name="category"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
          fetchData(event.target.value)
        })
      })

      const buyButtons = document.getElementsByClassName('buy-button');
    Array.from(buyButtons).forEach((buyButton) => {
      buyButton.addEventListener('click', () => {        
        addToCart(buyButton.id)
                  
      })
    })


    },
    
    render: async () =>{
      const products = getProducts()       
        return`
        ${Navbar()}
        <div>
    <Navbar />
    <div class='lg:flex flex-col-3 max-w-[1240px]   mt-2'>
      <div class='w-64 mt-8 pl-6 '>
        <ul class='list-none'>
          <div class='mb-6'>
          <li><input type='radio' name="sorting"  value='acs'    />Price low</li>
          <li><input type='radio' name="sorting"  value='desc'  />Price higher</li>    
          </div>                   
      <li><input type="radio" value="" name='category'  />All Products</li>
      <li><input type="radio" value='electronics' name='category'  /> Electronic</li>
      <li><input type="radio" value='jewelery' name='category' />Jewelery</li>
      <li><input type="radio" value="men's clothing" name='category' />Men's clothing</li>
      <li><input type="radio" value="women's clothing" name='category' />Women's clothing</li>

       
       </ul>   
        
      </div>
      <div class='w-full h-screen overflow-y-visible grid lg:grid-cols-3 gap-2 mt-8 pl-6 md:grid-col-3'>
      ${products
        .map((item) => {
          return `
        <div class='w-80 h-96 pl-2 pt-2 rounded-md bg-[#ffdd59] '>
        <h1 class='text-white truncate text-xl font-bold'>${item.title}</h1>
        <img src=${item.image} class='w-1/2 h-1/2 mt-6' />
        <h1 class='font-bold '>${item.price}$</h1>
        <button type='button' class='w-16 h-10 mt-10 rounded-md bg-[#0be881] text-white font-bold text-2xl buy-button ' id=${item.id}  >Buy</button>
        
        
      </div>
        `})
        .join("\n")}
      </div>
        
      </div>
    </div>
        `
        
    }
}

export default Products