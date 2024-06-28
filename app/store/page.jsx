"use client";
import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";
export default function Store() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(1);

  async function handleFetcher() {
    setIsLoading(true);
    const response = await axios.get(
      " https://fakestoreapi.com/products/" + productId
    );
    setIsLoading(false);
    setProduct(response.data);
  }

  function handleProductID(evt) {
    setProductId(evt.target.value);
  }

  return (
    <main>
      <h1>My Simple Web Store</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>

      <Input placeholder="Enter Product Id" onChange={handleProductID} />

      <Button loading={isLoading} onClick={handleFetcher}>
        Get Product
      </Button>
    </main>
  );
}
