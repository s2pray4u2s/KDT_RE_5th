import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return ( 
        <>
            <Link to = {`/products/${product.id}`}>
                <ul style={{ listStyle: "disc", textAlign: "left", display: "block" }}>
                    <li>상품명: {product.name}</li>
                    <li>상세 설명: {product.body}</li>
                </ul>
            </Link>
        </>
    );
}

export default ProductItem;