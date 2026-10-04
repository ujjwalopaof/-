import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function CardHeader({ title }: { title: string }) {
            return (
                <div className={"n-card-header"} role={"heading"} style={{paddingBottom:"0px"}}>
                    <div className={"n-card-header__main"} role={"heading"}>
                        {title}
                    </div>
                </div>
            )
        }
    

export default CardHeader
