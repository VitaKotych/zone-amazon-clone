import React, { useState } from "react";
import styled from "styled-components";

function AddProduct() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [shortTitle, setShortTitle] = useState("");
  const [longTitle, setLongTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagline, setTagline] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          imageURL,
          price,
          shortTitle,
          longTitle,
          description,
          tagline,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setId("");
      setTitle("");
      setImageURL("");
      setPrice(0);
      setShortTitle("");
      setLongTitle("");
      setDescription("");
      setTagline("");

      console.log("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="" />
      </Logo>

      <FormContainer>
        <h3>Add Product</h3>
        <InputContainer>
          <p>id</p>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            value={title}
          />
        </InputContainer>
        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>
       
        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Short Title</p>
          <input
            type="text"
            onChange={(e) => setShortTitle(e.target.value)}
            value={shortTitle}
          />
        </InputContainer>
        <InputContainer>
          <p>Long Title</p>
          <input
            type="text"
            onChange={(e) => setLongTitle(e.target.value)}
            value={longTitle}
          />
        </InputContainer>
        <InputContainer>
          <p>Description</p>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </InputContainer>
        <InputContainer>
          <p>Tagline</p>
          <input
            type="text"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </InputContainer>

        <Button onClick={addProduct}>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;
