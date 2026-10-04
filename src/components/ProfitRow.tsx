import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Outlined_star_shape from './icons/Outlined_star_shape.tsx'
import Upward_trend_arrow from './icons/Upward_trend_arrow.tsx'
import Clock_face_time from './icons/Clock_face_time.tsx'
import Hourglass_timer from './icons/Hourglass_timer.tsx'


        type ProfitRowData = {
            icon: React.ReactNode;
            label: string;
            value: string | number;
        };
    
// Component

        function ProfitRow({ dataId }: { dataId: string }) {
            const { icon, label, value }: ProfitRowData = getProfitRowData(dataId);
            return (
                <tr>
                    <td className={"profit-table-icon"}>
                        {icon}
                    </td>
                    <td className={"profit-table-label"}>
                        {label}
                    </td>
                    <td className={"profit-table-value"}>
                        {value}
                    </td>
                </tr>
            );
        }
    


        function getProfitRowData(id: string): ProfitRowData {
            const stringId = String(id);
            switch (stringId) {
                case "0":
                    return {
                        icon: <Outlined_star_shape />,
                        label: "Session",
                        value: 0
                    };
                case "1":
                    return {
                        icon: <Upward_trend_arrow />,
                        label: "Per Hour",
                        value: "-"
                    };
                case "2":
                    return {
                        icon: <Clock_face_time />,
                        label: "Per Day",
                        value: 0
                    };
                case "3":
                    return {
                        icon: <Hourglass_timer />,
                        label: "Next Level",
                        value: "-"
                    };
                default:
                    return {
                        icon: <Outlined_star_shape />,
                        label: "Session",
                        value: 0
                    };
            }
        }
    

export default ProfitRow
