import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Secure_lock from './icons/Secure_lock.tsx'
import Secure_lock1 from './icons/Secure_lock1.tsx'
import TinyButton from './TinyButton.tsx'
import SuffixArrow from './SuffixArrow.tsx'
import DashboardTabs from './DashboardTabs.tsx'
import TabsBar from './TabsBar.tsx'
import SystemMessages from './SystemMessages.tsx'
import PrimaryButton from './PrimaryButton.tsx'
import ScoreboardPanel from './ScoreboardPanel.tsx'
import Actionbar from './Actionbar.tsx'
import RefreshButton from './RefreshButton.tsx'
import TabsScroll from './TabsScroll.tsx'
import PrimaryButton1 from './PrimaryButton1.tsx'
import EmptyContainer from './EmptyContainer.tsx'
import EmptyIcon from './EmptyIcon.tsx'
import EmptyDescription from './EmptyDescription.tsx'
import MacroLogHeader from './MacroLogHeader.tsx'
import MacroLogEmpty from './MacroLogEmpty.tsx'
import Switch from './Switch.tsx'
import AutomationLogHeader from './AutomationLogHeader.tsx'
import AutomationLogEmpty from './AutomationLogEmpty.tsx'
import BannerTitleRow from './BannerTitleRow.tsx'
import BannerNote from './BannerNote.tsx'
import InputBorder from './InputBorder.tsx'
import Icon from './Icon.tsx'
import CardHeader from './CardHeader.tsx'
import Switch1 from './Switch1.tsx'
import DeleteBotButton from './DeleteBotButton.tsx'
import TablistEntry from './TablistEntry.tsx'
import ChatToolbar from './ChatToolbar.tsx'
import MessageInput from './MessageInput.tsx'
import LogSearchHeader from './LogSearchHeader.tsx'
import Automation from './Automation.tsx'
import ActivitySearchInput from './ActivitySearchInput.tsx'
import ActivityLog from './ActivityLog.tsx'
import ScheduledTasks from './ScheduledTasks.tsx'
import AutomationSection from './AutomationSection.tsx'


type DashboardViewData = {
  indicatorTransform: string;
  indicatorWidth: string;
  pane:
    | { kind: "chat"; mode: "initial" | "routed" | "populated" }
    | { kind: "emptyTablist"; action: "loading" | "tiny" }
    | { kind: "commands"; scheduledTasksDataId: string }
    | { kind: "macros" }
    | { kind: "automations" }
    | { kind: "activity" }
    | { kind: "settings" }
    | { kind: "tablist"; latency: string; routedRefresh: boolean };
};
  
// Component

function DashboardView({ dataId }: { dataId: string }) {
  const data: DashboardViewData = getDashboardViewData(dataId);

  return (
    <div
      data-v-f6379ed9={""}
      className={"n-tabs n-tabs--bar-type n-tabs--medium-size n-tabs--top"}
      style={{
        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
        "--n-color-segment": "rgba(255,255,255,0.1)",
        "--n-bar-color": "#8a63d2",
        "--n-tab-font-size": "14px",
        "--n-tab-text-color": "#ffffff",
        "--n-tab-text-color-active": "#8a63d2",
        "--n-tab-text-color-disabled": "rgba(255,255,255,0.38)",
        "--n-tab-text-color-hover": "#8a63d2",
        "--n-pane-text-color": "rgba(255,255,255,0.85)",
        "--n-tab-border-color": "rgba(255,255,255,0.09)",
        "--n-tab-border-radius": "8px",
        "--n-close-size": "18px",
        "--n-close-icon-size": "14px",
        "--n-close-color-hover": "rgba(255,255,255,.12)",
        "--n-close-color-pressed": "rgba(255,255,255,.08)",
        "--n-close-border-radius": "8px",
        "--n-close-icon-color": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-hover": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-pressed": "rgba(255,255,255,0.52)",
        "--n-tab-color": "rgba(255,255,255,0.04)",
        "--n-tab-font-weight": "400",
        "--n-tab-font-weight-active": "400",
        "--n-tab-padding": "6px 0",
        "--n-tab-padding-vertical": "8px 16px",
        "--n-tab-gap": "36px",
        "--n-tab-gap-vertical": "8px",
        "--n-pane-padding-left": "0",
        "--n-pane-padding-right": "0",
        "--n-pane-padding-top": "12px",
        "--n-pane-padding-bottom": "0",
        "--n-font-weight-strong": "500",
        "--n-tab-color-segment": "rgba(255,255,255,0.1)"
      } as React.CSSProperties}
    >
      <DashboardNavigation
        indicatorTransform={data.indicatorTransform}
        indicatorWidth={data.indicatorWidth}
      />
      <div data-v-f6379ed9={""} className={"n-tab-pane"}>
        <DashboardPane pane={data.pane} />
      </div>
    </div>
  );
}
  

