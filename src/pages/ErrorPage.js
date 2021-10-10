import { useHistory } from "react-router"

const ErrorPage = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/")
    }
    return (
        <>
            <div style={{ fontSize: "45px", textAlign: "center" }}>Not found &#128532;</div>
            <button onClick={handleClick}>Go home</button>
        </>
    )
}
export default ErrorPage