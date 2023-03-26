import { Badge, Button } from "react-bootstrap";


interface ButtonToggleCartProp {
    productCart: number | string;
    onToggleCart?: () => void;
}

const ButtonToggleCart: React.FC<ButtonToggleCartProp> = ({ onToggleCart, productCart = 0 }) => {

    const styleButton = {
        width: "3rem",
        height: "3rem",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1,
        cursor: "pointer",
    }

    const styleBadge = {
        top: 0,
        right: -7,
    }

    return (
        <>
            <div className="position-fixed d-flex bg-success rounded-circle text-white shadow" style={styleButton} onClick={onToggleCart}>      <Badge bg="danger" style={styleBadge} className="position-absolute">{productCart}</Badge>
                <i className="fas fa-shopping-cart m-auto text-white fs-5"></i>
            </div>
        </>
    );
};

export default ButtonToggleCart;