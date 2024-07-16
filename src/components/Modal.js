// src/components/Modal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../api';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: rgba(34, 34, 34, 0.9);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  color: #ff9ec6; /* Color rosa pastel */
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;
  margin-top: 5px;
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #ff9ec6; /* Color rosa pastel */
  color: #1a1a1a;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    background-color: #ff6fa1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: white;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, video, onSave }) => {
  const [formData, setFormData] = useState({ ...video });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/videos/${video.id}`, formData);
      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  return isOpen ? (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Editar Card</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Ingrese el título"
              value={formData.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Categoría</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovation">Innovación</option>
              <option value="management">Gestión</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Imagen</Label>
            <Input
              type="text"
              id="image"
              name="image"
              placeholder="Ingrese el enlace de la imagen, es obligatorio"
              value={formData.image}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="videoUrl">Video</Label>
            <Input
              type="text"
              id="videoUrl"
              name="videoUrl"
              placeholder="Ingrese el enlace del video, es obligatorio"
              value={formData.videoUrl}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="¿De qué se trata este video?"
              value={formData.description}
              onChange={handleChange}
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Guardar</Button>
            <Button type="button" onClick={onClose}>Cancelar</Button>
          </ButtonContainer>
        </form>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default Modal;