// Subcomponents

function DashboardNavigation({
  indicatorTransform,
  indicatorWidth
}: {
  indicatorTransform: string;
  indicatorWidth: string;
}) {
  const location = useLocation();
  const route = location.pathname + location.search + location.hash;

  const tabs = (() => {
    switch (route) {
      case "/dashboard":
      case "/dashboard?step=51":
      case "/dashboard?step=52":
      case "/dashboard?step=54":
      case "/dashboard?step=55":
      case "/dashboard?step=56":
        return <DashboardTabs activeTab="chat" />;
      case "/dashboard?step=2":
      case "/dashboard?step=4":
      case "/dashboard?step=6":
      case "/dashboard?step=53":
      case "/dashboard?step=57":
      case "/dashboard?step=58":
      case "/dashboard?step=59":
      case "/dashboard?step=60":
      case "/dashboard?step=61":
      case "/dashboard?step=62":
        return <DashboardTabs activeTab="tab" />;
      case "/dashboard?step=3":
      case "/dashboard?step=5":
      case "/dashboard?step=7":
      case "/dashboard?step=8":
      case "/dashboard?step=9":
      case "/dashboard?step=10":
      case "/dashboard?step=11":
      case "/dashboard?step=22":
        return <DashboardTabs activeTab="commands" />;
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
        return <DashboardTabs activeTab="macros" />;
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
        return <DashboardTabs activeTab="automations" />;
      case "/dashboard?step=46":
        return <DashboardTabs activeTab="activity" />;
      case "/dashboard?step=47":
      case "/dashboard?step=48":
      case "/dashboard?step=49":
      case "/dashboard?step=50":
        return <DashboardTabs activeTab="settings" />;
      default:
        return null;
    }
  })();

  const bar = (() => {
    switch (route) {
      case "/dashboard":
      case "/dashboard?step=51":
      case "/dashboard?step=52":
      case "/dashboard?step=54":
      case "/dashboard?step=55":
      case "/dashboard?step=56":
        return <TabsBar left="0px" maxWidth="284px" />;
      case "/dashboard?step=2":
      case "/dashboard?step=4":
      case "/dashboard?step=6":
      case "/dashboard?step=53":
      case "/dashboard?step=57":
      case "/dashboard?step=58":
      case "/dashboard?step=59":
      case "/dashboard?step=60":
      case "/dashboard?step=61":
      case "/dashboard?step=62":
        return <TabsBar left="284px" maxWidth="284px" />;
      case "/dashboard?step=3":
      case "/dashboard?step=5":
      case "/dashboard?step=7":
      case "/dashboard?step=8":
      case "/dashboard?step=9":
      case "/dashboard?step=10":
      case "/dashboard?step=11":
      case "/dashboard?step=22":
        return <TabsBar left="568px" maxWidth="284px" />;
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
        return <TabsBar left="853px" maxWidth="284px" />;
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
        return <TabsBar left="1130px" maxWidth="282px" />;
      case "/dashboard?step=46":
        return <TabsBar left="1421px" maxWidth="284px" />;
      case "/dashboard?step=47":
      case "/dashboard?step=48":
      case "/dashboard?step=49":
      case "/dashboard?step=50":
        return <TabsBar left="1695px" maxWidth="282px" />;
      default:
        return null;
    }
  })();

  return (
    <div className={"n-tabs-nav--bar-type n-tabs-nav--top n-tabs-nav"}>
      <div className={"n-tabs-nav-scroll-wrapper"}>
        <div className={"v-x-scroll"}>
          <div className={"n-tabs-nav-scroll-content"}>
            {tabs}
            {bar}
          </div>
        </div>
      </div>
      <div
        data-v-f6379ed9={""}
        className={"tab-active-indicator"}
        style={{
          opacity: "1",
          top: "6.25px",
          left: "0px",
          transform: indicatorTransform,
          width: indicatorWidth,
          height: "32.9883px"
        }}
      />
    </div>
  );
}

