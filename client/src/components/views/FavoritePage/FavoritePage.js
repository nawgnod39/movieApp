import React, {useEffect} from 'react'
import './favorite.css';
//이부분이 보이게 app.js에 import 해줌
//Login 한사람만 보여야하니  true 값이여야함.

function FavoritePage() {


    useEffect(() => {
        Axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
            } else {
                alert('영화 정보를 가져오는데 실패 했습니다.')
            }
        })

    }, [])





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