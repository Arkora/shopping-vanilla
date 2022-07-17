import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  getCartItems,updateQuantity,deleteItem,deleteCart} from "../localStrorage";

const cart = getCartItems()

const Cart = {
  after_render: () => {},

  render: () => {
    return `
        ${Navbar()}
        <div class="w-full  bg-orange-500 h-screen">
         <div class="flex w-full h-full">
          <div class="m-auto  w-3/4 h-3/4 bg-slate-100 overflow-auto">
           <div class="overflow-y ">
            ${cart.length===0 ? 
                `
                <div class=" flex">
                 <div class="m-auto mt-20">
                 <h1 class="font-bold text-2xl "> Hurry up is time to catch offers!!! </h1>
                 <a href='/products'><button class='w-40 h-10 mt-4 rounded-md bg-[#0be881] font-bold text-white text-xl'>All Products</button></a> 
                </div>

              ` : 
              cart.map((item) =>{
                
                `
                    <div class="border md:flex md:flex-row w-full  justify-between ">
                     <div class="w-40">
                      <h1 class="text-clip">${item.title}</h1>
                      <img src=${item.image} class=" w-20 h-20  " />
                     </div>
                     <div class="grid grid-cols-3">
                        <h1>Quantity: ${item.quantity}</h1>
                        <input type="text" placeholder=${item.quantity} class="w-8 h-8 pl-2 ml-2" />
                     </div>
                     <div class="grid grid-cols-2">
                      <h1>${item.subTotal}$</h1>
                      <button class="w-8 h-8 ml-2 rounded-md  bg-[#ff3f34] text-white font-bold text-2xl">
                       X
                      </button>
                     </div>
                    </div>
                    `
                
              })
            }
          </div>
         </div>
        </div>    
        ${Footer()}        
        `
  }
}

export default Cart;