function ChatPane({
  mode
}: {
  mode: "initial" | "routed" | "populated";
}) {
  const location = useLocation();
  const route = location.pathname + location.search + location.hash;

  const routedSystemMessages = (() => {
    if (mode !== "routed") return null;
    switch (route) {
      case "/dashboard?step=51":
        return <SystemMessages dataId="1" />;
      case "/dashboard?step=52":
        return <SystemMessages dataId="2" />;
      default:
        return null;
    }
  })();

  const routedInput = (() => {
    if (mode !== "routed") return null;
    switch (route) {
      case "/dashboard?step=51":
        return <MessageInput inputDisabled={true} dataId="1" />;
      case "/dashboard?step=52":
        return <MessageInput inputDisabled={false} dataId="2" />;
      default:
        return null;
    }
  })();

  const routedScoreboard = (() => {
    if (mode !== "routed") return null;
    switch (route) {
      case "/dashboard?step=51":
        return <ScoreboardPanel populated={false} />;
      case "/dashboard?step=52":
        return <ScoreboardPanel populated={true} />;
      default:
        return null;
    }
  })();

  return (
    <div data-v-0a8e1c82={""} data-v-f6379ed9={""} className={"chat-tab"}>
      <div data-v-0a8e1c82={""} className={"chat-scoreboard-grid"}>
        <div data-v-0a8e1c82={""} className={"chat-container"}>
          {mode === "initial" ? (
            <ChatToolbar icon={<Secure_lock />} iconVariant="default" />
          ) : (
            <ChatToolbar icon={<Secure_lock1 />} iconVariant="four" />
          )}
          {mode === "initial" ? <SystemMessages dataId="0" /> : null}
          {mode === "initial" ? (
            <MessageInput inputDisabled={true} dataId="0" />
          ) : null}
          {mode === "routed" ? routedSystemMessages : null}
          {mode === "routed" ? routedInput : null}
          {mode === "populated" ? <SystemMessages dataId="3" /> : null}
          {mode === "populated" ? (
            <MessageInput inputDisabled={false} dataId="3" />
          ) : null}
        </div>
        <div data-v-0a8e1c82={""} className={"scoreboard-panel"}>
          {mode === "initial" ? <ScoreboardPanel populated={false} /> : null}
          {mode === "routed" ? routedScoreboard : null}
          {mode === "populated" ? <ScoreboardPanel populated={true} /> : null}
          <Actionbar />
        </div>
      </div>
    </div>
  );
}

function EmptyTablistPane({ action }: { action: "loading" | "tiny" }) {
  return (
    <div data-v-f6379ed9={""} className={"tablist-tab"}>
      <div className={"tablist-actions"}>
        {action === "loading" ? <RefreshButton state="loading" /> : <TinyButton dataId="2" />}
      </div>
      <div className={"tablist-container"}>
        <div className={"tablist-grid"} />
      </div>
      {action === "tiny" ? <div className={"phantom-empty"}>No players</div> : null}
    </div>
  );
}

function CommandsPane({ scheduledTasksDataId }: { scheduledTasksDataId: string }) {
  return (
    <div
      data-v-f6379ed9={""}
      className={"n-tabs n-tabs--line-type n-tabs--small-size n-tabs--top commands-subtabs"}
      style={{
        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
        "--n-color-segment": "rgba(255,255,255,0.1)",
        "--n-bar-color": "#8a63d2",
        "--n-tab-font-size": "14px",
        "--n-tab-text-color": "#ffffff",
        "--n-tab-text-color-active": "#8a63d2",
        "--n-tab-text-color-disabled": "rgba(255,255,255,0.38)",
        "--n-tab-text-color-hover": "#8a63d2",
        "--n-pane-text-color": "rgba(255,255,255,0.85)",
        "--n-tab-border-color": "rgba(255,255,255,0.09)",
        "--n-tab-border-radius": "8px",
        "--n-close-size": "18px",
        "--n-close-icon-size": "14px",
        "--n-close-color-hover": "rgba(255,255,255,.12)",
        "--n-close-color-pressed": "rgba(255,255,255,.08)",
        "--n-close-border-radius": "8px",
        "--n-close-icon-color": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-hover": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-pressed": "rgba(255,255,255,0.52)",
        "--n-tab-color": "rgba(255,255,255,0.04)",
        "--n-tab-font-weight": "400",
        "--n-tab-font-weight-active": "400",
        "--n-tab-padding": "6px 0",
        "--n-tab-padding-vertical": "6px 12px",
        "--n-tab-gap": "36px",
        "--n-tab-gap-vertical": "8px",
        "--n-pane-padding-left": "0",
        "--n-pane-padding-right": "0",
        "--n-pane-padding-top": "8px",
        "--n-pane-padding-bottom": "0",
        "--n-font-weight-strong": "500",
        "--n-tab-color-segment": "rgba(255,255,255,0.1)"
      } as React.CSSProperties}
    >
      <div className={"n-tabs-nav--line-type n-tabs-nav--top n-tabs-nav"}>
        <div className={"n-tabs-nav-scroll-wrapper"}>
          <TabsScroll />
        </div>
      </div>
      <div data-v-f6379ed9={""} className={"n-tab-pane"}>
        <div
          data-v-d9c23b5c={""}
          data-v-f6379ed9={""}
          role={"none"}
          className={"n-space"}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-start",
            gap: "8px 12px"
          }}
        >
          <ScheduledTasks dataId={scheduledTasksDataId} />
          <EmptyContainer />
          <EmptyContainer />
        </div>
      </div>
    </div>
  );
}

