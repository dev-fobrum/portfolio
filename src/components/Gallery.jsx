import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi'
import { FiPlus } from 'react-icons/fi'
import ReactBnbGallery from 'react-bnb-gallery';

import 'react-bnb-gallery/dist/style.css'

import src1 from '../imgs/cvdigital/scr_1.png'
import src2 from '../imgs/cvdigital/scr_2.png'
import src3 from '../imgs/cvdigital/scr_3.png'
import src4 from '../imgs/cvdigital/scr_4.png'
import src5 from '../imgs/cvdigital/scr_5.png'
import src6 from '../imgs/cvdigital/scr_6.png'

const PHOTOS = [src1, src2, src3, src4, src5, src6];

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);

    const renderGallery = () => {
        return PHOTOS.map((photo, i) => {
            return (
                <div key={i} className="image-item">
                    <img src={photo} />
                    <GiMagnifyingGlass />
                </div>
            )
        })
    }

    return (
        <div className="gallery-container">
            <div className="gallery-images" onClick={() => setIsOpen(true)}>
                {renderGallery()}
            </div>

            <div className="see-more" onClick={() => setIsOpen(true)}>
                <span href="" className="button" >
                    <FiPlus /> See More
                </span>
            </div>

            <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
                backgroundColor="#161616"
            />
        </div>
    );
};

export default Gallery

