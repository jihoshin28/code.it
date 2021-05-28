import { useTypedSelector } from '../hooks/use-typed-selector'
import CellListItem from '../components/cell-list-item'

const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells: {order, data }}) => {
        return order.map((id) => {
            return data[id]
        })
    });

    const renderedCells = cells.map((cell) => <CellListItem cell = {cell}/> )
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