import { useSelector, useDispatch } from "react-redux"
import { changeTitle, changeDescription, changePriority } from "../store"
import { useState } from "react"

const FormTask = ()=>{

    const {data, setData} = useState({
        title:"",
        description:"",
        priority:false
    })
    console.log(data)
    return(
        <form>
            <input type= "text" value={data.title} onChange={(event)=> setData({...data, title: event.target.value})} />
            <textarea value={data.description} onChange={(event)=>setData({...data, description:event.target.value})}/>
            <input type= "checkbox" checked= {data.priority} onChange={() => {
            data.priority
            ? setData({ ...data, priority: false })
            : setData({ ...data, priority: true });
        }} />
            <label> Es prioridad?</label>

            <button  >Guardar</ button>

        </form>
    )


}

export default FormTask