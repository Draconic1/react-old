import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import axios from "axios";
import {Link} from "react-router-dom";


const Films = () => {
    const [film, setFilms] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/api/v1/films/:id/'
                )
                console.log(data)

                setFilms(data)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        fetchData()
    }, [])


    return (
        <div>
            {loading && 'Загрузка...'}

            <div><Link to='/'>Главная</Link> / <Link to="/films/about/:id">Подробнее</Link>
                <p></p></div>

            <div className=''>
                <div className='' style={{
                    display: 'flex', justifyContent: 'center',
                    overflow: 'auto'
                }}>

                    <div className=''>
                        <Card style={{width: '18rem', margin: '15px'}}>
                            <Card.Img className='' variant="top" src={''}/>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>Название {film.name}</Card.Title>
                                <Card.Text>Описание {film.description}
                                    Жанры {film.genres}
                                    Страна {film.country}
                                    Год {film.year}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Films