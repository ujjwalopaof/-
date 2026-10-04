import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function ConfigModalHeading({
            title,
            scopeId
        }: {
            title: string;
            scopeId: string;
        }) {
            const scopeAttribute = { [scopeId]: "" };

            return (
                <div {...scopeAttribute} className={"config-modal-heading"}>
                    <span {...scopeAttribute} className={"config-modal-title"}>
                        {title}
                    </span>
                </div>
            )
        }
    

export default ConfigModalHeading
