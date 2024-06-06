import React from 'react'
import Column from './Column'

function Table(){
  return (
    <div>
      <table className="tbl">
        <thead>
            <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Semester</th>
            </tr>
        </thead>
        <tbody>
            <Column/>
        </tbody>
      </table>
    </div>
  )
}

export default Table
