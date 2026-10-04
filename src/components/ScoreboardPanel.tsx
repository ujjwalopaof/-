import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function ScoreboardPanel({
            populated
        }: {
            populated: boolean;
        }) {
            return (
                <div data-v-0a8e1c82={""} className={"scoreboard-panel-content"}>
                    {populated ? (
                        <div data-v-0a8e1c82={""} className={"scoreboard"}>
                            <div className={"scoreboard-title"}>
                                <span style={{color:"#ffffff"}}>
                                    Xyrk_
                                </span>
                            </div>
                            <div className={"scoreboard-list"}>
                                <ScoreboardRow color="#00FF00" prefix="$ " value="26M" />
                                <ScoreboardRow color="#A503FC" prefix="★ " value="242 " />
                                <ScoreboardRow color="#FF0000" prefix="" value="113 " />
                                <ScoreboardRow color="#FC7703" prefix="☠ " value="47 " />
                                <ScoreboardRow color="#FFE600" prefix="⌚ " value="26d 15h " />
                            </div>
                        </div>
                    ) : null}
                </div>
            )
        }
    

// Subcomponents

        function ScoreboardRow({
            color,
            prefix,
            value
        }: {
            color: string;
            prefix: string;
            value: string;
        }) {
            return (
                <div className={"scoreboard-row"}>
                    <span style={{color}}>
                        {prefix}
                    </span>
                    <span style={{color:"#ffffff"}}>
                        {value}
                    </span>
                </div>
            )
        }
    

export default ScoreboardPanel
