import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function FormItemLabel({ label }: { label: string }) {
            return (
                <label className={"n-form-item-label n-form-item-label--right-mark"}>
                    <span className={"n-form-item-label__text"}>
                        {label}
                    </span>
                </label>
            )
        }
    

export default FormItemLabel
