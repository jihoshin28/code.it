import { useTypedSelector } from '../hooks/use-typed-selector'
import CellListItem from '../components/cell-list-item'
import AddCell from './add-cell'
import React from 'react';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells: {order, data }}) => {
        return order.map((id) => {
            return data[id]
        })
    });

    const renderedCells = cells.map((cell) => {
        return <React.Fragment key = {cell.id}>
            <AddCell nextCellId = {cell.id}></AddCell>
            <CellListItem cell = {cell}/> 
        </React.Fragment>
    })
    return (
        <div> 
            <h1>
                Cell List     
            </h1>
            {renderedCells}
        </div>
    )
}

export default CellList