import React, { useState } from "react";
import styled from "styled-components";
import { usePostCommentMutation } from "../api/productApi";
import { useParams } from "react-router-dom";

const NewComment = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();

  // Utilisez usePostCommentMutation pour obtenir la fonction de mutation
  const postCommentMutation = usePostCommentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Text:", text);
    postCommentMutation({
      username,
      comment: text,
    });

  
  };

  return (
    <Container>
      <h1>New Comment</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nom d'utilisateur:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          Texte:
          <TextArea value={text} onChange={(e) => setText(e.target.value)} />
        </Label>
        <Button type="submit">Soumettre</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2c3e50; /* Bleu foncé moderne */
  color: white;
  padding: 40px;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1em;
  border: 1px solid #3498db; /* Bleu moderne */
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1em;
  border: 1px solid #3498db; /* Bleu moderne */
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #3498db; /* Bleu moderne */
  color: white;
  padding: 12px;
  cursor: pointer;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9; /* Bleu plus foncé au survol */
  }
`;

export default NewComment;
