import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import AccountUsername from './AccountUsername.tsx'
import AccountQuickButton from './AccountQuickButton.tsx'
import AccountQuickDivider from './AccountQuickDivider.tsx'
import BadgeSup from './BadgeSup.tsx'


        type FolderAccountData = {
            connectedTime: string | null;
            suffixClassName: string;
            secondaryQuickButtonDataId: string;
            badgeStyle: Record<string, string>;
        };
    
// Component

        function FolderAccount({ dataId }: { dataId: string }) {
            const {
                connectedTime,
                suffixClassName,
                secondaryQuickButtonDataId,
                badgeStyle,
            }: FolderAccountData = getFolderAccountData(dataId);

            return (
                <ul
                    data-v-856b3794={""}
                    className={"n-list n-list--show-divider n-list--hoverable n-list--clickable phantom-accounts folder-accounts"}
                    style={{
                        "--n-font-size": "14px",
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-text-color": "rgba(255,255,255,0.85)",
                        "--n-color": "#080808",
                        "--n-border-radius": "8px",
                        "--n-border-color": "rgba(255,255,255,0.09)",
                        "--n-border-color-modal": "rgba(30,30,30,1)",
                        "--n-border-color-popover": "rgba(24,24,24,0.95)",
                        "--n-color-modal": "#080808",
                        "--n-color-popover": "rgba(0,0,0,0.94)",
                        "--n-color-hover": "rgba(255,255,255,0.09)",
                        "--n-color-hover-modal": "rgba(30,30,30,1)",
                        "--n-color-hover-popover": "rgba(24,24,24,0.95)",
                    }}
                >
                    <li
                        data-v-856b3794={""}
                        className={"n-list-item selected-bot acct-compact acct-folder"}
                        draggable={"true"}
                    >
                        <div className={"n-list-item__prefix"}>
                            <Img id="3" />
                        </div>
                        <div className={"n-list-item__main"}>
                            <div className={"acct-meta"}>
                                <div className={"acct-name-row"}>
                                    <AccountUsername username="Xyrk_" />
                                </div>
                                {connectedTime !== null && (
                                    <div className={"acct-connected-time"}>
                                        {connectedTime}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={"n-list-item__suffix"}>
                            <div className={suffixClassName}>
                                <AccountQuickButton dataId="0" />
                                <div className={"acct-quick-action"}>
                                    <AccountQuickDivider />
                                    <AccountQuickButton dataId={secondaryQuickButtonDataId} />
                                </div>
                                <div
                                    className={"n-badge n-badge--dot n-badge--as-is"}
                                    style={badgeStyle}
                                >
                                    <BadgeSup />
                                </div>
                            </div>
                        </div>
                        <div className={"n-list-item__divider"}>
                        </div>
                    </li>
                </ul>
            );
        }
    


        function getFolderAccountData(id: string): FolderAccountData {
            const key = String(id);

            const offlineRedStyle = {
                "--n-font-size": "12px",
                "--n-font-family": "\"Space Grotesk\",system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif",
                "--n-color": "rgb(208,58,82)",
                "--n-ripple-color": "rgb(208,58,82)",
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-ripple-bezier": "cubic-bezier(0,0,.2,1)",
            };

            const onlineStyle = {
                "--n-font-size": "12px",
                "--n-font-family": "'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                "--n-color": "rgb(42, 148, 125)",
                "--n-ripple-color": "rgb(42, 148, 125)",
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-ripple-bezier": "cubic-bezier(0, 0, .2, 1)",
            };

            const pendingStyle = {
                "--n-font-size": "12px",
                "--n-font-family": "'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                "--n-color": "rgb(240, 138, 0)",
                "--n-ripple-color": "rgb(240, 138, 0)",
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-ripple-bezier": "cubic-bezier(0, 0, .2, 1)",
            };

            const redStyle = {
                "--n-font-size": "12px",
                "--n-font-family": "'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                "--n-color": "rgb(208, 58, 82)",
                "--n-ripple-color": "rgb(208, 58, 82)",
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-ripple-bezier": "cubic-bezier(0, 0, .2, 1)",
            };

            const connectedTimes: Record<string, string> = {
                "1": "0m 4s",
                "2": "0m 5s",
                "3": "0m 6s",
                "4": "0m 7s",
                "5": "0m 8s",
                "6": "0m 9s",
                "7": "0m 10s",
                "8": "0m 11s",
                "9": "0m 12s",
                "10": "0m 14s",
            };

            if (key === "0") {
                return {
                    connectedTime: null,
                    suffixClassName: "acct-suffix-wrap acct-suffix-wrap--removable",
                    secondaryQuickButtonDataId: "1",
                    badgeStyle: offlineRedStyle,
                };
            }

            if (key === "11") {
                return {
                    connectedTime: null,
                    suffixClassName: "acct-suffix-wrap acct-suffix-wrap--removable",
                    secondaryQuickButtonDataId: "2",
                    badgeStyle: pendingStyle,
                };
            }

            if (key === "12") {
                return {
                    connectedTime: null,
                    suffixClassName: "acct-suffix-wrap acct-suffix-wrap--removable",
                    secondaryQuickButtonDataId: "3",
                    badgeStyle: redStyle,
                };
            }

            if (connectedTimes[key] !== undefined) {
                return {
                    connectedTime: connectedTimes[key],
                    suffixClassName: "acct-suffix-wrap status-online acct-suffix-wrap--removable",
                    secondaryQuickButtonDataId: "2",
                    badgeStyle: onlineStyle,
                };
            }

            return {
                connectedTime: null,
                suffixClassName: "acct-suffix-wrap acct-suffix-wrap--removable",
                secondaryQuickButtonDataId: "1",
                badgeStyle: offlineRedStyle,
            };
        }
    

export default FolderAccount
