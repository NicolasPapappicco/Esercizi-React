import { useState } from "react"

function createData() {
    return {
        username: "",
        password: "",
        session: false
    }
}

export function MyForm() {
    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        
        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }

            // updated[name] = value
            // return updated
        })
    }

    function handleResetForm(event) {
        setData(createData())
    }

    return (
        <div>
            <h1>My Form</h1>
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>
            <button disabled={!data.username || !data.password}>Login</button>
            <button onClick={handleResetForm}>Reset</button>
        </div>
    )
}