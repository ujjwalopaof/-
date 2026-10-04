import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DashboardBody from './components/DashboardBody.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function pushPath(path: string) {
  window.history.pushState(null, '', '' + path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function nextInCycle(curr: string, arr: readonly string[]): string {
  if (arr.length === 0) return curr;
  const i = arr.findIndex((it) => it === curr);
  return i === -1 ? arr[0] : arr[(i + 1) % arr.length];
}

export function navigateToNext(snapshots: readonly string[]) {
  // For HashRouter, route is in hash; for BrowserRouter, it's in pathname+search
  const curr = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(1)
    : window.location.pathname + window.location.search + window.location.hash;
  const next = nextInCycle(curr, snapshots);
  pushPath(next);
}

const NAV_ATTR = "data-navigate-routes";

function getFirstRoutableElement(e: Event): Element | null {
    // composedPath handles Shadow DOM; fallback to closest for normal DOM.
    const path = (e as any).composedPath?.() as EventTarget[] | undefined;
    if (path) {
        for (const n of path) {
            if (n instanceof Element && n.hasAttribute(NAV_ATTR)) return n;
        }
        return null;
    }

    const t = e.target;
    return t instanceof Element ? t.closest(`[${NAV_ATTR}]`) : null;
}

document.addEventListener(
    "click",
    (e) => {
        // Mimic typical "client-side nav" behavior:
        if (!(e instanceof MouseEvent)) return;
        if (e.defaultPrevented) return;
        if (e.button !== 0) return; // left-click only
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // allow new-tab etc.

        const el = getFirstRoutableElement(e);
        if (!el) return;

        const raw = el.getAttribute(NAV_ATTR);
        if (!raw) return;

        let routes: unknown;
        try {
            routes = JSON.parse(raw);
        } catch {
            console.error("Failed to parse JSON from attribute", NAV_ATTR);
            return;
        }

        if (Array.isArray(routes) && routes.every((x) => typeof x === "string")) {
            navigateToNext(routes as string[]);
            e.preventDefault();
            return;
        } else {
            console.error("Invalid value for attribute", NAV_ATTR);
        }
    },
    true // capture phase == onClickCapture-ish
);

function AppContent() {
    const location = useLocation();

    return (
        <>
        {(() => {
            switch (location.pathname + location.search + location.hash) {
            case "/dashboard": case "/dashboard?step=2": case "/dashboard?step=3": case "/dashboard?step=4": case "/dashboard?step=5": case "/dashboard?step=6": case "/dashboard?step=7": case "/dashboard?step=8": case "/dashboard?step=12": case "/dashboard?step=22": case "/dashboard?step=23": case "/dashboard?step=46": case "/dashboard?step=47": case "/dashboard?step=48": case "/dashboard?step=49": case "/dashboard?step=50": case "/dashboard?step=51": case "/dashboard?step=52": case "/dashboard?step=53": case "/dashboard?step=54": case "/dashboard?step=55": case "/dashboard?step=56": case "/dashboard?step=57":
                return <DashboardBody dataId="0" />
            case "/dashboard?step=9": case "/dashboard?step=10":
                return <DashboardBody dataId="1" />
            case "/dashboard?step=11": case "/dashboard?step=21": case "/dashboard?step=25": case "/dashboard?step=29": case "/dashboard?step=31": case "/dashboard?step=33": case "/dashboard?step=35": case "/dashboard?step=37": case "/dashboard?step=39": case "/dashboard?step=41": case "/dashboard?step=43": case "/dashboard?step=45":
                return <DashboardBody dataId="8" />
            case "/dashboard?step=13": case "/dashboard?step=14": case "/dashboard?step=15": case "/dashboard?step=16": case "/dashboard?step=17": case "/dashboard?step=18": case "/dashboard?step=19": case "/dashboard?step=20":
                return <DashboardBody dataId="2" />
            case "/dashboard?step=24":
                return <DashboardBody dataId="3" />
            case "/dashboard?step=26": case "/dashboard?step=27": case "/dashboard?step=28":
                return <DashboardBody dataId="9" />
            case "/dashboard?step=30":
                return <DashboardBody dataId="10" />
            case "/dashboard?step=32":
                return <DashboardBody dataId="11" />
            case "/dashboard?step=34":
                return <DashboardBody dataId="12" />
            case "/dashboard?step=36":
                return <DashboardBody dataId="13" />
            case "/dashboard?step=38":
                return <DashboardBody dataId="14" />
            case "/dashboard?step=40":
                return <DashboardBody dataId="15" />
            case "/dashboard?step=42":
                return <DashboardBody dataId="16" />
            case "/dashboard?step=44":
                return <DashboardBody dataId="17" />
            case "/dashboard?step=58":
                return <DashboardBody dataId="4" />
            case "/dashboard?step=59":
                return <DashboardBody dataId="5" />
            case "/dashboard?step=60":
                return <DashboardBody dataId="7" />
            case "/dashboard?step=61":
                return <DashboardBody dataId="6" />
            case "/dashboard?step=62":
                return <DashboardBody dataId="18" />
            }
        })()}
        </>
    );
}

function App() {
    const validRoutes = ["/dashboard","/dashboard?step=2","/dashboard?step=3","/dashboard?step=4","/dashboard?step=5","/dashboard?step=6","/dashboard?step=7","/dashboard?step=8","/dashboard?step=9","/dashboard?step=10","/dashboard?step=11","/dashboard?step=12","/dashboard?step=13","/dashboard?step=14","/dashboard?step=15","/dashboard?step=16","/dashboard?step=17","/dashboard?step=18","/dashboard?step=19","/dashboard?step=20","/dashboard?step=21","/dashboard?step=22","/dashboard?step=23","/dashboard?step=24","/dashboard?step=25","/dashboard?step=26","/dashboard?step=27","/dashboard?step=28","/dashboard?step=29","/dashboard?step=30","/dashboard?step=31","/dashboard?step=32","/dashboard?step=33","/dashboard?step=34","/dashboard?step=35","/dashboard?step=36","/dashboard?step=37","/dashboard?step=38","/dashboard?step=39","/dashboard?step=40","/dashboard?step=41","/dashboard?step=42","/dashboard?step=43","/dashboard?step=44","/dashboard?step=45","/dashboard?step=46","/dashboard?step=47","/dashboard?step=48","/dashboard?step=49","/dashboard?step=50","/dashboard?step=51","/dashboard?step=52","/dashboard?step=53","/dashboard?step=54","/dashboard?step=55","/dashboard?step=56","/dashboard?step=57","/dashboard?step=58","/dashboard?step=59","/dashboard?step=60","/dashboard?step=61","/dashboard?step=62"]
    const defaultRoute = "/dashboard";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
