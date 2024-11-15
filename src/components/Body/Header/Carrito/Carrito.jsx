import React, { useState } from 'react';

export function ItemCount() {
    const [itemCarrito, setItemCarrito] = useState(0);

    const increment = () => {
        setItemCarrito(itemCarrito + 1);
    };

    const decrement = () => {
        if (itemCarrito > 0) {
            setItemCarrito(itemCarrito - 1);
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-danger me-2" onClick={decrement}>
                    <i className="fas fa-minus"></i>
                </button>
                <span id="quantity" className="mx-3 fs-4">{itemCarrito}</span>
                <button className="btn btn-outline-success ms-2" onClick={increment}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i> Carrito
                </button>
            </div>
        </div>
    );
}

export let itemCarrito;