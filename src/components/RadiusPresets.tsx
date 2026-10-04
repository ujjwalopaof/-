import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TinyButton from './TinyButton.tsx'
import TinyButton1 from './TinyButton1.tsx'


// Component

        function RadiusPresets() {
            return (
                <div data-v-03870910={""} className={"radius-presets"}>
                    <span
                        data-v-03870910={""}
                        className={"n-text preset-label"}
                        style={{
                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                            "--n-text-color": "rgba(255,255,255,0.6)",
                            "--n-font-weight-strong": "500",
                            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                            "--n-code-border-radius": "2px",
                            "--n-code-text-color": "rgba(255,255,255,0.85)",
                            "--n-code-color": "rgba(255,255,255,0.12)",
                            "--n-code-border": "1px solid #0000"
                        }}
                    >
                        Quick radius
                    </span>
                    <div data-v-03870910={""} className={"preset-chips"}>
                        <TinyButton1 dataId="0" />
                        <TinyButton1 dataId="1" />
                        <TinyButton1 dataId="2" />
                        <TinyButton1 dataId="3" />
                        <TinyButton1 dataId="4" />
                    </div>
                </div>
            )
        }
    

export default RadiusPresets
