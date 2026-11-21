export function Timeline({items}: {items: string[]}) {
    return (
        <ul className="mt-6 space-y-2">
            {items.map((item, i) => (<li key={i}> {item} </li>))}
        </ul>
    ) ;
}