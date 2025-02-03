import React from 'react'
import Columns from './Columns'

const Table = () => {
    return (
        <table border="2px">
            <thead>
                <tr>
                    <th>header1</th>
                    <th>header2</th>
                    <th>header3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Columns/>  
                    {/* tr tag will accept only td or th , ut in the above Columns will taking div tag to remove it we are using fragraments */}
                </tr>
            </tbody>
        </table>
    )
}

export default Table
