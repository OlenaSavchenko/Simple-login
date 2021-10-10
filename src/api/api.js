export const getFilms = async () => {
    const response = await fetch('https://ajax.test-danit.com/api/swapi/films')
    const data = await response.json()
    return data
}


export const getFilm = async id => {
    const response = await fetch(`https://ajax.test-danit.com/api/swapi/films/${id}`)
    const data = await response.json()
    return data
}

