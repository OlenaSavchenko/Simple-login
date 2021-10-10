import { useHistory, useParams } from "react-router"
import { useEffect, useState } from "react"
import { getFilm } from '../api/api';

const Film = () => {
    const params = useParams()
    const history = useHistory()
    const [film, setFilm] = useState({})

    const handleGoBack = () => {
        history.goBack()
    }
    useEffect(() => {
        getFilm(params.id).then(result => setFilm(result))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <h2>Episode: {film.episodeId}</h2>
        <p> {film.openingCrawl}</p>
        <button onClick={handleGoBack}> Go back</button>
    </>)
}

export default Film