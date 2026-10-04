import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function MacroStartCard({
            title,
            description,
            navigateRoute
        }: {
            title: string;
            description: string;
            navigateRoute?: string;
        }) {
            return (
                <button data-v-04074ca5={""} type={"button"} className={"macro-start-card"}>
                    <span
                        data-v-04074ca5={""}
                        className={"macro-start-card-title"}
                        {...(navigateRoute !== undefined
                            ? { "data-navigate-routes": JSON.stringify([navigateRoute]) }
                            : {})}
                    >
                        {title}
                    </span>
                    <span data-v-04074ca5={""} className={"macro-start-card-desc"}>
                        {description}
                    </span>
                </button>
            )
        }
    

export default MacroStartCard
