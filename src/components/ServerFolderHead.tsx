import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Right_arrow from './icons/Right_arrow.tsx'


    
// Component

        function ServerFolderHead({
            onlineCount,
            offlineCount
        }: {
            onlineCount: number;
            offlineCount: number;
        }) {
            return (
                <button data-v-af2a506a={""} type={"button"} className={"server-folder-head"}>
                    <span data-v-af2a506a={""} className={"server-folder-chevron open"}>
                        <Right_arrow />
                    </span>
                    <span
                        data-v-b9cd00f9={""}
                        data-v-af2a506a={""}
                        className={"server-folder-glyph"}
                        style={{"--server-icon-size":"24px"}}
                    >
                        <Img id="2" />
                    </span>
                    <span data-v-af2a506a={""} className={"server-folder-title"}>
                        <span data-v-af2a506a={""} className={"server-folder-host"}>
                            donutsmp.net
                        </span>
                    </span>
                    <span data-v-af2a506a={""} className={"server-folder-counts"}>
                        <span
                            data-v-af2a506a={""}
                            className={"server-folder-count-pill server-folder-count-pill--online"}
                        >
                            {onlineCount}
                        </span>
                        <span
                            data-v-af2a506a={""}
                            className={"server-folder-count-pill server-folder-count-pill--offline"}
                        >
                            {offlineCount}
                        </span>
                    </span>
                </button>
            )
        }
    

export default ServerFolderHead
