function WebPageHeaderItem({headerKey, headerValue}) {
    return (
        <tr>
            <td>{headerKey}</td>
            <td>{headerValue}</td>
        </tr>
    )
}

export default function WebPageHeaderView(props) {
    return (
        <table {...props}>
            <thead>
            <tr>
                <th>Header Key</th>
                <th>Header Value</th>
            </tr>
            </thead>
            <tbody>
            {props.headers.map((header) => (
                    <WebPageHeaderItem key={header.id} headerKey={header.key} headerValue={header.value}/>
                )
            )}
            </tbody>
        </table>
    )
}