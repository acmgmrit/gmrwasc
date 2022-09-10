import React from 'react';

const ImageCard = ({ img, title, body }) => {
    return (
        <div className="card p-2 img-card">
            <img src={img} alt="Workshops" className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-justify">{body}</p>
            </div>
        </div>
    )
}

export default ImageCard