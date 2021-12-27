import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

import menuIcon from '../../assets/icons/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.png';

import CartIcon from '../svgComponents/CartIcon';

import Cart from '../Cart';

const Header = ({ handleMenuVisibility, productsCartQuantity }) => {
  const [cartVisibility, setCartVisibility] = useState(false);

  function handleCartVisibility() {
    setCartVisibility((prevState) => {
      if (prevState) {
        return false;
      }
      return true;
    });
  }

  return (
    <Container>

      <button className="left" type="button" onClick={handleMenuVisibility}>
        <img src={menuIcon} alt="menu button" />
      </button>

      <img className="left" src={logo} alt="logo" />

      <ul className="menu">
        <li><a href="#collections">Collections</a></li>
        <li><a href="#men">Men</a></li>
        <li><a href="#women">Women</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="right" type="button" onClick={handleCartVisibility}>
        <CartIcon />
        {productsCartQuantity > 0 && <span>{productsCartQuantity}</span>}
      </button>

      <button className="avatar" type="button">
        <img src={avatar} alt="avatar" />
      </button>

      {cartVisibility && <Cart />}

    </Container>
  );
};

export default Header;

Header.propTypes = {
  handleMenuVisibility: PropTypes.func.isRequired,
  productsCartQuantity: PropTypes.number.isRequired,
};
