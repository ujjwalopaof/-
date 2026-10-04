import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function MacroMiniButton({
            variant
        }: {
            variant: "remove" | "duplicate";
        }) {
            return (
                <button
                    data-v-04074ca5={""}
                    type={"button"}
                    className={`macro-mini-btn macro-mini-btn--${variant}`}
                >
                    {variant === "remove" ? ` Remove ` : ` Duplicate `}
                </button>
            )
        }
    

export default MacroMiniButton
