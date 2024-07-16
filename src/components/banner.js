// src/components/Banner.js
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  background-image: url('/banner-image.png'); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Cambiado a space-between */
  color: white;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
`;

const BannerContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  
  flex: 1; /* Asegurar que use el espacio disponible */
`;

const VideoContainer = styled.div`
  width: 350px; /* Ajustado a 350px */
  height: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #ff9ec6; /* Color rosa pastel */
  margin-left: 20px; /* Espacio entre el contenido del banner y el video */
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>Challenge React</h1>
        <p>Este challenge es parte de la formación de Alura.</p>
        <p>Desarrollado por Natalia Munive</p>
      </BannerContent>
      <VideoContainer>
        <VideoFrame
          src="https://www.youtube.com/embed/riZbwRFMFuw"
          title="Video de Ejemplo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </BannerContainer>
  );
};

export default Banner;
