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
            <CellListItem cell = {cell}/> 
            <AddCell forceVisible = {cells.length === 0} nextCellId = {cell.id}></AddCell>
        </React.Fragment>
    })
    return (
        <div> 
            <AddCell forceVisible = {cells.length === 0} nextCellId = {null}></AddCell>
            {renderedCells}
        </div>
    )
}

export default CellList