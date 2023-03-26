import React from 'react';
import CartList from '../../components/CartList';
import ProductList from '../ProductList';
import "./style.css";

const ListFood: React.FC = () => {
    return (
        <div>
            <ProductList />
            <CartList />
        </div>
    );
};

export default ListFood;
