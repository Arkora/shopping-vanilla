export const getCartItems = () => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []
    return cart
  };
  export const setCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  };

  export const getProducts = () =>{
    const products = localStorage.getItem('products')
      ?JSON.parse(localStorage.getItem('products'))
      :[]
    return products
  }

  export const setTotal = (total) =>{
    localStorage.setItem('total', JSON.stringify(total))
  }

  export const getTotal = () =>{
    const total = JSON.parse(localStorage.getItem('total')) 
    return total
    
  }

  export const setProducts = (products) =>{
    localStorage.setItem('products', JSON.stringify(products))
  }

  export const addToCart = (id) =>{
    var cart = getCartItems()
    const products = getProducts()
    var exists = cart.find((item) => item.id == id)
    var total = getTotal()
    const product = products.find((item) => item.id == id)

    

    var productToAdd = {}
        var addTotal = total
        var subTotal = 0
        var newQuantity
        if(!exists) {
          subTotal =  Number(product.price)*Number(1)
          productToAdd = {id:product.id,title:product.title,quantity:Number(1),price:Number(product.price),image:product.image,subTotal:Number(subTotal)}
          addTotal +=subTotal          
          cart = [...cart, productToAdd]
          setCartItems(cart)
          setTotal(Number(addTotal))
        }else{
          productToAdd = exists        
          productToAdd.quantity +=1
          subTotal = Number(productToAdd.price)*productToAdd.quantity
          productToAdd.subTotal = subTotal
          addTotal =Number(productToAdd.price)
          cart = [...cart]
          setCartItems(cart)
          setTotal(total+addTotal)
        }
          
        




  }

  export const updateQuantity =  (id,quantity) =>{
    const cart = getCartItems()
    const exists = cart.find((item) => item.id == id)
    const total = getTotal()

    
     const subTotal = exists.price * quantity 
     const addTotal = ((quantity-exists.quantity)*exists.price)+total      
      exists.quantity = quantity
      exists.subTotal = subTotal     
      setTotal(addTotal)
      setCartItems(cart)
  }

  export const deleteItem = (id) =>{
    var cart = getCartItems()    
    var total = getTotal()    
    var exists = cart.find((item) => item.id == id) 

    setCartItems(cart.filter((item) => item.id != id))
    setTotal(total - exists.subTotal)
        
  }

  export const deleteCart = () =>{
    setCartItems([])
    setTotal(0)
    
  }