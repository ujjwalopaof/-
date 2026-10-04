import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function AccountUsername({ username }: { username: string }) {
            return (
                <div className={"acct-username"}>
                    {username}
                </div>
            )
        }
    

export default AccountUsername
