import React , {useState,useEffect}from 'react'
import { useHistory } from 'react-router';
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else {  
            handleShow(false);}
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => { 
            window.removeEventListener("scroll",transitionNavBar);
        }
    }, [])


    return (
        <div className ={`Nav ${show && "Nav__black"}`}>
            <div className="Nav__contents">
                <img 
                    onClick = {() => history.push('/')}
                    className="Nav__logo" 
                    src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" 
                    alt=""/>

                <img 
                onClick={ () => history.push('/profile')}
                    className="Nav__avatar" 
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" 
                    alt=""/>
            </div>
        </div>
    )
}

export default Navbar
