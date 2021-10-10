import './FilmsListItem.css'
import { useHistory } from "react-router"

const FilmsListItem = (props) => {
    const { name, id } = props.film
    const history = useHistory()
    const handleOpen = (filmId) => {
        history.push(`${history.location.pathname}/${filmId}`)
    }
    return (<li className="films-item">
        {name}
        <button type="button" className="films-btn" onClick={() => handleOpen(id)}>Show more</button>
    </li>)
}

export default FilmsListItem