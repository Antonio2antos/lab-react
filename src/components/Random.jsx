import React from 'react';

function Random(props) {

    const {min, max} = props

    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>Random number value between {min} and {max} =&gt;: {random}</div>
    );
}

export default Random;
