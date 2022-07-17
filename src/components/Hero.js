import shoppinggirl from '../assets/shoppinggirl.svg'

const Hero = () => {
    // render: () =>{
        return (`
        <div class='bg-[#ef5777] max-w-[1024] h-screen lg:-mt-20 '>
         <div class='grid lg:grid-cols-2 gap-4 lg:pt-56'>                        
            <img src=${shoppinggirl} alt='shopping' class='w-full h-80' />
            <div class='m-auto w-72 '>
             <h1 class='text-xl font-bold text-white'>Find best products with best prices with fastest delivery</h1>
             <button class=' mt-6  w-1/2 h-10 text-white text-lg font-bold bg-[#0be881]'> View Offers</button>
            </div>
         </div>
        </div>
       `)
        
    // }

}

export default Hero