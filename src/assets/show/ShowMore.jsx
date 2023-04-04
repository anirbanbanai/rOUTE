import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

const ShowMore = () => {
    const navigation = useNavigate();
    const back = ()=>{
        navigation(-1)
    }
    return (
        <div>
            <h2>Show more button</h2>
            <button onClick={back} className='bg-blue-500 p-2 rounded-xl'>Back</button>
        </div>
    );
};

export default ShowMore;