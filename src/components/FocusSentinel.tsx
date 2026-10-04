import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function FocusSentinel({
          tabIndex
        }: {
          tabIndex: "0" | "-1";
        }) {
          return (
            <div
              tabIndex={tabIndex}
              style={{position:"absolute", height:"0px", width:"0px"}}
            >
            </div>
          )
        }
    

export default FocusSentinel
