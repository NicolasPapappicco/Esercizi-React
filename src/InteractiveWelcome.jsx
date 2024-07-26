import { useState } from "react";
import { Welcome } from "./Welcome";

function createData() {
    return {
        username: ""
    }
}

export function InteractiveWelcome() {
    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        
        setData((data) => {
            return {
                ...data,
                [name]: value
            }

            // updated[name] = value
            // return updated
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <Welcome name={data.username}/>
        </div>
    )
}