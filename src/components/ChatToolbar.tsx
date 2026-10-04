import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import LockedToolbarButton from './LockedToolbarButton.tsx'
import SearchButton from './SearchButton.tsx'


    
// Component

        function ChatToolbar({
            icon,
            iconVariant
        }: {
            icon: React.ReactNode;
            iconVariant: string;
        }) {
            return (
                <div data-v-0a8e1c82={""} className={"chat-toolbar"}>
                    <LockedToolbarButton icon={icon} />
                    <div data-v-0a8e1c82={""} className={"toolbar-divider"}>
                    </div>
                    <div data-v-0a8e1c82={""} className={"toolbar-filters"}>
                    </div>
                    <SearchButton iconVariant={iconVariant} />
                </div>
            )
        }
    

export default ChatToolbar
