import "./Table.css"

export default function Table({data, headers}) {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {/* eslint-disable-next-line react/prop-types */}
                        {headers.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {data.map(item => <tr><td>{item.name}</td><td>{item.volume}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}