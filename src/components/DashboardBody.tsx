import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import PrimaryButton from './PrimaryButton.tsx'
import PrimaryButton1 from './PrimaryButton1.tsx'
import TrialOfferClose from './TrialOfferClose.tsx'
import Automation from './Automation.tsx'
import AddAccountModal from './AddAccountModal.tsx'
import Sidebar from './Sidebar.tsx'
import AutomationConfigModal from './AutomationConfigModal.tsx'
import AutomationConfig from './AutomationConfig.tsx'
import MicrosoftAuthModal from './MicrosoftAuthModal.tsx'
import ConnectServerModal from './ConnectServerModal.tsx'
import PhantomSidebar from './PhantomSidebar.tsx'
import ScheduledTaskModal from './ScheduledTaskModal.tsx'
import MacroConfigModal from './MacroConfigModal.tsx'
import AutomationModal from './AutomationModal.tsx'
import PhantomContent from './PhantomContent.tsx'
import AutomationConfigModal1 from './AutomationConfigModal1.tsx'


        type DashboardBodyData = {
            bodyClassName: string | null;
            emptyModalCount: number;
            modalZIndex: number | null;
            modalKind:
                | "scheduledTask"
                | "macroConfig"
                | "automationConfig1"
                | "addAccount"
                | "microsoftAuth"
                | "connectServer"
                | "automation"
                | "automationConfig"
                | null;
            modalDataId: string | null;
        };
    
