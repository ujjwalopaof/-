import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function LayoutOption({
            label,
            active = false
        }: {
            label: string;
            active?: boolean;
        }) {
            return (
                <button
                    data-v-92fb65f8={""}
                    type={"button"}
                    role={"option"}
                    className={active ? "layout-option active" : "layout-option"}
                >
                    {label}
                </button>
            )
        }
    

export default LayoutOption