function LogCard({
  kind
}: {
  kind: "macro" | "automation";
}) {
  return (
    <div
      className={`n-card n-card--bordered ${
        kind === "macro" ? "macro-log-card" : "automation-log-card"
      }`}
      style={{
        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
        "--n-border-radius": "8px",
        "--n-color": "#080808",
        "--n-color-modal": "#080808",
        "--n-color-popover": "rgba(0,0,0,0.94)",
        "--n-color-embedded": "#080808",
        "--n-color-embedded-modal": "#080808",
        "--n-color-embedded-popover": "rgba(0,0,0,0.94)",
        "--n-color-target": "#8a63d2",
        "--n-text-color": "rgba(255,255,255,0.85)",
        "--n-line-height": "1.6",
        "--n-action-color": "rgba(255,255,255,0.06)",
        "--n-title-text-color": "#ffffff",
        "--n-title-font-weight": "500",
        "--n-close-icon-color": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-hover": "rgba(255,255,255,0.52)",
        "--n-close-icon-color-pressed": "rgba(255,255,255,0.52)",
        "--n-close-color-hover": "rgba(255,255,255,.12)",
        "--n-close-color-pressed": "rgba(255,255,255,.08)",
        "--n-border-color": "#222222",
        "--n-box-shadow": "0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)",
        "--n-padding-top": "12px",
        "--n-padding-bottom": "12px",
        "--n-padding-left": "16px",
        "--n-font-size": "14px",
        "--n-title-font-size": "16px",
        "--n-close-size": "22px",
        "--n-close-icon-size": "18px",
        "--n-close-border-radius": "8px"
      } as React.CSSProperties}
    >
      <div className={"n-card-header"} role={"heading"}>
        {kind === "macro" ? <MacroLogHeader /> : <AutomationLogHeader />}
      </div>
      <div className={"n-card__content"} role={"none"}>
        <LogSearchHeader dataId={kind === "macro" ? "0" : "1"} />
        {kind === "macro" ? <MacroLogEmpty /> : <AutomationLogEmpty />}
      </div>
    </div>
  );
}

function MacrosPane() {
  return (
    <div data-v-83bc3aca={""} data-v-f6379ed9={""} className={"macros-tab"}>
      <div data-v-83bc3aca={""} className={"macros-toolbar"}>
        <span
          data-v-83bc3aca={""}
          className={"n-text macros-hint"}
          style={{
            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
            "--n-text-color": "rgba(255,255,255,0.6)",
            "--n-font-weight-strong": "500",
            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
            "--n-code-border-radius": "2px",
            "--n-code-text-color": "rgba(255,255,255,0.85)",
            "--n-code-color": "rgba(255,255,255,0.12)",
            "--n-code-border": "1px solid #0000"
          } as React.CSSProperties}
        >
          {` Shared across accounts. Toggle enables the macro for this connection. `}
        </span>
        <PrimaryButton1 dataId="2" />
      </div>
      <div data-v-83bc3aca={""} className={"macros-empty"}>
        <div
          data-v-83bc3aca={""}
          className={"n-empty"}
          style={{
            "--n-icon-size": "40px",
            "--n-font-size": "14px",
            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
            "--n-text-color": "rgba(255,255,255,0.38)",
            "--n-icon-color": "rgba(255,255,255,0.38)",
            "--n-extra-text-color": "rgba(255,255,255,0.85)"
          } as React.CSSProperties}
        >
          <EmptyIcon />
          <EmptyDescription />
        </div>
      </div>
      <LogCard kind="macro" />
    </div>
  );
}

function AutomationsPane() {
  return (
    <div data-v-830291ff={""} data-v-f6379ed9={""} className={"automations-tab"}>
      <AutomationSection dataId="0" />
      <LogCard kind="automation" />
      <AutomationSection dataId="1" />
    </div>
  );
}

