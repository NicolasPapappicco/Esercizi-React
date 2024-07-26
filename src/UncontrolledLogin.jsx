export function UncontrolledLogin() {
    function onLogin(event) {
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const session = event.target.elements.namedItem("session").checked

        const data = {
            username,
            password,
            session
        }

        console.log(data);
    }

    function loginWithFormData(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }

        console.log(data);
    }

    return (
        <form onSubmit={onLogin}>
            <input name="username"/>
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
        </form>
    )
}