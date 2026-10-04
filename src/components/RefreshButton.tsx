import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import UnnamedSvg from './icons/UnnamedSvg.tsx'
import Icon from './Icon.tsx'


    
// Component

        function RefreshButton({
          state
        }: {
          state: "loading" | "transitioning" | "idle";
        }) {
          return (
            <button
              className={
                state === "loading"
                  ? "n-button n-button--default-type n-button--tiny-type n-button--disabled n-button--loading"
                  : "n-button n-button--default-type n-button--tiny-type"
              }
              tabIndex={state === "loading" ? "-1" : "0"}
              type={"button"}
              {...(state === "loading" ? { disabled: "" } : {})}
              style={{
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-color": "#0000",
                "--n-color-hover": "rgba(255,255,255,.12)",
                "--n-color-pressed": "rgba(255,255,255,.08)",
                "--n-color-focus": "rgba(255,255,255,.12)",
                "--n-color-disabled": "#0000",
                "--n-ripple-color": "#0000",
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-text-color-hover": "rgba(255,255,255,0.85)",
                "--n-text-color-pressed": "rgba(255,255,255,0.85)",
                "--n-text-color-focus": "rgba(255,255,255,0.85)",
                "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                "--n-border": "1px solid #222222",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-pressed": "1px solid #7a55c6",
                "--n-border-focus": "1px solid #9b75db",
                "--n-border-disabled": "1px solid #222222",
                "--n-width": "initial",
                "--n-height": "22px",
                "--n-font-size": "12px",
                "--n-padding": "0 6px",
                "--n-icon-size": "14px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
              } as React.CSSProperties}
            >
              {state === "loading" ? (
                <span className={"n-button__icon"}>
                  <LoadingIcon />
                </span>
              ) : state === "transitioning" ? (
                <span
                  className={"n-button__icon fade-in-width-expand-transition-leave-active fade-in-width-expand-transition-leave-to"}
                  style={{ maxWidth: "0px" }}
                >
                  <LoadingIcon />
                </span>
              ) : null}
              <span className={"n-button__content"}>
                Refresh
              </span>
              <div className={"n-base-wave"}>
              </div>
            </button>
          )
        }
    

// Subcomponents

        function LoadingIcon() {
          return (
            <div className={"n-base-loading n-icon-slot"} role={"img"}>
              <div className={"n-base-loading__transition-wrapper"}>
                <div className={"n-base-loading__container"}>
                  <UnnamedSvg />
                </div>
              </div>
            </div>
          )
        }
    

export default RefreshButton
