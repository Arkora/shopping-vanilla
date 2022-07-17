import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  getCartItems,updateQuantity,deleteItem,deleteCart, getTotal} from "../localStrorage";
import  {rerender} from '../utils'





const clearCart = () =>{
    deleteCart()
    rerender(Cart)
}

const deleteCartItem = (id) =>{
    deleteItem(id)
    rerender(Cart)
}

const changeQuantity = (e,id,quantity) =>{  
  while(e.keyCode == 13){
    if (quantity != "") {
          updateQuantity(id,quantity) 
          rerender(Cart)      
        } else {
          alert("Write Quantity");
        }
  }
}


const Cart = {
  after_render: () => {
    document.getElementById('clear').addEventListener('click',() =>{
         clearCart()
    })

    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {        
        deleteCartItem(deleteButton.id)
                  
      })
    })

    

    const inputs = document.getElementsByClassName('quantity')
    Array.from(inputs).forEach((input) => {
      input.addEventListener('keypress', (e) => {
        changeQuantity(e,input.id,e.target.value) 
                  
      })
    })

   

  },

  render: async () => {
    const cart = getCartItems()
    const total = getTotal()
    return `
        ${Navbar()}
        <div class="w-full  bg-orange-500 h-screen">
         <div class="flex w-full h-full">
          <div class="m-auto  w-3/4 h-3/4 bg-slate-100 overflow-auto">
           <div class="overflow-y ">
            ${cart.map((item) =>{
                return `
                <div class="border md:flex md:flex-row w-full  justify-between ">
                     <div class="w-40">
                      <h1 class="text-clip">${item.title}</h1>
                      <img src=${item.image} class=" w-20 h-20  " />
                     </div>
                     <div class="grid grid-cols-3">
                        <h1>Quantity: ${item.quantity}</h1>
                        <input type="text" placeholder=${item.quantity} class="w-8 h-8 pl-2 ml-2 quantity" id=${item.id}  />
                     </div>
                     <div class="grid grid-cols-2">
                      <h1>${item.subTotal}$</h1>
                      <button class="w-8 h-8 ml-2 rounded-md  bg-[#ff3f34] text-white font-bold text-2xl delete-button" id=${item.id}>
                       X
                      </button>
                     </div>
                    </div>
                `
            }).join("\n")}
          </div>
         </div>
        </div>
        <div class="md:h-20 w-full md:-mt-20  bg-orange-500">
        <div class="md:h-3/4 md:w-3/4 m-auto bg-white md:grid md:grid-cols-3 gap-4 ">
          <h1 class="text-xl mt-2">Total:${total}$</h1>
          <button class='md:w-40  h-10 mt-2 rounded-md bg-[#ff3f34] font-bold text-white md:text-xl' id="clear" >Clear</button>
        <!--TODO: Write function when endpoint is ready for button on click -->
          <button class='md:w-40   h-10 mt-2 ml-16 rounded-md bg-[#0be881] font-bold text-white md:text-xl'>Procced Order</button> 
            
        </div>

      </div>    
        ${Footer()}        
        `
  }
}

export default Cart;
