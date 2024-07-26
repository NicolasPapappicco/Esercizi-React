export function MyUncontrolledForm() {
    function handleFormSubmit(event) {
        event.preventDefault()

        // const username = event.target.elements.namedItem("username").value
        // const password = event.target.elements.namedItem("password").value
        // const session = event.target.elements.namedItem("session").checked

        // const data = {
        //     username,
        //     password,
        //     session
        // }

        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="username" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}