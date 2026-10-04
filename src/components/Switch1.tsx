import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Switch from './Switch.tsx'


        type SwitchData = {
            extraAttributes: Record<string, string>;
        };
    
// Component

        function Switch1({
            isActive,
            dataId
        }: {
            isActive: boolean;
            dataId: string;
        }) {
            const { extraAttributes }: SwitchData = getSwitch1Data(dataId);

            return (
                <div
                    {...extraAttributes}
                    role={"switch"}
                    className={isActive
                        ? "n-switch n-switch--active n-switch--round n-switch--rubber-band"
                        : "n-switch n-switch--round n-switch--rubber-band"}
                    tabIndex={"0"}
                    style={{
                        "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                        "--n-button-border-radius":"8px",
                        "--n-button-box-shadow":"0px 2px 4px 0 rgba(0,0,0,0.4)",
                        "--n-button-color":"#FFF",
                        "--n-button-width":"18px",
                        "--n-button-width-pressed":"24px",
                        "--n-button-height":"18px",
                        "--n-height":"max(22px,18px)",
                        "--n-offset":"calc((22px - 18px)/2)",
                        "--n-opacity-disabled":"0.38",
                        "--n-rail-border-radius":"8px",
                        "--n-rail-color":"rgba(255,255,255,.20)",
                        "--n-rail-color-active":"rgb(42,148,125)",
                        "--n-rail-height":"22px",
                        "--n-rail-width":"40px",
                        "--n-width":"max(40px,calc(40px + 18px - 22px))",
                        "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)",
                        "--n-loading-color":"rgb(42,148,125)",
                        "--n-text-color":"rgba(255,255,255,0.85)",
                        "--n-icon-color":"#000000"
                    }}>
                    <div className={"n-switch__rail"}>
                        <div className={"n-switch__button"}>
                        </div>
                    </div>
                </div>
            );
        }
    

function getSwitch1Data(id): SwitchData  {
    switch (String(id)) {
    case "0":
        return ({
                  "extraAttributes": {}
                });
    case "1":
        return ({
                  "extraAttributes": {}
                });
    case "2":
        return ({
                    "extraAttributes": { "data-v-83bc3aca": "" }
                });
    case "3":
        return ({
                    "extraAttributes": { "data-v-0cbfd3bc": "" }
                });
    case "4":
        return ({
                  "extraAttributes": { "data-v-92c44818": "" }
                });
    case "5":
        return ({
                    "extraAttributes": { "data-v-92c44818": "" }
                });
    default:
        return ({
                  "extraAttributes": {}
                });
    }
}


export default Switch1
