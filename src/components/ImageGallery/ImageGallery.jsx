import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { List, ListItem } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
  return (
    <List>
      {pictures.map(picture => (
        <ListItem key={picture.id}>
          <ImageGalleryItem picture={picture} />
        </ListItem>
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};

export default ImageGallery;
