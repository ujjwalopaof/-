import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Vertical_ellipsis from './icons/Vertical_ellipsis.tsx'


// Component
function ServerFolderMenuButton() {
    return <button data-v-af2a506a={""} type={"button"} className={"server-folder-menu-btn"} title={"Folder actions"}>
        <Vertical_ellipsis />
    </button>
}


export default ServerFolderMenuButton
