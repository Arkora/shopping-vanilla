const Navbar = () => {
  
    return (`
    <div class="flex justify-between items-center  max-w-[1240px] p-6 px-4 background-color: transparent">
        <a href="/"><h1 class="text-xl ml-6 font-bold ">Shopping</h1></a>
         <ul class="hidden md:flex ">
            <a href="/products"><li class="ml-8 ">Products</li></a>
            <a href="/contact"><li class="ml-8 ">Contact</li></a>
            <a href="/cart"><li class="ml-8 ">Cart</li></a>            
         </ul>
    </div>
    `)
  
}

export default Navbar;
