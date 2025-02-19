
import { useLoaderData } from "react-router-dom";
const Update = () => {
    const loadedUser = useLoaderData()
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        console.log({ email, name })
        const updateUser = { email, name }

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (

        <div>
            <h2>update information of {loadedUser.name}</h2>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name}></input>
                <input type="email" name="email" id="" defaultValue={loadedUser?.email}></input>
                <input type="submit" id=""></input>

            </form>

        </div>
    )
}
export default Update; 