import { BsBag } from 'react-icons/bs';
import styles from '../Header/Header.module.css';
import { NavLink, useNavigate} from "react-router-dom";
// import { SidebarContext } from ''
 
const Header = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <BsBag onClick={()=>{navigate('/cart')}} className={styles.cartIcon}/>
        </div>
    );
};

export {Header};

