import { useSelector } from "react-redux"

const Board = () =>{

    const info = useSelector((state)=> state.TaskReducer )
    return(
        info.map((item)=> {
            return (
                <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.priority ? "Prioridad alta": "Prioridad baja"}</p>
            </div>

            )
        })

    )
}

export default Board;