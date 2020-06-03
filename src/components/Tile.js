import React from 'react'

const Tile = (props) => {

    const {
        getRandomColor
        } = props;

    return (
        <div className="tile" style={{backgroundColor: getRandomColor()}}/>
    )

};

export default Tile;