function ActivityPane() {
  return (
    <div data-v-cef28e8e={""} data-v-f6379ed9={""} className={"activity-log-tab"}>
      <div data-v-cef28e8e={""} className={"activity-bot-banner"}>
        <Img id="25" />
        <div data-v-cef28e8e={""} className={"banner-info"}>
          <BannerTitleRow />
          <BannerNote />
        </div>
      </div>
      <div data-v-cef28e8e={""} className={"activity-log-header"}>
        <div
          data-v-cef28e8e={""}
          className={"n-input n-input--resizable n-input--stateful activity-search"}
          style={{
            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
            "--n-count-text-color": "rgba(255,255,255,0.6)",
            "--n-count-text-color-disabled": "rgba(255,255,255,0.38)",
            "--n-color": "rgba(255,255,255,0.1)",
            "--n-font-size": "14px",
            "--n-font-weight": "400",
            "--n-border-radius": "8px",
            "--n-height": "28px",
            "--n-padding-left": "10px",
            "--n-padding-right": "10px",
            "--n-text-color": "rgba(255,255,255,0.85)",
            "--n-caret-color": "#8a63d2",
            "--n-text-decoration-color": "rgba(255,255,255,0.85)",
            "--n-border": "1px solid #0000",
            "--n-border-disabled": "1px solid #0000",
            "--n-border-hover": "1px solid #9b75db",
            "--n-border-focus": "1px solid #9b75db",
            "--n-placeholder-color": "rgba(255,255,255,0.38)",
            "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
            "--n-icon-size": "16px",
            "--n-line-height-textarea": "1.6",
            "--n-color-disabled": "rgba(255,255,255,0.06)",
            "--n-color-focus": "rgba(138,99,210,0.1)",
            "--n-text-color-disabled": "rgba(255,255,255,0.38)",
            "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.3)",
            "--n-loading-color": "#8a63d2",
            "--n-caret-color-warning": "#f2c97d",
            "--n-color-focus-warning": "rgba(242,201,125,0.1)",
            "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.3)",
            "--n-border-warning": "1px solid #f2c97d",
            "--n-border-focus-warning": "1px solid #f5d599",
            "--n-border-hover-warning": "1px solid #f5d599",
            "--n-loading-color-warning": "#f2c97d",
            "--n-caret-color-error": "#e88080",
            "--n-color-focus-error": "rgba(232,128,128,0.1)",
            "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.3)",
            "--n-border-error": "1px solid #e88080",
            "--n-border-focus-error": "1px solid #e98b8b",
            "--n-border-hover-error": "1px solid #e98b8b",
            "--n-loading-color-error": "#e88080",
            "--n-clear-color": "rgba(255,255,255,0.38)",
            "--n-clear-size": "16px",
            "--n-clear-color-hover": "rgba(255,255,255,0.48)",
            "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
            "--n-icon-color": "rgba(255,255,255,0.38)",
            "--n-icon-color-hover": "rgba(255,255,255,0.475)",
            "--n-icon-color-pressed": "rgba(255,255,255,0.30400000000000005)",
            "--n-icon-color-disabled": "rgba(255,255,255,0.28)",
            "--n-suffix-text-color": "rgba(255,255,255,0.85)"
          } as React.CSSProperties}
        >
          <ActivitySearchInput />
          <InputBorder className="n-input__border" />
          <InputBorder className="n-input__state-border" />
        </div>
        <div data-v-cef28e8e={""} className={"n-select activity-type-filter"}>
          <div
            className={"n-base-selection n-base-selection--selected"}
            style={{
              "--n-bezier": "cubic-bezier(.4,0,.2,1)",
              "--n-border": "1px solid #0000",
              "--n-border-active": "1px solid #8a63d2",
              "--n-border-focus": "1px solid #9b75db",
              "--n-border-hover": "1px solid #9b75db",
              "--n-border-radius": "8px",
              "--n-box-shadow-active": "0 0 8px 0 rgba(138,99,210,0.4)",
              "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.4)",
              "--n-box-shadow-hover": "none",
              "--n-caret-color": "#8a63d2",
              "--n-color": "rgba(255,255,255,0.1)",
              "--n-color-active": "rgba(138,99,210,0.1)",
              "--n-color-disabled": "rgba(255,255,255,0.06)",
              "--n-font-size": "14px",
              "--n-height": "28px",
              "--n-padding-single-top": "0",
              "--n-padding-multiple-top": "3px",
              "--n-padding-single-right": "26px",
              "--n-padding-multiple-right": "26px",
              "--n-padding-single-left": "12px",
              "--n-padding-multiple-left": "12px",
              "--n-padding-single-bottom": "0",
              "--n-padding-multiple-bottom": "0",
              "--n-placeholder-color": "rgba(255,255,255,0.38)",
              "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
              "--n-text-color": "rgba(255,255,255,0.85)",
              "--n-text-color-disabled": "rgba(255,255,255,0.38)",
              "--n-arrow-color": "rgba(255,255,255,0.38)",
              "--n-arrow-color-disabled": "rgba(255,255,255,0.28)",
              "--n-loading-color": "#8a63d2",
              "--n-color-active-warning": "rgba(242,201,125,0.1)",
              "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
              "--n-box-shadow-active-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
              "--n-box-shadow-hover-warning": "none",
              "--n-border-warning": "1px solid #f2c97d",
              "--n-border-focus-warning": "1px solid #f5d599",
              "--n-border-hover-warning": "1px solid #f5d599",
              "--n-border-active-warning": "1px solid #f2c97d",
              "--n-color-active-error": "rgba(232,128,128,0.1)",
              "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.4)",
              "--n-box-shadow-active-error": "0 0 8px 0 rgba(232,128,128,0.4)",
              "--n-box-shadow-hover-error": "none",
              "--n-border-error": "1px solid #e88080",
              "--n-border-focus-error": "1px solid #e98b8b",
              "--n-border-hover-error": "1px solid #e98b8b",
              "--n-border-active-error": "1px solid #e88080",
              "--n-clear-size": "16px",
              "--n-clear-color": "rgba(255,255,255,0.38)",
              "--n-clear-color-hover": "rgba(255,255,255,0.48)",
              "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
              "--n-arrow-size": "16px",
              "--n-font-weight": "400"
            } as React.CSSProperties}
          >
            <div className={"n-base-selection-label"} tabIndex={"0"}>
              <div className={"n-base-selection-input"} title={"All Events"}>
                <div className={"n-base-selection-input__content"}>All Events</div>
              </div>
              <div className={"n-base-loading n-base-suffix"} role={"img"}>
                <div className={"n-base-loading__placeholder"}>
                  <div className={"n-base-clear"}>
                    <div className={"n-base-clear__placeholder"}>
                      <SuffixArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"n-base-selection__border"} />
            <div className={"n-base-selection__state-border"} />
          </div>
        </div>
        <TinyButton dataId="3" />
      </div>
      <div
        role={"none"}
        className={"n-scrollbar"}
        style={{
          maxHeight: "460px",
          "--n-scrollbar-bezier": "cubic-bezier(.4,0,.2,1)",
          "--n-scrollbar-color": "rgba(255,255,255,0.2)",
          "--n-scrollbar-color-hover": "rgba(255,255,255,0.3)",
          "--n-scrollbar-border-radius": "5px",
          "--n-scrollbar-width": "5px",
          "--n-scrollbar-height": "5px",
          "--n-scrollbar-rail-top-horizontal-top": "4px",
          "--n-scrollbar-rail-right-horizontal-top": "2px",
          "--n-scrollbar-rail-bottom-horizontal-top": "auto",
          "--n-scrollbar-rail-left-horizontal-top": "2px",
          "--n-scrollbar-rail-top-horizontal-bottom": "auto",
          "--n-scrollbar-rail-right-horizontal-bottom": "2px",
          "--n-scrollbar-rail-bottom-horizontal-bottom": "4px",
          "--n-scrollbar-rail-left-horizontal-bottom": "2px",
          "--n-scrollbar-rail-top-vertical-right": "2px",
          "--n-scrollbar-rail-right-vertical-right": "4px",
          "--n-scrollbar-rail-bottom-vertical-right": "2px",
          "--n-scrollbar-rail-left-vertical-right": "auto",
          "--n-scrollbar-rail-top-vertical-left": "2px",
          "--n-scrollbar-rail-right-vertical-left": "auto",
          "--n-scrollbar-rail-bottom-vertical-left": "2px",
          "--n-scrollbar-rail-left-vertical-left": "4px",
          "--n-scrollbar-rail-color": "transparent"
        } as React.CSSProperties}
      >
        <div role={"none"} className={"n-scrollbar-container"}>
          <ActivityLog />
        </div>
        <div className={"n-scrollbar-rail n-scrollbar-rail--vertical n-scrollbar-rail--vertical--right n-scrollbar-rail--disabled"} />
      </div>
    </div>
  );
}

