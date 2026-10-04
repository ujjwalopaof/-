import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SupportBox from './SupportBox.tsx'


// Component
function SupportBoxNote() {
    return <textarea data-v-99ec678c={""} className={"support-box-note"} placeholder={"Add a note (optional)"} rows={"2"} maxLength={"1000"}>
    </textarea>
}


export default SupportBoxNote
