import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  const { productID, selectedStyle, productInfo, styles } = useGlobalContext();
  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function handleChangeSize(e) {
    e.preventDefault();
    setSelectedSize(selectedStyle.skus[e.target.value].size);
    setIsSizeSelected(true);
    setAvailableQuantity(selectedStyle.skus[e.target.value].quantity);
  }

  function handleChangeQuantity(e) {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  return (
    <Cart>
      <SQContainer>
        <SelectSizeContainer>
            <SelectSize value={selectedSize} onChange={(e) => handleChangeSize(e)}>
                <option>{selectedSize}</option>
              {selectedStyle.skus
              && (
                Object.entries(selectedStyle.skus).map(([sku, {size, quantity}]) => {
                  return (quantity > 0 && <option key={sku} quantity={quantity} value={sku}>{size}</option>)
                }
              ))}
            </SelectSize>
        </SelectSizeContainer>
        <SelectQuantityContainer>
          {isSizeSelected
          ? <SelectQ value={selectedQuantity} onChange={(e) => handleChangeQuantity(e)}>
              <option>-</option>
              {availableQuantity >= 15
              ? [...Array(16).keys()].slice(1).map((num) =>
                  <option value={num}>{num}</option>)
              : [...Array(availableQuantity + 1).keys()].slice(1).map((num) =>
                  <option value={num + 1}>{num + 1}</option>)
              }
            </SelectQ>
          : <SelectQ disabled={!isSizeSelected} value={selectedQuantity} onChange={(e) => handleChangeQuantity(e)}>
              <option>-</option>
            </SelectQ>
          }
        </SelectQuantityContainer>
      </SQContainer>
      <BagContainer>
        <AddtoBag>
          <CartB type="submit">Add to Cart</CartB>
        </AddtoBag>
      </BagContainer>
    </Cart>
  );
}


const Cart = styled.div`
  display: block;
`;

const SQContainer = styled.div`
  flex-direction: row;
  align-content: space-between;
  display: inline-flex;
  margin-bottom: 2%;
`;

const SelectSizeContainer = styled.div`
  height: auto;
  width: auto;
`;

const SelectSize = styled.select`
  font-size: 1em;
  padding-bottom: 0.4em;
  padding-top: 0.4em;
  padding-left: 1em;
  padding-right: 1em;
  margin-right: 1em;
`;

const SelectQuantityContainer = styled.div`
  height: auto;
  width: auto;
  margin-left: 45ß%
  margin-right: 2%
`;

const SelectQ = styled.select`
  font-size: 1em;
  padding-bottom: 0.4em;
  padding-top: 0.4em;
  padding-left: 1.1em;
  padding-right: 1.1em;
`;

const BagContainer = styled.div`
`;


const AddtoBag = styled.div`
  margin-top: 1px;
  height: auto
  display: grid;
  width: 35%
`;

const CartB = styled.button`
  font-size: 1em;
  width: 13.3em;
  height: 2.4em;
`;

export default AddToCart;