function StandardText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={"n-text"}
      style={{
        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
        "--n-text-color": "rgba(255,255,255,0.85)",
        "--n-font-weight-strong": "500",
        "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
        "--n-code-border-radius": "2px",
        "--n-code-text-color": "rgba(255,255,255,0.85)",
        "--n-code-color": "rgba(255,255,255,0.12)",
        "--n-code-border": "1px solid #0000"
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
}

function SettingCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div role={"none"} style={{ maxWidth: "100%" }}>
      <div
        className={"n-card n-card--bordered"}
        style={{
          "--n-bezier": "cubic-bezier(.4,0,.2,1)",
          "--n-border-radius": "8px",
          "--n-color": "#080808",
          "--n-color-modal": "#080808",
          "--n-color-popover": "rgba(0,0,0,0.94)",
          "--n-color-embedded": "#080808",
          "--n-color-embedded-modal": "#080808",
          "--n-color-embedded-popover": "rgba(0,0,0,0.94)",
          "--n-color-target": "#8a63d2",
          "--n-text-color": "rgba(255,255,255,0.85)",
          "--n-line-height": "1.6",
          "--n-action-color": "rgba(255,255,255,0.06)",
          "--n-title-text-color": "#ffffff",
          "--n-title-font-weight": "500",
          "--n-close-icon-color": "rgba(255,255,255,0.52)",
          "--n-close-icon-color-hover": "rgba(255,255,255,0.52)",
          "--n-close-icon-color-pressed": "rgba(255,255,255,0.52)",
          "--n-close-color-hover": "rgba(255,255,255,.12)",
          "--n-close-color-pressed": "rgba(255,255,255,.08)",
          "--n-border-color": "#222222",
          "--n-box-shadow": "0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)",
          "--n-padding-top": "19px",
          "--n-padding-bottom": "20px",
          "--n-padding-left": "24px",
          "--n-font-size": "14px",
          "--n-title-font-size": "18px",
          "--n-close-size": "22px",
          "--n-close-icon-size": "18px",
          "--n-close-border-radius": "8px"
        } as React.CSSProperties}
      >
        <CardHeader title={title} />
        <div className={"n-card__content"} role={"none"} style={{ paddingTop: "4px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function DisabledSetting({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SettingCard title={title}>
      <StandardText>{children}</StandardText>
      <div
        role={"none"}
        className={"n-space"}
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "8px 12px",
          marginTop: "8px"
        }}
      >
        <div role={"none"} style={{ maxWidth: "100%" }}>
          <Switch1 isActive={false} dataId="1" />
        </div>
        <div role={"none"} style={{ maxWidth: "100%" }}>
          <StandardText>Disabled</StandardText>
        </div>
      </div>
    </SettingCard>
  );
}

