import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import AddAccountButton from './AddAccountButton.tsx'
import ServerFolderHead from './ServerFolderHead.tsx'
import ServerFolderMenuButton from './ServerFolderMenuButton.tsx'
import SidebarActionButton from './SidebarActionButton.tsx'
import FolderAccount from './FolderAccount.tsx'


// Component

function Sidebar() {
    const location = useLocation()

    return (
        <div data-v-067a1f02={""} className={"sidebar-scroll"}>
            <div data-v-067a1f02={""} className={"phantom-branding"}>
                <Img id="0" />
                <div data-v-067a1f02={""} className={"phantom-branding-text"}>
                    <span data-v-067a1f02={""} className={"phantom-branding-title"}>
                        afkclient
                        <span data-v-067a1f02={""} className={"brand-domain-pro"}>
                            .pro
                        </span>
                    </span>
                </div>
            </div>
            <div data-v-856b3794={""} data-v-067a1f02={""} className={"connection-folder-list"}>
                <div data-v-856b3794={""} className={"sidebar-accounts-preview"}>
                    <span data-v-856b3794={""} className={"sidebar-accounts-header__label"}>
                        Your Accounts
                    </span>
                    <div data-v-856b3794={""} className={"sidebar-accounts-stack"}>
                        <span
                            data-v-856b3794={""}
                            className={"sidebar-accounts-stack__avatar"}
                            title={"Xyrk_"}
                            style={{ marginLeft: "0px", zIndex: "2" }}
                        >
                            <Img id="1" />
                        </span>
                        <AddAccountButton />
                    </div>
                </div>
                <div data-v-856b3794={""} className={"sidebar-label-row"}>
                    <span
                        data-v-856b3794={""}
                        className={"n-text sidebar-label"}
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
                        Servers
                    </span>
                    <span
                        data-v-856b3794={""}
                        className={"n-text sidebar-label sidebar-label-count sidebar-label-count--active"}
                        style={{
                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                            "--n-text-color": "rgba(255,255,255,0.85)",
                            "--n-font-weight-strong": "500",
                            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                            "--n-code-border-radius": "2px",
                            "--n-code-text-color": "rgba(255,255,255,0.85)",
                            "--n-code-color": "rgba(255,255,255,0.12)",
                            "--n-code-border": "1px solid #0000"
                        }}
                    >
                        1/30 active connections
                    </span>
                </div>
                <div data-v-af2a506a={""} data-v-856b3794={""} className={"server-folder open"}>
                    <div data-v-af2a506a={""} className={"server-folder-head-row"}>
                        {(() => {
                            switch (location.pathname + location.search + location.hash) {
                                case "/dashboard":
                                case "/dashboard?step=2":
                                case "/dashboard?step=3":
                                case "/dashboard?step=4":
                                case "/dashboard?step=5":
                                case "/dashboard?step=6":
                                case "/dashboard?step=7":
                                case "/dashboard?step=8":
                                case "/dashboard?step=9":
                                case "/dashboard?step=10":
                                case "/dashboard?step=11":
                                case "/dashboard?step=12":
                                case "/dashboard?step=13":
                                case "/dashboard?step=14":
                                case "/dashboard?step=15":
                                case "/dashboard?step=16":
                                case "/dashboard?step=17":
                                case "/dashboard?step=18":
                                case "/dashboard?step=19":
                                case "/dashboard?step=20":
                                case "/dashboard?step=21":
                                case "/dashboard?step=22":
                                case "/dashboard?step=23":
                                case "/dashboard?step=24":
                                case "/dashboard?step=25":
                                case "/dashboard?step=26":
                                case "/dashboard?step=27":
                                case "/dashboard?step=28":
                                case "/dashboard?step=29":
                                case "/dashboard?step=30":
                                case "/dashboard?step=31":
                                case "/dashboard?step=32":
                                case "/dashboard?step=33":
                                case "/dashboard?step=34":
                                case "/dashboard?step=35":
                                case "/dashboard?step=36":
                                case "/dashboard?step=37":
                                case "/dashboard?step=38":
                                case "/dashboard?step=39":
                                case "/dashboard?step=40":
                                case "/dashboard?step=41":
                                case "/dashboard?step=42":
                                case "/dashboard?step=43":
                                case "/dashboard?step=44":
                                case "/dashboard?step=45":
                                case "/dashboard?step=46":
                                case "/dashboard?step=47":
                                case "/dashboard?step=48":
                                case "/dashboard?step=49":
                                case "/dashboard?step=50":
                                case "/dashboard?step=51":
                                    return <ServerFolderHead onlineCount={0} offlineCount={1} />
                                case "/dashboard?step=52":
                                case "/dashboard?step=53":
                                case "/dashboard?step=54":
                                case "/dashboard?step=55":
                                case "/dashboard?step=56":
                                case "/dashboard?step=57":
                                case "/dashboard?step=58":
                                case "/dashboard?step=59":
                                case "/dashboard?step=60":
                                case "/dashboard?step=61":
                                case "/dashboard?step=62":
                                    return <ServerFolderHead onlineCount={1} offlineCount={0} />
                                default:
                                    return null
                            }
                        })()}
                        <ServerFolderMenuButton />
                    </div>
                    <div data-v-af2a506a={""} className={"server-folder-panel"}>
                        <div data-v-af2a506a={""} className={"server-folder-panel-inner"}>
                            <div data-v-af2a506a={""} className={"server-folder-body"}>
                                {(() => {
                                    switch (location.pathname + location.search + location.hash) {
                                        case "/dashboard":
                                        case "/dashboard?step=2":
                                        case "/dashboard?step=3":
                                        case "/dashboard?step=4":
                                        case "/dashboard?step=5":
                                        case "/dashboard?step=6":
                                        case "/dashboard?step=7":
                                            return <FolderAccount dataId="0" />
                                        case "/dashboard?step=8":
                                        case "/dashboard?step=49":
                                        case "/dashboard?step=50":
                                        case "/dashboard?step=51":
                                            return <FolderAccount dataId="11" />
                                        case "/dashboard?step=9":
                                        case "/dashboard?step=10":
                                        case "/dashboard?step=11":
                                        case "/dashboard?step=12":
                                        case "/dashboard?step=13":
                                        case "/dashboard?step=14":
                                        case "/dashboard?step=15":
                                        case "/dashboard?step=16":
                                        case "/dashboard?step=17":
                                        case "/dashboard?step=18":
                                        case "/dashboard?step=19":
                                        case "/dashboard?step=20":
                                        case "/dashboard?step=21":
                                        case "/dashboard?step=22":
                                        case "/dashboard?step=23":
                                        case "/dashboard?step=24":
                                        case "/dashboard?step=25":
                                        case "/dashboard?step=26":
                                        case "/dashboard?step=27":
                                        case "/dashboard?step=28":
                                        case "/dashboard?step=29":
                                        case "/dashboard?step=30":
                                        case "/dashboard?step=31":
                                        case "/dashboard?step=32":
                                        case "/dashboard?step=33":
                                        case "/dashboard?step=34":
                                        case "/dashboard?step=35":
                                        case "/dashboard?step=36":
                                        case "/dashboard?step=37":
                                        case "/dashboard?step=38":
                                        case "/dashboard?step=39":
                                        case "/dashboard?step=40":
                                        case "/dashboard?step=41":
                                        case "/dashboard?step=42":
                                        case "/dashboard?step=43":
                                        case "/dashboard?step=44":
                                        case "/dashboard?step=45":
                                        case "/dashboard?step=46":
                                        case "/dashboard?step=47":
                                        case "/dashboard?step=48":
                                            return <FolderAccount dataId="12" />
                                        case "/dashboard?step=52":
                                            return <FolderAccount dataId="1" />
                                        case "/dashboard?step=53":
                                            return <FolderAccount dataId="2" />
                                        case "/dashboard?step=54":
                                        case "/dashboard?step=55":
                                            return <FolderAccount dataId="3" />
                                        case "/dashboard?step=56":
                                            return <FolderAccount dataId="4" />
                                        case "/dashboard?step=57":
                                            return <FolderAccount dataId="5" />
                                        case "/dashboard?step=58":
                                            return <FolderAccount dataId="6" />
                                        case "/dashboard?step=59":
                                            return <FolderAccount dataId="7" />
                                        case "/dashboard?step=60":
                                            return <FolderAccount dataId="8" />
                                        case "/dashboard?step=61":
                                            return <FolderAccount dataId="9" />
                                        case "/dashboard?step=62":
                                            return <FolderAccount dataId="10" />
                                        default:
                                            return null
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-856b3794={""} className={"sidebar-action-row"}>
                    <SidebarActionButton dataId="0" />
                    <SidebarActionButton dataId="1" />
                </div>
            </div>
        </div>
    )
}
    

export default Sidebar
