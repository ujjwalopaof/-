import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function AddActionButton({ route }: { route: string }) {
            return (
                <button
                    data-v-04074ca5={""}
                    type={"button"}
                    className={"macro-btn macro-btn--primary"}
                    data-navigate-routes={JSON.stringify([route])}
                >
                    {` Add Action `}
                </button>
            )
        }
    

export default AddActionButton
