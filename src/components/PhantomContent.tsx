import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Spacer from './Spacer.tsx'
import PhantomCard from './PhantomCard.tsx'
import ConnectionPanel from './ConnectionPanel.tsx'
import DashboardView from './DashboardView.tsx'


    
// Component

        function PhantomContent({
            tabsStuck
        }: {
            tabsStuck: boolean;
        }) {
            return (
                <div
                    className={"n-layout-content n-layout n-layout--static-positioned phantom-content"}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-color": "#000000",
                        "--n-text-color": "rgba(255,255,255,0.85)"
                    }}
                >
                    <div className={"n-layout-scroll-container"}>
                        <div className={"phantom-hero-bg"}>
                        </div>
                        <div
                            className={"phantom-main"}
                            data-navigate-routes={JSON.stringify(["/dashboard?step=56"])}
                        >
                            <div
                                data-v-f6379ed9={""}
                                className={"account-workspace account-workspace--active"}
                            >
                                <div
                                    data-v-f6379ed9={""}
                                    className={"n-grid"}
                                    style={{
                                        width: "100%",
                                        display: "grid",
                                        gridTemplateColumns: "repeat(14,minmax(0px,1fr))",
                                        gap: "10px 12px",
                                        marginTop: "10px"
                                    }}
                                >
                                    <RoutePhantomCard />
                                    <RouteConnectionPanel />
                                </div>
                                <div
                                    data-v-f6379ed9={""}
                                    className={tabsStuck ? "tabs-wrapper tabs-stuck" : "tabs-wrapper"}
                                >
                                    <Spacer />
                                    <RouteDashboardView />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function RoutePhantomCard() {
            const location = useLocation()
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
                    return <PhantomCard locked={true} />
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
                    return <PhantomCard locked={false} />
                default:
                    return null
            }
        }

        function RouteConnectionPanel() {
            const location = useLocation()
            switch (location.pathname + location.search + location.hash) {
                case "/dashboard":
                case "/dashboard?step=2":
                case "/dashboard?step=3":
                case "/dashboard?step=4":
                case "/dashboard?step=5":
                case "/dashboard?step=6":
                case "/dashboard?step=7":
                case "/dashboard?step=48":
                    return <ConnectionPanel disabled={false} showCancel={false} />
                case "/dashboard?step=8":
                case "/dashboard?step=49":
                case "/dashboard?step=50":
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
                    return <ConnectionPanel disabled={true} showCancel={false} />
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
                    return <ConnectionPanel disabled={false} showCancel={true} />
                default:
                    return null
            }
        }

        function RouteDashboardView() {
            const location = useLocation()
            switch (location.pathname + location.search + location.hash) {
                case "/dashboard":
                    return <DashboardView dataId="0" />
                case "/dashboard?step=2":
                case "/dashboard?step=4":
                    return <DashboardView dataId="1" />
                case "/dashboard?step=3":
                case "/dashboard?step=5":
                case "/dashboard?step=22":
                    return <DashboardView dataId="2" />
                case "/dashboard?step=6":
                    return <DashboardView dataId="3" />
                case "/dashboard?step=7":
                case "/dashboard?step=8":
                case "/dashboard?step=9":
                case "/dashboard?step=10":
                case "/dashboard?step=11":
                    return <DashboardView dataId="4" />
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
                    return <DashboardView dataId="5" />
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
                    return <DashboardView dataId="6" />
                case "/dashboard?step=46":
                    return <DashboardView dataId="7" />
                case "/dashboard?step=47":
                case "/dashboard?step=48":
                case "/dashboard?step=49":
                case "/dashboard?step=50":
                    return <DashboardView dataId="8" />
                case "/dashboard?step=51":
                case "/dashboard?step=52":
                    return <DashboardView dataId="9" />
                case "/dashboard?step=53":
                    return <DashboardView dataId="10" />
                case "/dashboard?step=54":
                case "/dashboard?step=55":
                case "/dashboard?step=56":
                    return <DashboardView dataId="11" />
                case "/dashboard?step=57":
                case "/dashboard?step=58":
                case "/dashboard?step=59":
                case "/dashboard?step=60":
                case "/dashboard?step=61":
                    return <DashboardView dataId="12" />
                case "/dashboard?step=62":
                    return <DashboardView dataId="13" />
                default:
                    return null
            }
        }
    

export default PhantomContent
