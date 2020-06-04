import React from 'react'

const Tile = (props) => {

    const {
        getRandomColor,
        validate
        } = props;
    const color = getRandomColor();
    return (
        <div
            data-color={color}
            className="tile"
            style={{backgroundColor: color}}
            onClick={(e) => validate(e.target)}
        />
    )

};

export default Tile;