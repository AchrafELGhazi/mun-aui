import React from 'react';
import styled from 'styled-components';

const ApplyContainer = styled.div`
  padding: 6rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ApplyTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ApplyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333333;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const Apply = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ApplyContainer>
      <ApplyTitle>Apply for Future Events</ApplyTitle>
      <ApplyForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <FormInput type="text" id="name" name="name" required />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" id="email" name="email" required />

        <FormLabel htmlFor="university">University</FormLabel>
        <FormInput type="text" id="university" name="university" required />

        <FormLabel htmlFor="motivation">Motivation</FormLabel>
        <FormTextarea id="motivation" name="motivation" required />

        <SubmitButton type="submit">Submit Application</SubmitButton>
      </ApplyForm>
    </ApplyContainer>
  );
};

export default Apply;

