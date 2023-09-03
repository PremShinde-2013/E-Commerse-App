import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className='cart-products'>
      <div className='cart-product'>
        <div className='image-container'>
          <img src={prod} alt='' />
        </div>
        <div className='prod-details'>
          <span className='name'>product name</span>
          <MdClose className='close-btn' />
          <div className='quantity-buttons'>
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className='text'>
            <span>3</span>
            <span>X</span>
            <span>&#8377;1212</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
