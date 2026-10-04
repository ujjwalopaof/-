import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import AamTab from './AamTab.tsx'
import MicrosoftSignInButton from './MicrosoftSignInButton.tsx'
import DefaultButton from './DefaultButton.tsx'


    
// Component

        function AddAccountModal({ visible }: { visible: boolean }) {
            return (
                <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
                    {visible && (
                        <div className={"n-modal-mask"}>
                        </div>
                    )}
                    <FocusSentinel tabIndex="0" />
                    <div
                        data-v-eee196c5={""}
                        className={"n-modal aam-card"}
                        style={
                            visible
                                ? { transformOrigin: "-869px -74px" }
                                : { transformOrigin: "-869px -74px", display: "none" }
                        }
                    >
                        <div data-v-eee196c5={""} className={"aam-head"}>
                            <span data-v-eee196c5={""} className={"aam-title"}>
                                Add Account
                            </span>
                        </div>
                        <div data-v-eee196c5={""} className={"aam-tabs"}>
                            <AamTab imageId="111" label="Premium" active={true} />
                            <AamTab imageId="112" label="Offline" />
                            <AamTab imageId="113" label="Bedrock" />
                        </div>
                        <div data-v-eee196c5={""} className={"aam-body"}>
                            <div data-v-eee196c5={""} className={"aam-pane"}>
                                <Img id="114" />
                                <div data-v-eee196c5={""} className={"aam-pane-text"}>
                                    <span data-v-eee196c5={""} className={"aam-pane-title"}>
                                        Premium (Java)
                                    </span>
                                    <span data-v-eee196c5={""} className={"aam-pane-desc"}>
                                        {` Sign in with your Microsoft account to add a genuine Java Edition account. Works on premium and offline servers alike. `}
                                    </span>
                                </div>
                            </div>
                            <MicrosoftSignInButton scope="eee196c5" isAamCta={true} />
                        </div>
                        <div data-v-eee196c5={""} className={"aam-foot"}>
                            <DefaultButton label="Close" />
                        </div>
                    </div>
                    <FocusSentinel tabIndex="0" />
                </div>
            )
        }
    

export default AddAccountModal
