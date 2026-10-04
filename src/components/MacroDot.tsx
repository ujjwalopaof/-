import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function MacroDot({
            label,
            variant
        }: {
            label: string;
            variant?: "trigger" | "add";
        }) {
            return (
                <div
                    data-v-04074ca5={""}
                    className={`macro-dot${variant ? ` macro-dot--${variant}` : ""}`}
                >
                    {label}
                </div>
            )
        }
    

export default MacroDot
