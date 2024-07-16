// src/components/CategorySection.js
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  color: #1a1a1a;
  background-color: #ff9ec6; /* Color rosa pastel */
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
`;

const VideosContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 10px 0;
`;

const VideoCard = styled.div`
  flex: 0 0 200px;
  margin-right: 10px;
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 5px;
  cursor: pointer;
  flex: 1;
  margin: 0 5px;
  border-radius: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const CategorySection = ({ title, videos, onEdit, onDelete }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <Thumbnail src={video.image} alt={video.title} />
            <p>{video.title}</p>
            <ButtonContainer>
              <Button onClick={() => onEdit(video)}>Editar</Button>
              <Button onClick={() => onDelete(video)}>Borrar</Button>
            </ButtonContainer>
          </VideoCard>
        ))}
      </VideosContainer>
    </SectionContainer>
  );
};

export default CategorySection;
