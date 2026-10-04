import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function CancelButton({
          scope,
          route,
          routeOnButton = false,
          waveActive = false
        }: {
          scope: "d9c23b5c" | "83bc3aca" | "830291ff";
          route: string;
          routeOnButton?: boolean;
          waveActive?: boolean;
        }) {
          const scopeAttribute =
            scope === "d9c23b5c"
              ? { "data-v-d9c23b5c": "" }
              : scope === "83bc3aca"
                ? { "data-v-83bc3aca": "" }
                : { "data-v-830291ff": "" };

          return (
            <button
              {...scopeAttribute}
              className={"n-button n-button--default-type n-button--medium-type"}
              tabIndex={"0"}
              type={"button"}
              style={{
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-color": "#0000",
                "--n-color-hover": "#0000",
                "--n-color-pressed": "#0000",
                "--n-color-focus": "#0000",
                "--n-color-disabled": "#0000",
                "--n-ripple-color": "#8a63d2",
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-text-color-hover": "#9b75db",
                "--n-text-color-pressed": "#7a55c6",
                "--n-text-color-focus": "#9b75db",
                "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                "--n-border": "1px solid #222222",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-pressed": "1px solid #7a55c6",
                "--n-border-focus": "1px solid #9b75db",
                "--n-border-disabled": "1px solid #222222",
                "--n-width": "initial",
                "--n-height": "34px",
                "--n-font-size": "14px",
                "--n-padding": "0 14px",
                "--n-icon-size": "18px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
              } as React.CSSProperties}
              {...(routeOnButton
                ? { "data-navigate-routes": JSON.stringify([route]) }
                : {})}
            >
              <span
                className={"n-button__content"}
                {...(!routeOnButton
                  ? { "data-navigate-routes": JSON.stringify([route]) }
                  : {})}
              >
                Cancel
              </span>
              <div
                className={
                  waveActive
                    ? "n-base-wave n-base-wave--active"
                    : "n-base-wave"
                }
              >
              </div>
              <div className={"n-button__border"}>
              </div>
              <div className={"n-button__state-border"}>
              </div>
            </button>
          );
        }
    

export default CancelButton