// Component

        function DashboardBody({ dataId }: { dataId: string }) {
            const location = useLocation()
            const data: DashboardBodyData = getDashboardBodyData(dataId)
            const route = location.pathname + location.search + location.hash

            return (
                <body
                    n-styled={""}
                    style={{
                        textSizeAdjust: "100%",
                        WebkitTapHighlightColor: "transparent",
                        padding: "0px",
                        margin: "0px",
                        backgroundColor: "rgb(0, 0, 0)",
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: "14px",
                        fontFamily: "\"Space Grotesk\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
                        lineHeight: "1.6",
                        transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    {...(data.bodyClassName !== null ? { className: data.bodyClassName } : {})}
                >
                    <DashboardApplication route={route} />
                    <TrialBanner />
                    <canvas
                        data-v-43e740de={""}
                        className={"fireworks-canvas fireworks-canvas--modal"}
                        style={{
                            backgroundBlendMode: "normal",
                            backgroundClip: "content-box",
                            backgroundPosition: "center center",
                            backgroundColor: "rgba(0,0,0,0)",
                            backgroundImage: "url(\"assets/data-asset-c61abfb3-bd77-4219-a835-21e6b47fea3a.png\")",
                            backgroundSize: "100% 100%",
                            backgroundOrigin: "content-box",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                    </canvas>
                    {Array.from({ length: data.emptyModalCount }, (_, index) => (
                        <EmptyModalContainer key={index} zIndex={2000 + index} />
                    ))}
                    {data.modalZIndex !== null ? (
                        <ModalContainer zIndex={data.modalZIndex}>
                            <DashboardModalContent
                                kind={data.modalKind}
                                dataId={data.modalDataId}
                            />
                        </ModalContainer>
                    ) : null}
                </body>
            )
        }
    

// Subcomponents

        function DashboardApplication({ route }: { route: string }) {
            let content = null

            switch (route) {
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
                case "/dashboard?step=46":
                case "/dashboard?step=47":
                case "/dashboard?step=48":
                case "/dashboard?step=51":
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
                    content = <PhantomContent tabsStuck={false} />
                    break
                case "/dashboard?step=45":
                case "/dashboard?step=49":
                case "/dashboard?step=50":
                    content = <PhantomContent tabsStuck={true} />
                    break
                default:
                    content = null
            }

            return (
                <div id={"app"}>
                    <div className={"n-config-provider"}>
                        <div
                            className={"n-layout n-layout--absolute-positioned"}
                            style={{
                                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                "--n-color": "#000000",
                                "--n-text-color": "rgba(255,255,255,0.85)"
                            } as any}
                        >
                            <div
                                className={"n-layout-scroll-container"}
                                style={{ display: "flex", flexFlow: "row", width: "100%" }}
                            >
                                <PhantomSidebar username="pxe10" imageId="5" />
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        function TrialBanner() {
            return (
                <div className={"trial-offer-banner"}>
                    <span className={"trial-offer-banner__text"}>
                        <strong>
                            You are currently on a free trial.
                        </strong>
                        {` Subscribe now for 30% off your first month before your trial ends - expires in 1 day. `}
                    </span>
                    <PrimaryButton1 dataId="3" />
                    <TrialOfferClose />
                </div>
            )
        }

        function EmptyModalContainer({ zIndex }: { zIndex: number }) {
            return (
                <div
                    role={"none"}
                    className={"n-modal-container"}
                    style={{
                        "--n-bezier-ease-out": "cubic-bezier(0, 0, .2, 1)",
                        "--n-box-shadow": "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
                        "--n-color": "#080808",
                        "--n-text-color": "rgba(255, 255, 255, 0.85)",
                        zIndex
                    } as any}
                >
                </div>
            )
        }

        function ModalContainer({
            zIndex,
            children
        }: {
            zIndex: number;
            children: JSX.Element | null;
        }) {
            return (
                <div
                    role={"none"}
                    className={"n-modal-container"}
                    style={{
                        "--n-bezier-ease-out": "cubic-bezier(0, 0, .2, 1)",
                        "--n-box-shadow": "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
                        "--n-color": "#080808",
                        "--n-text-color": "rgba(255, 255, 255, 0.85)",
                        zIndex
                    } as any}
                >
                    <div role={"none"} className={"n-modal-body-wrapper"}>
                        <div
                            role={"none"}
                            className={"n-scrollbar"}
                            style={{
                                "--n-scrollbar-bezier": "cubic-bezier(.4,0,.2,1)",
                                "--n-scrollbar-color": "rgba(255,255,255,0.2)",
                                "--n-scrollbar-color-hover": "rgba(255,255,255,0.3)",
                                "--n-scrollbar-border-radius": "5px",
                                "--n-scrollbar-width": "5px",
                                "--n-scrollbar-height": "5px",
                                "--n-scrollbar-rail-top-horizontal-top": "4px",
                                "--n-scrollbar-rail-right-horizontal-top": "2px",
                                "--n-scrollbar-rail-bottom-horizontal-top": "auto",
                                "--n-scrollbar-rail-left-horizontal-top": "2px",
                                "--n-scrollbar-rail-top-horizontal-bottom": "auto",
                                "--n-scrollbar-rail-right-horizontal-bottom": "2px",
                                "--n-scrollbar-rail-bottom-horizontal-bottom": "4px",
                                "--n-scrollbar-rail-left-horizontal-bottom": "2px",
                                "--n-scrollbar-rail-top-vertical-right": "2px",
                                "--n-scrollbar-rail-right-vertical-right": "4px",
                                "--n-scrollbar-rail-bottom-vertical-right": "2px",
                                "--n-scrollbar-rail-left-vertical-right": "auto",
                                "--n-scrollbar-rail-top-vertical-left": "2px",
                                "--n-scrollbar-rail-right-vertical-left": "auto",
                                "--n-scrollbar-rail-bottom-vertical-left": "2px",
                                "--n-scrollbar-rail-left-vertical-left": "4px",
                                "--n-scrollbar-rail-color": "transparent"
                            } as any}
                        >
                            <div role={"none"} className={"n-scrollbar-container"}>
                                {children}
                            </div>
                            <div className={"n-scrollbar-rail n-scrollbar-rail--vertical n-scrollbar-rail--vertical--right n-scrollbar-rail--disabled"}>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        function DashboardModalContent({
            kind,
            dataId
        }: {
            kind: DashboardBodyData["modalKind"];
            dataId: string | null;
        }) {
            const location = useLocation()
            const route = location.pathname + location.search + location.hash

            switch (kind) {
                case "scheduledTask":
                    switch (route) {
                        case "/dashboard?step=9":
                            return (
                                <ScheduledTaskModal
                                    showMask={true}
                                    hidden={false}
                                    taskNameFocused={true}
                                />
                            )
                        case "/dashboard?step=10":
                            return (
                                <ScheduledTaskModal
                                    showMask={true}
                                    hidden={false}
                                    taskNameFocused={false}
                                />
                            )
                        default:
                            return null
                    }
                case "macroConfig":
                    return <MacroConfigModal hidden={false} />
                case "automationConfig1":
                    return <AutomationConfigModal1 dataId={dataId as string} />
                case "addAccount":
                    return <AddAccountModal visible={true} />
                case "microsoftAuth":
                    return <MicrosoftAuthModal showMask={true} hidden={false} />
                case "connectServer":
                    return <ConnectServerModal dataId={dataId as string} />
                case "automation":
                    return <AutomationModal dataId={dataId as string} />
                case "automationConfig":
                    return <AutomationConfigModal visible={true} />
                default:
                    return null
            }
        }
    


        function getDashboardBodyData(id: string): DashboardBodyData {
            const key = String(id)

            switch (key) {
                case "0":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: null,
                        modalKind: null,
                        modalDataId: null
                    }
                case "1":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "scheduledTask",
                        modalDataId: null
                    }
                case "2":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "macroConfig",
                        modalDataId: null
                    }
                case "3":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automationConfig1",
                        modalDataId: "0"
                    }
                case "4":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "addAccount",
                        modalDataId: null
                    }
                case "5":
                    return {
                        bodyClassName: "msa-modal-open",
                        emptyModalCount: 1,
                        modalZIndex: 2001,
                        modalKind: "microsoftAuth",
                        modalDataId: null
                    }
                case "6":
                    return {
                        bodyClassName: "",
                        emptyModalCount: 2,
                        modalZIndex: 2002,
                        modalKind: "connectServer",
                        modalDataId: "0"
                    }
                case "7":
                    return {
                        bodyClassName: "",
                        emptyModalCount: 2,
                        modalZIndex: null,
                        modalKind: null,
                        modalDataId: null
                    }
                case "8":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 1,
                        modalZIndex: null,
                        modalKind: null,
                        modalDataId: null
                    }
                case "9":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "2"
                    }
                case "10":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "4"
                    }
                case "11":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "6"
                    }
                case "12":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automationConfig",
                        modalDataId: null
                    }
                case "13":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "8"
                    }
                case "14":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automationConfig1",
                        modalDataId: "2"
                    }
                case "15":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "10"
                    }
                case "16":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "12"
                    }
                case "17":
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: 2000,
                        modalKind: "automation",
                        modalDataId: "14"
                    }
                case "18":
                    return {
                        bodyClassName: "",
                        emptyModalCount: 3,
                        modalZIndex: null,
                        modalKind: null,
                        modalDataId: null
                    }
                default:
                    return {
                        bodyClassName: null,
                        emptyModalCount: 0,
                        modalZIndex: null,
                        modalKind: null,
                        modalDataId: null
                    }
            }
        }
    

export default DashboardBody
