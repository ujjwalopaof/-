import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Lightning_bolt from './icons/Lightning_bolt.tsx'
import Lightning_bolt_outline from './icons/Lightning_bolt_outline.tsx'
import PrimaryButton from './PrimaryButton.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import CloseButton from './CloseButton.tsx'
import CancelButton from './CancelButton.tsx'
import ConfigModalHeading from './ConfigModalHeading.tsx'
import Automation from './Automation.tsx'
import AutoSellConfig from './AutoSellConfig.tsx'
import SpawnerConfig from './SpawnerConfig.tsx'
import AutomationConfig from './AutomationConfig.tsx'
import GuiAutomationConfig from './GuiAutomationConfig.tsx'


        type AutomationModalData = {
          title: string;
          transformOrigin: string;
          hidden: boolean;
          body: (route: string) => React.ReactNode;
          cancelRoute: string;
          cancelRouteOnButton: boolean;
          cancelDataId?: string;
        };
    
// Component

        function AutomationModal({
          dataId
        }: {
          dataId: string;
        }) {
          const location = useLocation()
          const {
            title,
            transformOrigin,
            hidden,
            body,
            cancelRoute,
            cancelRouteOnButton,
            cancelDataId
          }: AutomationModalData = getAutomationModalData(dataId)
          const route = location.pathname + location.search + location.hash

          return (
            <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
              {!hidden && <div className={"n-modal-mask"}></div>}

              <FocusSentinel tabIndex="0" />

              <div
                className={"n-card n-modal automations-config-modal"}
                role={"dialog"}
                style={{
                  "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                  "--n-border-radius": "8px",
                  "--n-color": "#080808",
                  "--n-color-modal": "#080808",
                  "--n-color-popover": "rgba(0, 0, 0, 0.94)",
                  "--n-color-embedded": "#080808",
                  "--n-color-embedded-modal": "#080808",
                  "--n-color-embedded-popover": "rgba(0, 0, 0, 0.94)",
                  "--n-color-target": "#8a63d2",
                  "--n-text-color": "rgba(255, 255, 255, 0.85)",
                  "--n-line-height": "1.6",
                  "--n-action-color": "rgba(255, 255, 255, 0.06)",
                  "--n-title-text-color": "#ffffff",
                  "--n-title-font-weight": "500",
                  "--n-close-icon-color": "rgba(255, 255, 255, 0.52)",
                  "--n-close-icon-color-hover": "rgba(255, 255, 255, 0.52)",
                  "--n-close-icon-color-pressed": "rgba(255, 255, 255, 0.52)",
                  "--n-close-color-hover": "rgba(255, 255, 255, .12)",
                  "--n-close-color-pressed": "rgba(255, 255, 255, .08)",
                  "--n-border-color": "#222222",
                  "--n-box-shadow": "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
                  "--n-padding-top": "19px",
                  "--n-padding-bottom": "20px",
                  "--n-padding-left": "24px",
                  "--n-font-size": "14px",
                  "--n-title-font-size": "18px",
                  "--n-close-size": "22px",
                  "--n-close-icon-size": "18px",
                  "--n-close-border-radius": "8px",
                  borderRadius: "10px",
                  background: "rgba(0, 0, 0, 0.78)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  width: "93%",
                  maxWidth: "680px",
                  transformOrigin,
                  ...(hidden ? { display: "none" } : {})
                } as React.CSSProperties}
              >
                <div className={"n-card-header"} role={"heading"} style={{ display: "none" }}>
                  <div className={"n-card-header__main"} role={"heading"}></div>
                  <CloseButton
                    className="n-base-close n-base-close--absolute n-card-header__close"
                    iconVariant="card"
                  />
                </div>
                <div
                  className={"n-card__content"}
                  role={"none"}
                  style={{ padding: "0px", overflow: "hidden" }}
                >
                  <div data-v-830291ff={""} className={"automation-config-modal"}>
                    <div data-v-830291ff={""} className={"config-modal-header"}>
                      <Lightning_bolt_outline />
                      <ConfigModalHeading
                        title={title}
                        scopeId="data-v-830291ff"
                      />
                    </div>
                    <div data-v-830291ff={""} className={"config-modal-body"}>
                      {body(route)}
                    </div>
                    <div data-v-830291ff={""} className={"config-modal-actions"}>
                      {cancelDataId === undefined ? (
                        <CancelButton
                          scope="830291ff"
                          route={cancelRoute}
                          routeOnButton={cancelRouteOnButton}
                          waveActive={false}
                        />
                      ) : (
                        <CancelButton
                          scope="830291ff"
                          route={cancelRoute}
                          routeOnButton={cancelRouteOnButton}
                          waveActive={false}
                          dataId={cancelDataId}
                        />
                      )}
                      <PrimaryButton
                        label="Save"
                        disabled={false}
                        scope="data-v-830291ff"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FocusSentinel tabIndex="0" />
            </div>
          )
        }
    

