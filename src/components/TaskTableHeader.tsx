import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TableHeader from './TableHeader.tsx'


// Component
function TaskTableHeader() {
    return <tr className={"n-data-table-tr"}>
        
                    <TableHeader title="Task Name" />
                
        
                    <TableHeader title="Type" />
                
        
                    <TableHeader title="Payload" />
                
        
                    <TableHeader title="Interval" />
                
        
                    <TableHeader title="Status" />
                
        
                    <TableHeader title="Action" isLast={true} />
                
    </tr>
}


export default TaskTableHeader
