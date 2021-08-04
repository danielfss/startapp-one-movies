import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';

import { Movie } from '../../components/Movie';
import './Details.css';

function Details() {
    const { id } = useParams<any>();
    const [details, setDetails] = useState<any>({})
    const movieDetails = async () => {
        const mDetails = await getMovieDetails(id)
        const { data } = mDetails;
        setDetails(data);
        console.log(data)
    }

    useEffect(() => {
        movieDetails();
    }, [])

    return (

        <div className="content">
            <div className="movie">
            <Movie
                title={details.title}
                releaseDate={details.release_date}
                overview={details.overview}
                posterPath={details.poster_path}
                status={details.status}
                runtime={details.runtime}
                budget={details.budget}
                revenue={details.revenue}
            />
            </div>
        </div>
    )
}

export { Details }