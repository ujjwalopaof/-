import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function ConfigToggleCopy({
            label,
            description
        }: {
            label: string;
            description: string;
        }) {
            return (
                <div data-v-92c44818={""} className={"config-toggle-copy"}>
                    <div data-v-92c44818={""} className={"config-field-header"}>
                        <span data-v-92c44818={""} className={"config-field-label"}>
                            {label}
                        </span>
                        <p data-v-92c44818={""} className={"config-field-desc"}>
                            {description}
                        </p>
                    </div>
                </div>
            )
        }
    

export default ConfigToggleCopy
