import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
const CartWidget = () => {
    return(
        <ShoppingCartIcon sx={{ color: pink[300] }} />
    );
}

export default CartWidget;