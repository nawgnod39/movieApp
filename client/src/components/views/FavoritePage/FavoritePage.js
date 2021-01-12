import React from 'react'
import './favorite.css';
//이부분이 보이게 app.js에 import 해줌
//Login 한사람만 보여야하니  true 값이여야함.

function FavoritePage() {
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