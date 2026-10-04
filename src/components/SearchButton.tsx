import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Magnifying_glass from './icons/Magnifying_glass.tsx'
import Magnifying_glass4 from './icons/Magnifying_glass4.tsx'


    
// Component

        function SearchButton({
            iconVariant
        }: {
            iconVariant: "default" | "four";
        }) {
            return (
                <button data-v-0a8e1c82={""} className={"toolbar-btn search-btn"}>
                    {iconVariant === "default" ? <Magnifying_glass /> : <Magnifying_glass4 />}
                    <span data-v-0a8e1c82={""} className={"search-label-text"}>
                        Search
                    </span>
                </button>
            )
        }
    

export default SearchButton
