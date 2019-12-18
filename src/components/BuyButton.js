import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.div`
  background: #fff;
  border: 3px solid #58b5d7;
  color: #58b5d7;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 1.2rem;
  padding: 4px;
  text-align: center;
  :hover {
    background: #58b5d7;
    color: #fff;
  }
`;

export const BuyButton = ({ date, endDate }) => {
  return <Button>Add to basket</Button>;
};

export default BuyButton;
