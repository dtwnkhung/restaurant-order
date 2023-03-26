import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductItem from '../../components/ProductItem';
import { Col, Container, Row } from 'react-bootstrap';
import { logo } from '../../components/Image';
import "./style.css"
import { toast, ToastContainer } from 'react-toastify';

const ProductList: React.FC = () => {
    const styleLogo = {
        height: 150
    }
    const products = useSelector((state: RootState) => state.cart.productsList);

    const handleShowToast = () => {
        toast.success(`Đã thêm món ăn vào giỏ`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
        })
    }

    return (

        <>
            <div className="list-food-page p-3 p-sm-3 p-md-4 p-lg-5 min-vh-100">
                <Container className="list-food-container p-3 p-sm-3 p-md-4 p-lg-5 rounded-3 shadow-lg">
                    <div className="text-center mb-5">
                        <img src={logo} style={styleLogo} className="img-fluid" alt="logo" />
                    </div>
                    <Row>
                        {products.map(product => (
                            <Col xs={12} md={6} lg={4} xl={4} className="mb-3 mb-sm-3 mb-md-4 mb-lg-4" key={product.id}>
                                <ProductItem product={product} handleShowToast={handleShowToast} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <ToastContainer limit={1} />
        </>
    );
};

export default ProductList;