function SettingsPane() {
  return (
    <div
      data-v-f6379ed9={""}
      role={"none"}
      className={"n-space"}
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        gap: "12px"
      }}
    >
      <SettingCard title="Preferences">
        <div
          role={"none"}
          className={"n-space"}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-start",
            gap: "12px"
          }}
        >
          <div role={"none"} style={{ maxWidth: "100%" }}>
            <div
              role={"none"}
              className={"n-space"}
              style={{
                display: "flex",
                flexFlow: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px 12px"
              }}
            >
              <div role={"none"} style={{ maxWidth: "100%" }}>
                <StandardText>XP Tracking</StandardText>
              </div>
              <div role={"none"} style={{ maxWidth: "100%" }}>
                <Switch1 isActive={true} dataId="0" />
              </div>
            </div>
          </div>
          <div role={"none"} style={{ maxWidth: "100%" }}>
            <span
              className={"n-text"}
              style={{
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-text-color": "rgba(255,255,255,0.6)",
                "--n-font-weight-strong": "500",
                "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                "--n-code-border-radius": "2px",
                "--n-code-text-color": "rgba(255,255,255,0.85)",
                "--n-code-color": "rgba(255,255,255,0.12)",
                "--n-code-border": "1px solid #0000",
                fontSize: "12px"
              } as React.CSSProperties}
            >
              {` Shows levels earned this session, per hour, per day, and time to next level in the stats widget. `}
            </span>
          </div>
        </div>
      </SettingCard>

      <DisabledSetting title="Tick End Packet">
        {` Sends a tick_end packet each physics tick for Grim anti-cheat compatibility (1.21.2+). Disable this if the server does not use Grim or if it causes issues. `}
      </DisabledSetting>

      <DisabledSetting title="Anti-AFK">
        {` Subtle idle head drift and occasional jumps/arm swings to avoid a perfect-stillness fingerprint. Disable if the server flags this movement or you need the bot to stay perfectly still. `}
      </DisabledSetting>

      <DisabledSetting title="Chat Ping">
        {` Periodically run a server command (default `}
        <code
          className={"n-text n-text--code"}
          style={{
            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
            "--n-text-color": "rgba(255,255,255,0.85)",
            "--n-font-weight-strong": "500",
            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
            "--n-code-border-radius": "2px",
            "--n-code-text-color": "rgba(255,255,255,0.85)",
            "--n-code-color": "rgba(255,255,255,0.12)",
            "--n-code-border": "1px solid #0000"
          } as React.CSSProperties}
        >
          /ping
        </code>
        {`) and read the latency from the reply for the Connection Panel. Use this when protocol ping stays empty but the server's ping command works. Off by default — it posts to public chat. `}
      </DisabledSetting>

      <SettingCard title="Delete Account">
        <div
          role={"none"}
          className={"n-space"}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-start",
            gap: "8px"
          }}
        >
          <div role={"none"} style={{ maxWidth: "100%" }}>
            <StandardText>Delete this bot and clear its saved tokens/cache.</StandardText>
          </div>
          <div role={"none"} style={{ maxWidth: "100%" }}>
            <DeleteBotButton />
          </div>
        </div>
      </SettingCard>
    </div>
  );
}

