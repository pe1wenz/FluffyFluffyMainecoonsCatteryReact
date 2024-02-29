import PhotoAlbum from "react-photo-album";
import React from "react";


interface GalleryProps {
    photos: Array<{ src: string; width: number; height: number }>;
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
    return(
        <PhotoAlbum layout="rows" photos={photos} />
    );
};

export default Gallery;

