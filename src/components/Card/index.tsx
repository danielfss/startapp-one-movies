import React from 'react';
import './Card.css';

interface Props {
    title: string;
    overview: string;
    posterPath: string;
    onCardClick: Function;
}

export function Card({ title, overview, posterPath, onCardClick }: Props) {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className="card" onClick={() => onCardClick()}>
            <img className="posterHome" alt={title} src={`${IMAGE_BASE_URL}${posterPath}`}></img>
            <div className="contentHome">
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
