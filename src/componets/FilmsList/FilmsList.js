import React from "react"
import FilmsListItem from "../FilmsListItem/FilmListItem"
import "./FilmsList.css"

const FilmsList = ({ films }) => {
    return (
        <ul className="films-list">
            {films.map((data) => {
                return <FilmsListItem key={data.id}
                    film={data}
                />
            })}
        </ul>
    )
}

export default FilmsList
