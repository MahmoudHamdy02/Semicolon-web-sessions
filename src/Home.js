import ToDoList from "./ToDoList";
import { useState } from "react"
// import { useEffect } from "react";
const Home = () => {
    // const [data, setData] = useState(null)
    // useEffect(()=>{
    //     fetch('http://localhost:8000/data')
    //     .then((data)=>{return data.json()})
    //     .then((data)=>{setData(data)})
    //     .catch((err)=>{console.log(err)})
    // }, [])
    
    const [data, setData] = useState([
        {title: "Learn React", priority: "high", id: 1},
        {title: "Learn C++", priority: "high", id: 2},
        {title: "Play videogames", priority: "medium", id: 3},
        {title: "Do the homework", priority: "medium", id: 4},
        {title: "Study Electronics", priority: "low", id: 5},
    ])
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('High')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {title: name, priority: priority, id: data[data.length-1].id +1}
        setData([...data, newData])
    }

    const handleDelete = (id) => {
        const newData = data.filter((item)=>{return item.id !== id})
        setData(newData)
    }

return( 
    <div>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" placeholder="To Do Item Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <select name="priority" id="priority" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button>Add</button>
        </form>
        <ToDoList data={data} title="All To Do's" handleDelete={handleDelete}/>
        {/* {data && <ToDoList data={data} title="All To Do's"/>} */}
    </div>
);
}
 
export default Home;