import React from 'react';
import classes from './Gallery.module.css';

const Gallery = ({ photo }) => {
  console.log(photo);
  return (
    <div className={classes.photo}>
      <img src={photo.urls.small} alt={photo.user.name} />
    </div>
  );
};

export default Gallery;
