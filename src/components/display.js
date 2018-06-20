import React from 'react';

const Display = (props) => {
    return (
        <div>
            <p>Weather is -</p>
            Temperature - {props.temperature}<br/>
            Day - {props.dayType}<br/>
            Humidity - {props.humidity}
        </div>
    )
}

export default Display;