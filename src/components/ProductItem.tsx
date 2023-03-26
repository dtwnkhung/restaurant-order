import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../store/slice/cartSlice';
import { Product } from '../types';
import { formatPrice } from '../utiliti';

interface ProductItemProps {
    product: Product;
    handleShowToast: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, handleShowToast }) => {

    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addProduct({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image }));
    };

    return (
        <>
            <div className="food-item p-3 rounded-3 bg-white shadow-sm">
                <img style={{ objectFit: "cover", aspectRatio: "16/10" }} src={product.image} alt="food-item" className="img-fluid w-100 rounded-3 mb-3" />
                <h5 className="fw-bold text-truncate">{product.name}</h5>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="food-item-price fs-5 text-danger fw-bold">{formatPrice(product.price)} đ</div>
                    <Button variant="primary" onClick={() => { handleAddToCart(); handleShowToast() }}><i className="far fa-utensils-alt me-2"></i>Thêm vào giỏ</Button>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
