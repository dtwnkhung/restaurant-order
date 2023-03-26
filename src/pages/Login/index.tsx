import { useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../../components/Image";
import { setPhone } from "../../store/slice/phoneSlice";
import "./style.css";

const Login: React.FC = () => {
    const [phone, setPhoneState] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const styleLogo = {
        height: 130,
    }
    const formSubmit = (e: any) => {
        e.preventDefault();
        dispatch(setPhone(phone));
        if ((!(phone.match('[0-9]{10}'))) || phone.length !== 10) {
            setMessage("Vui lòng nhập đúng định dạng số điện thoại")
        } else {
            navigate("/listfood");
        }

    }

    return (
        <>
            <div className="login-page">
                <Container className="min-vh-100 d-flex">
                    <Col xs={12} md={6} lg={5} xl={4} className="m-auto">
                        <div className="login-form px-4 py-5 shadow-lg rounded-3">
                            <div className="text-center">
                                <img src={logo} style={styleLogo} className="img-fluid mb-5" alt="logo" loading="lazy" />
                            </div>
                            <Form noValidate onSubmit={formSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Nhập số điện thoại"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhoneState(e.target.value)}
                                    />
                                    <label className="fw-bold">Số điện thoại</label>
                                </div>
                                <div className="text-danger mb-3"><small>{message}</small></div>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit" className="btn-block w-100">Xác nhận</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    );
};

export default Login;