function getAutomationModalData(id): AutomationModalData  {
    switch (String(id)) {
    case "0":
        return ({
              "title": "DonutSMP Auto Sell",
              "transformOrigin": "-420px 529px",
              "hidden": false,
              "body": (route) => {
                switch (route) {
                  case "/dashboard?step=26":
                  case "/dashboard?step=27":
                    return <AutoSellConfig pickerFocused={true} advancedExpanded={false} />
                  case "/dashboard?step=28":
                    return <AutoSellConfig pickerFocused={false} advancedExpanded={true} />
                  default:
                    return null
                }
              },
              "cancelRoute": "/dashboard?step=29",
              "cancelRouteOnButton": false,
              "cancelDataId": undefined
            });
    case "1":
        return ({
                  "title": "DonutSMP Auto Sell",
                  "transformOrigin": "-420px 529px",
                  "hidden": true,
                  "body": (route: string) => {
                    switch (route) {
                      case "/dashboard?step=26":
                      case "/dashboard?step=27":
                        return <AutoSellConfig pickerFocused={true} advancedExpanded={false} />
                      case "/dashboard?step=28":
                        return <AutoSellConfig pickerFocused={false} advancedExpanded={true} />
                      default:
                        return undefined
                    }
                  },
                  "cancelRoute": "/dashboard?step=29",
                  "cancelRouteOnButton": false,
                  "cancelDataId": undefined
                });
    case "2":
        return ({
                  "title": "DonutSMP Spawner Sell",
                  "transformOrigin": "392px 465px",
                  "hidden": false,
                  "body": (route) => <SpawnerConfig dataId="3" />,
                  "cancelRoute": "/dashboard?step=31",
                  "cancelRouteOnButton": false,
                  "cancelDataId": undefined
                });
    case "3":
        return ({
                  "title": "DonutSMP Spawner Sell",
                  "transformOrigin": "392px 465px",
                  "hidden": true,
                  "body": (route: string) => <SpawnerConfig dataId="3" />,
                  "cancelRoute": "/dashboard?step=31",
                  "cancelRouteOnButton": false,
                  "cancelDataId": undefined
                });
    case "4":
        return ({
              "title": "DonutSMP Spawner Drop",
              "transformOrigin": "758px 431px",
              "hidden": false,
              "body": (route: string) => <SpawnerConfig dataId="4" />,
              "cancelRoute": "/dashboard?step=33",
              "cancelRouteOnButton": false,
              "cancelDataId": undefined
            });
    case "5":
        return ({
                  "title": "DonutSMP Spawner Drop",
                  "transformOrigin": "758px 431px",
                  "hidden": true,
                  "body": (route) => <SpawnerConfig dataId="4" />,
                  "cancelRoute": "/dashboard?step=33",
                  "cancelRouteOnButton": false,
                  "cancelDataId": undefined
                });
    case "6":
        return ({
                    "title": "Auto Disconnect Near Players",
                    "transformOrigin": "-425px 640px",
                    "hidden": false,
                    "body": (route: string) => <AutomationConfig dataId="0" />,
                    "cancelRoute": "/dashboard?step=37",
                    "cancelRouteOnButton": true,
                    "cancelDataId": undefined
                });
    case "7":
        return ({
                  "title": "Auto Disconnect Near Players",
                  "transformOrigin": "-425px 640px",
                  "hidden": true,
                  "body": route => <AutomationConfig dataId="0" />,
                  "cancelRoute": "/dashboard?step=37",
                  "cancelRouteOnButton": true,
                  "cancelDataId": undefined
                });
    case "8":
        return ({
              "title": "Auto Eat",
              "transformOrigin": "362px 646px",
              "hidden": false,
              "body": (route: string) => <AutomationConfig dataId="1" />,
              "cancelRoute": "/dashboard?step=41",
              "cancelRouteOnButton": false,
              "cancelDataId": undefined
            });
    case "9":
        return ({
                  "title": "Auto Eat",
                  "transformOrigin": "362px 646px",
                  "hidden": true,
                  "body": (route: string) => <AutomationConfig dataId="1" />,
                  "cancelRoute": "/dashboard?step=41",
                  "cancelRouteOnButton": false,
                  "cancelDataId": undefined
                });
    case "10":
        return ({
                  "title": "Auto Eat",
                  "transformOrigin": "357px 632px",
                  "hidden": false,
                  "body": (route: string) => <AutomationConfig dataId="1" />,
                  "cancelRoute": "/dashboard?step=43",
                  "cancelRouteOnButton": true,
                  "cancelDataId": undefined
                });
    case "11":
        return ({
                  "title": "Auto Eat",
                  "transformOrigin": "357px 632px",
                  "hidden": true,
                  "body": (route: string) => <AutomationConfig dataId="1" />,
                  "cancelRoute": "/dashboard?step=43",
                  "cancelRouteOnButton": true,
                  "cancelDataId": undefined
                });
    case "12":
        return ({
                  "title": "Custom GUI Command",
                  "transformOrigin": "743px 801px",
                  "hidden": false,
                  "body": (route) => <GuiAutomationConfig openMenuFocused={true} />,
                  "cancelRoute": "/dashboard?step=45",
                  "cancelRouteOnButton": false,
                  "cancelDataId": "22"
                });
    case "13":
        return ({
                  "title": "Custom GUI Command",
                  "transformOrigin": "743px 801px",
                  "hidden": true,
                  "body": (route: string) => <GuiAutomationConfig openMenuFocused={true} />,
                  "cancelRoute": "/dashboard?step=45",
                  "cancelRouteOnButton": false,
                  "cancelDataId": "22"
                });
    default:
        return ({
              "title": "DonutSMP Auto Sell",
              "transformOrigin": "-420px 529px",
              "hidden": false,
              "body": (route) => {
                switch (route) {
                  case "/dashboard?step=26":
                  case "/dashboard?step=27":
                    return <AutoSellConfig pickerFocused={true} advancedExpanded={false} />
                  case "/dashboard?step=28":
                    return <AutoSellConfig pickerFocused={false} advancedExpanded={true} />
                  default:
                    return null
                }
              },
              "cancelRoute": "/dashboard?step=29",
              "cancelRouteOnButton": false,
              "cancelDataId": undefined
            });
    }
}


export default AutomationModal
