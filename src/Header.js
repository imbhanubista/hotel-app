import { Link } from 'react-router-dom'
import style from './drinksComposition/style/styles.css'
import { useLocation } from 'react-router-dom'
import {FaCaretRight} from 'react-icons/fa'
const Header =(props)=>{
    const heading = useLocation()
    return(
        <>
        {/* {console.log(locate)} */}
            <h1 className="header">{props.title} 
            
            
            {
                heading.pathname === '/menu/foods' ?

                // props.title === "Food Items"?
                <Link to = "/menu/drinks" className="link">Go to Drink<FaCaretRight/></Link>
                :
                <Link to = "/menu/foods" className="link">Go to Food <FaCaretRight/></Link>
            }
            </h1>

        </>
    )
}
export default Header