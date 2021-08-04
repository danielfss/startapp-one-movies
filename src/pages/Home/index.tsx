import React, { useEffect, useState } from 'react'
import './Home.css'

import { getAllPopularMovies, searchMovieByParam } from '../../services/api'
import { Card } from '../../components/Card';
import { Searchbox } from '../../components/Searchbox';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const [movies, setMovies] = useState([])
    const [] = useState(1)
    useEffect(() => {
        fillMovies();
    }, [])
    const fillMovies = async () => {
        const res = await getAllPopularMovies();
        const { data } = res;
        const { results } = data;
        setMovies(results);
    }

    const searchByParam = async (param: string) => {
        const res = await searchMovieByParam(param);
        const { data } = res;
        const { results } = data;
        setMovies(results);
    }

    const onCardClick = (id: number) => history.push(`/details/${id}`)
    const handleSearch = (query: string) => {
        if (!query) {
            fillMovies();
            return;
        }
        searchByParam(query)
    };


    return (
        <>
            <Searchbox onSearch={handleSearch} />
            <div className="wrap">
                {
                    movies.map((x: any) => {
                        return <div className="cards" key={x.id}>
                            <Card title={x.title} overview={x.overview} posterPath={x.poster_path} onCardClick={() => onCardClick(x.id)} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export { Home }
