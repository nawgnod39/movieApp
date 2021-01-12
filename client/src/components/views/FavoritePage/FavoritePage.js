import React, {useEffect,useState} from 'react'
import './favorite.css';
import Axios from 'axios';
import {Popover} from 'antd';
import {IMAGE_BASE_URL} from '../../Config';

//이부분이 보이게 app.js에 import 해줌
//Login 한사람만 보여야하니  true 값이여야함.

function FavoritePage() {
   
   
    const [Favorites, setFavorites] = useState([])


    useEffect(() => {
        
        Axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                setFavorites(response.data.favorites)
            } else {
                alert('영화 정보를 가져오는데 실패 했습니다.')
            }
        })

    }, [])

    const renderCards = Favorites.map((favorite, index) => {

        const content = (
            <div>
                {favorite.moviePost ?

                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no image"}

                }
            </div>
        )


        return <tr key={index}>

            <Popover content={content} title={`${favorite.movieTitle}`} >
                <td>{favorite.movieTitle}</td>
            </Popover>

            <td>{favorite.movieRunTime} mins</td>
            <td><button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>Remove</button></td>

        </tr>
    })







    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> Favorite Movies </h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <td>Remove from favorites</td>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage