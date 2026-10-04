import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function SkinViewer({ username }: { username: string }) {
            return (
                <div data-v-18e13205={""} className={"skin-viewer-wrapper skin-viewer-model"}>
                    <div data-v-18e13205={""} className={"nametag"}>
                        {username}
                    </div>
                    <div
                        data-v-18e13205={""}
                        className={"skin-viewer-container"}
                        style={{ width: "90px", height: "180px" }}
                    >
                        <canvas
                            width={"72"}
                            height={"144"}
                            style={{
                                touchAction: "none",
                                width: "90px",
                                height: "180px",
                                backgroundBlendMode: "normal",
                                backgroundClip: "content-box",
                                backgroundPosition: "center center",
                                backgroundColor: "rgba(0,0,0,0)",
                                backgroundImage: "url(\"assets/data-asset-b9a2a734-03bb-4f04-ac3b-e09ecc1a16f7.png\")",
                                backgroundSize: "100% 100%",
                                backgroundOrigin: "content-box",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                        </canvas>
                    </div>
                </div>
            )
        }
    

export default SkinViewer
