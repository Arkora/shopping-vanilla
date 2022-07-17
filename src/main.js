import '../style.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import { parseRequestUrl } from './utils'
import { setProducts } from './localStrorage'



const fetchData = async () =>{
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()        
        setProducts(data)        
    } catch (error) {
        console.log(error.message)
    }
}





const routes = {
    '/': Home,
    '/products': Products,
    '/cart': Cart,
    '/contact': Contact,
    
}

const router =  async () => {

    const request = parseRequestUrl()
    const parseUrl = (request.resource ? `/${request.resource}` : '/')
    const page = routes[parseUrl] ? routes[parseUrl] : Error404    
    const main = document.getElementById('main-container');
    main.innerHTML = await page.render()
    await page.after_render()
  };

  
  
  window.addEventListener('load',fetchData)  
  window.addEventListener('load', router)
  
  
  


