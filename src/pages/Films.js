import React, { useEffect, useState } from "react"
import { getFilms } from '../api/api';
import FilmsList from "../componets/FilmsList/FilmsList"
import Loader from "../componets/Loader/Loader"

const Films = () => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            getFilms().then(result => setFilms(result))
                .finally(setIsLoading(false))
        }, 500);
    }, [])

    return isLoading
        ? <Loader />
        : <FilmsList films={films} />


}
export default Films