import React from 'react'
import Tile from './Tile'

const Board = (props) => {
    const {
        size,
        getRandomColor,
        validate
        } = props;

    const drawBoard = () => {
        let boardArray = [];
        for (let x = 0; x < size; x++) {
            let rowArray = [];
            for (let i = 0; i < size; i++) {
                rowArray.push(
                    i === size - 1
                        ? [<Tile validate={validate} data-selected={false} data-row={x} data-column={i} getRandomColor={getRandomColor}/>, <br />]
                        : <Tile validate={validate} data-selected={false} data-row={x} data-column={i} getRandomColor={getRandomColor} />
                );
            }
            boardArray.push(rowArray);
        }
        return boardArray;
    };

    return (
        <div id="kandiKrushBoard">
            {drawBoard()}
        </div>
    )
};

export default Board;