import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import ProfitRow from './ProfitRow.tsx'


// Component
function ProfitTable() {
    return <table className={"profit-table"}>
        <tbody>
            
                        <ProfitRow dataId="0" />
                    
            
                        <ProfitRow dataId="1" />
                    
            
                        <ProfitRow dataId="2" />
                    
            
                        <ProfitRow dataId="3" />
                    
        </tbody>
    </table>
}


export default ProfitTable
