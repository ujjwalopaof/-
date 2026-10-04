import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Plus_sign from './icons/Plus_sign.tsx'


// Component
function AddAccountButton() {
    return <button data-v-856b3794={""} type={"button"} className={"sidebar-accounts-stack__avatar sidebar-accounts-stack__add"} title={"Add account"} style={{marginLeft:"-10px", zIndex:"1"}}>
        <Plus_sign />
    </button>
}


export default AddAccountButton
