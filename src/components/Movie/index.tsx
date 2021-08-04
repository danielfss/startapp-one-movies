import './Movie.css';

export interface Movie {
    title: string;
    releaseDate: any;
    overview: string;
    posterPath: string;
    status: string;
    runtime: number;
    budget: number;
    revenue: number;
}

export function Movie({ title, releaseDate, overview, posterPath, status, 
                        runtime, budget, revenue }: Movie) {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className="movieDetails">
            <div className="content">
                <img className="poster" alt={title} src={`${IMAGE_BASE_URL}${posterPath}`}></img>
                <div className="details">
                    <h2 className="title">{title}</h2>
                    <p className="dateRelease">Data de lançamento: {releaseDate}</p>
                    <p className="sinopseContent">{overview}</p>
                    <div className="info">
                        <div className="box">
                            <p className="detailContent">Status: {status}</p>
                        </div>
                            <p className="detailContent">Runtime: {runtime} min.</p>
                        <div className="box">
                            <p className="detailContent">Budget: {budget}</p>
                        </div>
                        <div className="box">
                            <p className="detailContent">Revenue: {revenue}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
