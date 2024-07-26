import { useState } from "react"

function createData() {
    return {
        username: "",
        password: "",
        checked: false
    }
}

export function Login({onLogin}) {
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
        })
    }

    function handleResetForm(event) {
        setData(createData())
    }

    function handleLogin(event) {
        event.preventDefault()
        onLogin(state)
    }

    return (
        <form onSubmit={handleLogin}>
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            <input name="checkbox" type="checkbox" checked={data.session} onChange={handleInputChange}/>
            <button disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={handleResetForm}>Reset</button>
        </form>
    )
}