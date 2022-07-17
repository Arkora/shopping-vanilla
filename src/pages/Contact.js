import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Form from "../components/Form"

const Contact = {
    render: () => {
        return`
        ${Navbar()}
        ${Form()}
        <div class='mt-8'>
        ${Footer()}   
        </div>
        `
    }

}

export default Contact