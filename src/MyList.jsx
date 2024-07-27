function MyListItem({ item }) {
    return (
        <li>
            <h4>{item.name}</h4>
            <p>{item.age} years old</p>
       </li>
    )
}


export function MyList({ items }) {
    // const names = ["Jane", "Kate", "John", "Billy"]
    // const items = names.map((name) => <li>{name}</li>)

    return (
        <ul>
            {items.map((item) => (
                <MyListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}