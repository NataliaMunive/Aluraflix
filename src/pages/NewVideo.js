// src/pages/NewVideo.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/Footer';
import api from '../api';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  background: #222;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex: 1;
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

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #ff9ec6; /* Color rosa pastel */
  color: #1a1a1a;
  font-weight: bold;
  margin-right: 10px;
`;

const Title = styled.h1`
  text-align: center;
  color: #ff9ec6; /* Color rosa pastel */
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  text-align: center;
  color: #ff9ec6; /* Color rosa pastel */
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const NewVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    videoUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      videoUrl: '',
      description: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/videos', formData);
      alert('Video agregado exitosamente!');
      setFormData({
        title: '',
        category: '',
        image: '',
        videoUrl: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  return (
    <PageContainer>
      <Header />
      <FormContainer>
        <Title>Nuevo Video</Title>
        <SubTitle>Complete el formulario para crear una nueva tarjeta de video</SubTitle>
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
              <option value="">Seleccione una categoría</option>
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
              placeholder="El enlace es obligatorio"
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
              placeholder="Ingrese el enlace del video"
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
          <Button type="submit">Guardar</Button>
          <Button type="button" onClick={handleClear}>Limpiar</Button>
        </form>
      </FormContainer>
      <Footer />
    </PageContainer>
  );
};

export default NewVideo;
