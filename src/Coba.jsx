import React from 'react'
import { useState } from 'react';
const ProductCard = ({ product, onAddToCart }) => {
    const handleClick = () => {
        onAddToCart(product);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
    );
};

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};


export const Coba = () => {
    const [cart, setCart] = useState([]);

    // Fungsi untuk menambahkan produk ke keranjang
    const addToCart = (selectedProduct) => {
        const existingProduct = cart.find(product => product.id === selectedProduct.id);
        if (existingProduct) {
            // Jika produk sudah ada dalam keranjang, tambahkan 1 ke kuantitasnya
            const updatedCart = cart.map(product =>
                product.id === selectedProduct.id ? { ...product, quantity: product.quantity + 1 } : product
            );
            setCart(updatedCart);
        } else {
            // Jika produk belum ada dalam keranjang, tambahkan ke keranjang dengan kuantitas 1
            const updatedCart = [...cart, { ...selectedProduct, quantity: 1 }];
            setCart(updatedCart);
        }
        // Simpan keranjang belanja ke localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Daftar produk
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 },
    ];

    return (
        <div className="App">
            <h1>Product List</h1>
            <ProductList products={products} onAddToCart={addToCart} />
        </div>
    );
}
