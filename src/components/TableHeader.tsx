import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function TableHeader({
            title,
            isLast = false
        }: {
            title: string;
            isLast?: boolean;
        }) {
            return (
                <th
                    colSpan={"1"}
                    rowSpan={"1"}
                    className={isLast ? "n-data-table-th n-data-table-th--last" : "n-data-table-th"}
                >
                    <div className={"n-data-table-th__title-wrapper"}>
                        <div className={"n-data-table-th__title"}>
                            {title}
                        </div>
                    </div>
                </th>
            )
        }
    

export default TableHeader
