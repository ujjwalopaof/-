import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Code_brackets from './icons/Code_brackets.tsx'
import PrimaryButton from './PrimaryButton.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import CloseButton from './CloseButton.tsx'
import CancelButton from './CancelButton.tsx'
import ConfigModalHeading from './ConfigModalHeading.tsx'
import BasicsSection from './BasicsSection.tsx'
import PlaybackConfig from './PlaybackConfig.tsx'
import EmptyWorkflow from './EmptyWorkflow.tsx'
import WorkflowPicker from './WorkflowPicker.tsx'
import WorkflowTimeline from './WorkflowTimeline.tsx'


    
// Component

        function MacroConfigModal({
          hidden
        }: {
          hidden: boolean;
        }) {
          const location = useLocation()

          return (
            <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
              {!hidden && <div className={"n-modal-mask"}></div>}

              <FocusSentinel tabIndex="0" />

              <div
                className={"n-card n-modal macros-config-modal"}
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
                  width: "96%",
                  maxWidth: "1080px",
                  transformOrigin: "1687px 300px",
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
                  <div data-v-83bc3aca={""} className={"macro-config-modal"}>
                    <div data-v-83bc3aca={""} className={"config-modal-header"}>
                      <Code_brackets />
                      <ConfigModalHeading title="New Macro" scopeId="data-v-83bc3aca" />
                    </div>
                    <div data-v-83bc3aca={""} className={"config-modal-body"}>
                      {(() => {
                        switch (location.pathname + location.search + location.hash) {
                          case "/dashboard?step=13":
                            return <BasicsSection isFocused={true} />
                          case "/dashboard?step=14":
                          case "/dashboard?step=15":
                          case "/dashboard?step=16":
                          case "/dashboard?step=17":
                          case "/dashboard?step=18":
                          case "/dashboard?step=19":
                          case "/dashboard?step=20":
                            return <BasicsSection isFocused={false} />
                          default:
                            return null
                        }
                      })()}
                      <PlaybackConfig />
                      {(() => {
                        switch (location.pathname + location.search + location.hash) {
                          case "/dashboard?step=13":
                            return <EmptyWorkflow />
                          case "/dashboard?step=14":
                            return <WorkflowPicker dataId="1" />
                          case "/dashboard?step=15":
                            return <WorkflowTimeline dataId="2" />
                          case "/dashboard?step=16":
                            return <WorkflowPicker dataId="3" />
                          case "/dashboard?step=17":
                            return <WorkflowTimeline dataId="4" />
                          case "/dashboard?step=18":
                            return <WorkflowPicker dataId="5" />
                          case "/dashboard?step=19":
                            return <WorkflowTimeline dataId="6" />
                          case "/dashboard?step=20":
                            return <WorkflowPicker dataId="7" />
                          default:
                            return null
                        }
                      })()}
                    </div>
                    <div data-v-83bc3aca={""} className={"config-modal-actions"}>
                      <CancelButton
                        scope="83bc3aca"
                        route="/dashboard?step=21"
                        routeOnButton={false}
                        waveActive={false}
                      />
                      <PrimaryButton
                        label="Save"
                        disabled={false}
                        scope="data-v-83bc3aca"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FocusSentinel tabIndex="0" />
            </div>
          )
        }
    

export default MacroConfigModal
