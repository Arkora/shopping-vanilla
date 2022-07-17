import { getProducts,addToCart } from "../localStrorage"

const Offers = () => {
    
  const products = getProducts()
  
  
       
    
  return `
    <div class='lg:w-full lg:h-screen md:p-20  '>     
    <h1 class='text-xl font-bold'>Hot Offers</h1>
    
    <div class='mt-8 md:grid md:grid-cols-3  md:gap-4 text-white text-2xl '>
     <div class='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
       <h1 class='text-white truncate font-bold'>${products[0].title}</h1>
       <img src='${products[0].image}'  class='w-1/2 h-1/2 mt-6' />
       <h1 class='text-black'>${products[0].price}$</h1>
     </div>    
     <div class='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
       <h1 class='text-white truncate font-bold'>${products[1].title}</h1>
       <img src="${products[1].image}"  class='w-1/2 h-1/2 mt-6' />
       <h1 class='text-black'>${products[1].price}$</h1>
     </div>    
     <div class='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
       <h1 class='text-white truncate font-bold'>${products[2].title}</h1>
       <img src="${products[2].image}"  class='w-1/2 h-1/2 mt-6' />
       <h1 class='text-black'>${products[2].price}$</h1>
     </div>    
     
     <a href='/products'><button class='w-52 h-10 mt-10 rounded-md bg-[#0be881] font-bold  text-2xl'> All Products</button></a>
    
    </div>
     
   </div>
   `;
};

export default Offers;
