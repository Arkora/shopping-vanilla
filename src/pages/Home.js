import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Offers from "../components/Offers"


const Home = {

    after_render: () =>{
        return`
        ${Navbar()}
        ${Hero()}
        ${Offers()}
        ${Footer()}
        `
    },
    render: () =>{   
        
        return`
        ${Navbar()}
        ${Hero()}
        ${Offers()}
        ${Footer()}
        `
        
    }
}

export default Home