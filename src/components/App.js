import React from 'react';
import { Rating } from './Rating';

const App = () => {
    const handleRating = rating => {
        console.log(rating);
    };
    return (
        <div>
            <p>Rating</p>
            <Rating defaultValue={3} onRating={handleRating} />
        </div>
    );
};

export default App;
