import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RootState } from '../store';
import { addProduct, adjustQuantity, clearCart, removeProduct } from '../store/slice/cartSlice';
import { Product } from '../types';
import { formatPrice } from '../utiliti';
import ButtonToggleCart from './ButtonToggleCart';

const CartList: React.FC = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [showCartList, setShowCartList] = useState(false);
    const products = useSelector((state: RootState) => state.cart.products);
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const handleOrder = () => {
        dispatch(clearCart());
        setShowBackdrop(false);
        setShowCartList(false);
        MySwal.fire({
            icon: 'success',
            title: <p>Đặt món ăn thành công<br />Cảm ơn bạn dã sử dụng dịch vụ của chúng tôi.</p>,
            showConfirmButton: false,
            timer: 1500
        })
    };
    const handleAddProduct = (product: Product) => {
        dispatch(addProduct(product));
    };

    const handleRemoveProduct = (id: number) => {
        dispatch(removeProduct(id));
    };

    const handleAdjustQuantity = (id: number, quantity: number) => {
        if (quantity === 0) {
            return;
        }
        dispatch(adjustQuantity({ id, quantity }));
    };


    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <>
            {showBackdrop ? <div className="backdrop position-fixed h-100 end-0 start-0 top-0" onClick={() => { setShowBackdrop(false); setShowCartList(false) }}></div> : <></>}

            {showCartList ?
                <div className="cart-info position-fixed p-3 p-sm-3 p-md-4 p-lg-4 bg-white top-0 end-0 h-100 d-flex flex-column">
                    <div className="fs-5 fw-bold pb-4 border-bottom mb-3">Thông tin giỏ hàng</div>
                    <div style={{ overflowY: "auto" }}>
                        {!products.length ? <div>Không có món ăn trong giỏ hàng</div> : <></>}
                        {products.map(product => (
                            <div key={product.id}>
                                <h6 className='text-truncate'>{product.name}</h6>
                                <div className='d-flex'>
                                    <div className='d-flex align-items-center'>
                                        <span
                                            className='btn p-0 btn-adjust-quantiy btn-increase text-black-50'
                                            onClick={() => handleAdjustQuantity(product.id, product.quantity - 1)}>
                                            <i className="fas fa-minus-circle"></i>
                                        </span>
                                        <span className='mx-2'>{product.quantity}</span>
                                        <span
                                            className='btn p-0 btn-adjust-quantiy btn-decrease text-black-50'
                                            onClick={() => handleAdjustQuantity(product.id, product.quantity + 1)}>
                                            <i className="fas fa-plus-circle"></i>
                                        </span>
                                    </div>
                                    <Button onClick={() => handleRemoveProduct(product.id)} className="rounded-circle btn-remove-item p-0 d-flex ms-auto" variant="outline-primary">
                                        <i className='far fa-trash-alt m-auto'></i>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-auto'>
                        <p className='text-end fw-bold text-danger mt-3'>Tổng giá: {formatPrice(totalPrice)}</p>
                        <div className="d-grid gap-2">
                            <Button onClick={handleOrder} disabled={!products.length ? true : false}>Xác nhận đặt món</Button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
            <ButtonToggleCart productCart={products.length} onToggleCart={() => { setShowCartList(true); setShowBackdrop(true) }} />
        </>
    );
};

export default CartList;
