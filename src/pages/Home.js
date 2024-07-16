// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import api from '../api';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await api.get('/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleEdit = (video) => {
    setSelectedVideo(video);
  };

  const handleUpdate = async (updatedVideo) => {
    try {
      await api.put(`/videos/${updatedVideo.id}`, updatedVideo);
      setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const handleDelete = async (video) => {
    try {
      await api.delete(`/videos/${video.id}`);
      setVideos(videos.filter(v => v.id !== video.id));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <CategorySection title="Frontend" videos={videos.filter(video => video.category === 'frontend')} onEdit={handleEdit} onDelete={handleDelete} />
        <CategorySection title="Backend" videos={videos.filter(video => video.category === 'backend')} onEdit={handleEdit} onDelete={handleDelete} />
        <CategorySection title="Innovación" videos={videos.filter(video => video.category === 'innovation')} onEdit={handleEdit} onDelete={handleDelete} />
        <CategorySection title="Gestión" videos={videos.filter(video => video.category === 'management')} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Footer />
      {selectedVideo && (
        <Modal isOpen={true} onClose={() => setSelectedVideo(null)} video={selectedVideo} onSave={handleUpdate} />
      )}
    </>
  );
};

export default Home;