function TablistPane({
  latency,
  routedRefresh
}: {
  latency: string;
  routedRefresh: boolean;
}) {
  const location = useLocation();
  const route = location.pathname + location.search + location.hash;

  const refresh = (() => {
    if (!routedRefresh) return <RefreshButton state="loading" />;
    switch (route) {
      case "/dashboard?step=57":
        return <RefreshButton state="loading" />;
      case "/dashboard?step=58":
      case "/dashboard?step=59":
      case "/dashboard?step=60":
      case "/dashboard?step=61":
      case "/dashboard?step=62":
        return <RefreshButton state="idle" />;
      default:
        return null;
    }
  })();

  return (
    <div data-v-f6379ed9={""} className={"tablist-tab"}>
      <div className={"tablist-actions"}>
        {refresh}
        <span className={"tablist-count"}>85 players</span>
      </div>
      <div className={"tablist-container"}>
        <div className={"tablist-header"}>
          <span />
          <span style={{ color: "#00A6FF", fontWeight: "700", textShadow: "1px 0 0 currentColor" }}>
            {`Donut SMP
                            `}
          </span>
          <span style={{ color: "#ffffff" }}>
            {`36.2K Players
                            `}
          </span>
        </div>
        <div className={"tablist-grid"}>
          {Array.from({ length: 85 }, (_, index) => (
            <TablistEntry key={index} dataId={String(index)} />
          ))}
        </div>
        <div className={"tablist-footer"}>
          <span />
          <span style={{ color: "#00FF00" }}>{`$ `}</span>
          <span style={{ color: "#ffffff" }}>{`26M `}</span>
          <span style={{ color: "#00FF00" }}>{`• `}</span>
          <span style={{ color: "#ffffff" }}>{`${latency} ms
                            `}</span>
        </div>
      </div>
    </div>
  );
}

function DashboardPane({ pane }: { pane: DashboardViewData["pane"] }) {
  switch (pane.kind) {
    case "chat":
      return <ChatPane mode={pane.mode} />;
    case "emptyTablist":
      return <EmptyTablistPane action={pane.action} />;
    case "commands":
      return <CommandsPane scheduledTasksDataId={pane.scheduledTasksDataId} />;
    case "macros":
      return <MacrosPane />;
    case "automations":
      return <AutomationsPane />;
    case "activity":
      return <ActivityPane />;
    case "settings":
      return <SettingsPane />;
    case "tablist":
      return <TablistPane latency={pane.latency} routedRefresh={pane.routedRefresh} />;
    default:
      return null;
  }
}
  


function getDashboardViewData(id: string): DashboardViewData {
  const key = String(id);

  switch (key) {
    case "0":
      return {
        indicatorTransform: "translateX(6.25px)",
        indicatorWidth: "284.219px",
        pane: { kind: "chat", mode: "initial" }
      };
    case "1":
      return {
        indicatorTransform: "translateX(290.469px)",
        indicatorWidth: "284.219px",
        pane: { kind: "emptyTablist", action: "loading" }
      };
    case "2":
      return {
        indicatorTransform: "translateX(574.688px)",
        indicatorWidth: "284.219px",
        pane: { kind: "commands", scheduledTasksDataId: "0" }
      };
    case "3":
      return {
        indicatorTransform: "translateX(290.469px)",
        indicatorWidth: "284.219px",
        pane: { kind: "emptyTablist", action: "tiny" }
      };
    case "4":
      return {
        indicatorTransform: "translateX(574.688px)",
        indicatorWidth: "284.219px",
        pane: { kind: "commands", scheduledTasksDataId: "1" }
      };
    case "5":
      return {
        indicatorTransform: "translateX(858.906px)",
        indicatorWidth: "284.219px",
        pane: { kind: "macros" }
      };
    case "6":
      return {
        indicatorTransform: "translateX(1135.98px)",
        indicatorWidth: "282.422px",
        pane: { kind: "automations" }
      };
    case "7":
      return {
        indicatorTransform: "translateX(1427.34px)",
        indicatorWidth: "284.219px",
        pane: { kind: "activity" }
      };
    case "8":
      return {
        indicatorTransform: "translateX(1700.84px)",
        indicatorWidth: "282.422px",
        pane: { kind: "settings" }
      };
    case "9":
      return {
        indicatorTransform: "translateX(6.25px)",
        indicatorWidth: "284.219px",
        pane: { kind: "chat", mode: "routed" }
      };
    case "10":
      return {
        indicatorTransform: "translateX(290.469px)",
        indicatorWidth: "284.219px",
        pane: { kind: "tablist", latency: "262", routedRefresh: false }
      };
    case "11":
      return {
        indicatorTransform: "translateX(6.25px)",
        indicatorWidth: "284.219px",
        pane: { kind: "chat", mode: "populated" }
      };
    case "12":
      return {
        indicatorTransform: "translateX(290.469px)",
        indicatorWidth: "284.219px",
        pane: { kind: "tablist", latency: "248", routedRefresh: true }
      };
    case "13":
      return {
        indicatorTransform: "translateX(290.469px)",
        indicatorWidth: "284.219px",
        pane: { kind: "tablist", latency: "249", routedRefresh: true }
      };
    default:
      return {
        indicatorTransform: "translateX(6.25px)",
        indicatorWidth: "284.219px",
        pane: { kind: "chat", mode: "initial" }
      };
  }
}
  

export default DashboardView
