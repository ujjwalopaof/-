import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Left_arrow from './icons/Left_arrow.tsx'


// Component
function MacroBack() {
    return <button data-v-04074ca5={""} type={"button"} className={"macro-back"}>
        <Left_arrow />
        {` Back `}
    </button>
}


export default MacroBack
