import React, { useState } from "react";

// 颜色常量定义
const ORANGE = "#E8623A";
const ORANGE_LIGHT = "#FFF0EB";
const GRAY_BG = "#F5F3F1";
const TEXT_MAIN = "#1C1C1E";
const TEXT_SUB = "#888888";
const TEXT_CAPTION = "#AAAAAA";
const GREEN = "#34C759";

// ==========================================
// 1. 图标组件 (修复 SVG 路径及 React 属性)
// ==========================================
const IconHome = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" fill={active ? ORANGE_LIGHT : "none"} />
    <path d="M9 21V12h6v9" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" />
  </svg>
);

const IconPerson = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" />
  </svg>
);

const IconStar = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" fill={active ? ORANGE_LIGHT : "none"} />
  </svg>
);

const IconChat = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={active ? ORANGE : "#BBBBBB"} strokeWidth="1.8" fill={active ? ORANGE_LIGHT : "none"} />
  </svg>
);

const IconChart = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="4" height="9" rx="1" fill={active ? ORANGE : "#BBBBBB"} />
    <rect x="10" y="7" width="4" height="14" rx="1" fill={active ? ORANGE : "#BBBBBB"} />
    <rect x="17" y="3" width="4" height="18" rx="1" fill={active ? ORANGE : "#BBBBBB"} />
  </svg>
);

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="#AAAAAA" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconBack = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke={TEXT_MAIN} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconSparkle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.11 2 2 0 015.08 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.03 9.35a16 16 0 006.51 6.51l1.3-1.3a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconMsg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
  </svg>
);

const IconBulb = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 21h6M12 3a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8A6.002 6.002 0 0112 3z" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={ORANGE} strokeWidth="1.8" />
    <path d="M12 7v5l3 3" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconBox = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke={ORANGE} strokeWidth="1.8" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke={ORANGE} strokeWidth="1.8" />
    <line x1="12" y1="22.08" x2="12" y2="12.01" stroke={ORANGE} strokeWidth="1.8" />
  </svg>
);

const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke={ORANGE} strokeWidth="1.8" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconDot = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink: 0 }}>
    <circle cx="4" cy="4" r="4" fill={ORANGE} />
  </svg>
);

// ==========================================
// 2. 公共组件 (Shared Components)
// ==========================================
const TabBar = ({ tab, setTab }) => {
  const tabs = [
    { id: "home", label: "首页", Icon: IconHome },
    { id: "customers", label: "客户", Icon: IconPerson },
    { id: "ai", label: "AI营销", Icon: IconStar },
    { id: "interact", label: "互动", Icon: IconChat },
    { id: "data", label: "数据", Icon: IconChart },
  ];

  return (
    <div style={{ display: "flex", borderTop: "1px solid #EFEFEF", background: "white", paddingBottom: 8, flexShrink: 0 }}>
      {tabs.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => setTab(id)}
          style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            gap: 3, padding: "8px 0 2px", border: "none", background: "none", cursor: "pointer"
          }}
        >
          <Icon active={tab === id} />
          <span style={{ fontSize: 10, color: tab === id ? ORANGE : "#BBBBBB", fontWeight: tab === id ? 600 : 400 }}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px 4px", width: "100%", boxSizing: "border-box" }}>
    <span style={{ fontSize: 15, fontWeight: 600, color: TEXT_MAIN }}>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="4" width="3" height="8" fill={TEXT_MAIN} /></svg>
      <svg width="16" height="12" viewBox="0 0 20 14"><rect x="1" y="1" width="16" height="12" fill={TEXT_MAIN} /></svg>
    </div>
  </div>
);

// ==========================================
// 3. 页面组件 (Screens)
// ==========================================

// 模拟数据
const customersData = [
  { initial: "张", name: "张小姐", phone: "138****6789", tag: "高价值", tagColor: ORANGE, lastVisit: "2天前" },
  { initial: "李", name: "李先生", phone: "139****1234", tag: "常客", tagColor: "#D4A017", lastVisit: "5天前" },
  { initial: "王", name: "王女士", phone: "186****5678", tag: "沉睡", tagColor: "#AAAAAA", lastVisit: "3个月前" },
  { initial: "陈", name: "陈先生", phone: "135****9012", tag: "高价值", tagColor: ORANGE, lastVisit: "1天前" },
];

// --- 首页 ---
const HomeScreen = ({ setTab, setPage }) => {
  const stats = [
    { label: "今日客流", value: "23", unit: "人" },
    { label: "复购率", value: "68", unit: "%" },
    { label: "新增客户", value: "5", unit: "人" },
    { label: "AI发送", value: "12", unit: "条" },
  ];

  const quickActions = [
    { label: "添加客户", Icon: IconClock, action: () => setTab("customers") },
    { label: "生成文案", Icon: IconBox, action: () => setTab("ai") },
    { label: "预约提醒", Icon: IconCalendar, action: () => setTab("interact") },
  ];

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>智联客来</h1>
      </div>

      {/* 统计卡片 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {stats.map(({ label, value, unit }) => (
          <div key={label} style={{ background: GRAY_BG, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 12, color: TEXT_SUB, marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: TEXT_MAIN }}>
              {value}
              <span style={{ fontSize: 14, fontWeight: 400, color: TEXT_SUB, marginLeft: 2 }}>{unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 待处理提醒 */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_MAIN, marginBottom: 10 }}>待处理事务</div>
        <div
          onClick={() => setPage("customerDetail")}
          style={{
            display: "flex", alignItems: "center", gap: 10, padding: "14px 16px",
            background: "white", borderRadius: 12, border: "1px solid #F0F0F0",
            cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <IconDot />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN }}>3位高价值客户</div>
            <div style={{ fontSize: 12, color: TEXT_SUB, marginTop: 2 }}>超过7天未到店，建议发送关怀</div>
          </div>
          <IconChevron />
        </div>
      </div>

      {/* 快捷操作 */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_MAIN, marginBottom: 10 }}>快捷操作</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {quickActions.map(({ label, Icon, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                background: GRAY_BG, borderRadius: 12, padding: "16px 8px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                border: "none", cursor: "pointer",
              }}
            >
              <Icon />
              <span style={{ fontSize: 12, color: TEXT_MAIN }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 客户列表 ---
const CustomerListScreen = ({ setPage }) => {
  const [filter, setFilter] = useState("全部");
  const filters = ["全部", "高价值", "沉睡"];

  const filtered = filter === "全部" 
    ? customersData 
    : customersData.filter(c => c.tag === filter);

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>客户管理</h1>

      {/* 搜索栏 */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: GRAY_BG, padding: "10px 14px", borderRadius: 10 }}>
        <IconSearch />
        <span style={{ fontSize: 14, color: TEXT_CAPTION }}>搜索客户姓名或手机号</span>
      </div>

      {/* 过滤器 */}
      <div style={{ display: "flex", gap: 8 }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 16px", borderRadius: 20, border: "none", cursor: "pointer",
              background: filter === f ? ORANGE : GRAY_BG,
              color: filter === f ? "white" : TEXT_MAIN,
              fontSize: 13, fontWeight: filter === f ? 600 : 400,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 列表 */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filtered.map((c, i) => (
          <div
            key={c.name}
            onClick={() => setPage("customerDetail")}
            style={{
              padding: "14px 0",
              borderBottom: i < filtered.length - 1 ? "1px solid #EFEFEF" : "none",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 20, background: GRAY_BG,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, fontWeight: 600, color: TEXT_MAIN, flexShrink: 0,
              }}>{c.initial}</div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: TEXT_MAIN }}>{c.name}</div>
                <div style={{ fontSize: 12, color: TEXT_SUB, marginTop: 2 }}>{c.phone}</div>
              </div>

              <div style={{
                background: c.tag === "沉睡" ? GRAY_BG : ORANGE_LIGHT,
                color: c.tagColor, borderRadius: 20, padding: "3px 12px",
                fontSize: 12, fontWeight: 600,
              }}>{c.tag}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
              <span style={{ fontSize: 12, color: TEXT_CAPTION }}>最近到店</span>
              <span style={{ fontSize: 12, color: TEXT_CAPTION }}>{c.lastVisit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 客户详情 ---
const CustomerDetailScreen = ({ setPage }) => {
  const tags = [
    { t: "高价值", c: ORANGE, bg: ORANGE_LIGHT },
    { t: "爱美", c: TEXT_SUB, bg: GRAY_BG },
  ];

  const history = [
    { item: "购买 YSL口红 #416", date: "2024-01-15", price: "¥350" },
    { item: "购买 SK-II神仙水", date: "2024-01-08", price: "¥1,280" },
    { item: "购买 Dior香水", date: "2023-12-28", price: "¥980" },
    { item: "购买雅诗兰黛眼霜", date: "2023-12-15", price: "¥670" },
  ];

  const statsRow = [
    { v: "¥3,280", l: "消费总额" },
    { v: "12次", l: "到店次数" },
    { v: "2天前", l: "最近到店" },
  ];

  return (
    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <button onClick={() => setPage(null)} style={{ background: "none", border: "none", cursor: "pointer", alignSelf: "flex-start", padding: 0 }}>
          <IconBack />
        </button>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>张小姐</h1>
            <div style={{ fontSize: 14, color: TEXT_SUB, marginTop: 4 }}>138****6789</div>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: GRAY_BG }} />
        </div>

        {/* 标签 */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {tags.map(({ t, c, bg }) => (
            <span key={t} style={{ background: bg, color: c, borderRadius: 20, padding: "4px 12px", fontSize: 12 }}>
              {t}
            </span>
          ))}
        </div>

        {/* 核心数据 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, background: GRAY_BG, padding: "12px 0", borderRadius: 12, textAlign: "center" }}>
          {statsRow.map(({ v, l }, i) => (
            <div key={l} style={{ borderRight: i < 2 ? "1px solid #E8E8E8" : "none" }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: TEXT_MAIN }}>{v}</div>
              <div style={{ fontSize: 11, color: TEXT_SUB, marginTop: 3 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* 购买历史 */}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_MAIN, marginBottom: 12 }}>消费记录</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {history.map((r) => (
              <div key={r.date} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 14, color: TEXT_MAIN }}>{r.item}</div>
                  <div style={{ fontSize: 12, color: TEXT_CAPTION, marginTop: 2 }}>{r.date}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN }}>{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部悬浮按钮 */}
      <div style={{ display: "flex", gap: 12, padding: "12px 20px 20px", borderTop: "1px solid #EFEFEF", background: "white" }}>
        <button style={{
          flex: 1, padding: "14px", borderRadius: 12, border: `1.5px solid ${ORANGE}`,
          background: "white", color: ORANGE, fontSize: 15, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        }}>
          <IconPhone />拨打电话
        </button>
        <button style={{
          flex: 1, padding: "14px", borderRadius: 12, border: "none",
          background: ORANGE, color: "white", fontSize: 15, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        }}>
          <IconMsg />发送消息
        </button>
      </div>
    </div>
  );
};

// --- AI 文案生成 ---
const AIScreen = () => {
  const [style, setStyle] = useState("温情");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const styles = ["温情", "促销", "趣味"];
  const examples = {
    温情: "亲爱的张小姐，春日里想起您，我们新到了一款草莓蛋糕，甜甜的口感就像您每次到店时带来的温柔...",
    促销: "【限时福利】草莓蛋糕今日新鲜上市！买2送1，今天到店即享8折优惠！数量有限，先到先得！",
    趣味: "蛋糕界出新卷王啦！我们的草莓蛋糕强势回归，甜度拉满、颜值在线，已经有好多老板娘在排队啦~",
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 1200));
    setResult(examples[style] || "这是为您量身定制的 AI 文案。");
    setLoading(false);
  };

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>AI 营销文案</h1>
        <p style={{ fontSize: 13, color: TEXT_SUB, margin: "6px 0 0" }}>告诉 AI 你想卖什么，一键生成创意文案</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN }}>输入营销主题</div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例如:春季新款口红、护肤品促销、老客户回访..."
          style={{
            width: "100%", minHeight: 100, background: GRAY_BG, border: "none",
            borderRadius: 12, padding: "12px 14px", fontSize: 14, color: TEXT_MAIN,
            resize: "none", outline: "none", boxSizing: "border-box",
            lineHeight: 1.6,
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN }}>选择文案风格</div>
        <div style={{ display: "flex", gap: 10 }}>
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              style={{
                flex: 1, padding: "10px 0", borderRadius: 10, border: "none",
                background: style === s ? ORANGE : GRAY_BG,
                color: style === s ? "white" : TEXT_MAIN,
                fontSize: 14, fontWeight: style === s ? 600 : 400, cursor: "pointer",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!input.trim() || loading}
        style={{
          width: "100%", padding: "14px", borderRadius: 12, border: "none",
          background: input.trim() && !loading ? ORANGE : "#E0E0E0",
          color: input.trim() && !loading ? "white" : "#AAAAAA",
          fontSize: 15, fontWeight: 600, cursor: input.trim() && !loading ? "pointer" : "default",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          transition: "background 0.2s",
        }}
      >
        <IconSparkle />
        {loading ? "AI 生成中..." : "AI 生成文案"}
      </button>

      {result && (
        <div style={{ background: ORANGE_LIGHT, borderRadius: 14, padding: "16px", marginTop: 4 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 600, marginBottom: 8 }}>生成结果 ({style})</div>
          <p style={{ fontSize: 14, color: TEXT_MAIN, lineHeight: 1.7, margin: 0 }}>{result}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button
              onClick={() => navigator.clipboard?.writeText(result)}
              style={{
                flex: 1, padding: "10px", borderRadius: 10, border: `1px solid ${ORANGE}`,
                background: "white", color: ORANGE, fontSize: 13, fontWeight: 500, cursor: "pointer",
              }}
            >
              复制文案
            </button>
            <button style={{
              flex: 1, padding: "10px", borderRadius: 10, border: "none",
              background: ORANGE, color: "white", fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>
              一键发送
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 智能互动 (自动化规则) ---
const InteractScreen = () => {
  const [rules, setRules] = useState([
    { id: 1, name: "生日祝福", desc: "客户生日当天自动发送祝福", on: true },
    { id: 2, name: "沉睡唤醒", desc: "7天未到店自动发送关怀消息", on: true },
    { id: 3, name: "复购提醒", desc: "产品使用周期到期前3天提醒", on: false },
    { id: 4, name: "高价值关怀", desc: "消费超过3000元自动升级为VIP", on: true },
    { id: 5, name: "新品推荐", desc: "有新品到货自动推送给相关标签客户", on: false },
  ]);

  const toggle = (id) =>
    setRules((rs) => rs.map((r) => (r.id === id ? { ...r, on: !r.on } : r)));

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>智能互动</h1>
        <p style={{ fontSize: 13, color: TEXT_SUB, margin: "6px 0 0" }}>设置自动化营销规则，解放双手</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {rules.map((r, i) => (
          <div key={r.id} style={{ padding: "16px 0", borderBottom: i < rules.length - 1 ? "1px solid #EFEFEF" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: 1, paddingRight: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: TEXT_MAIN }}>{r.name}</div>
              <div style={{ fontSize: 13, color: TEXT_SUB, marginTop: 3 }}>{r.desc}</div>
              {r.on && <div style={{ fontSize: 12, color: GREEN, marginTop: 6, fontWeight: 500 }}>● 已激活运行中</div>}
            </div>

            {/* 开关组件 */}
            <div
              onClick={() => toggle(r.id)}
              style={{
                width: 48, height: 28, borderRadius: 14, cursor: "pointer",
                background: r.on ? ORANGE : "#DDDDDD",
                position: "relative", transition: "background 0.2s", flexShrink: 0,
              }}
            >
              <div style={{
                position: "absolute", top: 3, left: r.on ? 23 : 3, width: 22, height: 22,
                borderRadius: 11, background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)", transition: "left 0.2s",
              }} />
            </div>
          </div>
        ))}
      </div>

      <button style={{
        padding: "14px", borderRadius: 12, border: `1.5px dashed ${ORANGE}`,
        background: "white", color: ORANGE, fontSize: 14, fontWeight: 500, cursor: "pointer",
        marginTop: 8,
      }}>
        + 新增规则
      </button>
    </div>
  );
};

// --- 数据看板 ---
const DataScreen = () => {
  const barData = [18, 25, 22, 31, 35, 42, 38];
  const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const maxBar = Math.max(...barData);

  const kpis = [
    { label: "复购率", value: "68%", trend: "+5%", up: true },
    { label: "客单价", value: "¥273", trend: "+12%", up: true },
    { label: "流失率", value: "8%", trend: "-3%", up: false },
  ];

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 24 }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: TEXT_MAIN, margin: 0 }}>数据大屏</h1>

      {/* 柱状图 */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN, marginBottom: 12 }}>本周客流量趋势</div>
        <div style={{ background: GRAY_BG, borderRadius: 14, padding: "20px 14px 14px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
            {barData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
                <div style={{
                  width: "100%", background: ORANGE, borderRadius: "4px 4px 0 0",
                  height: `${(v / maxBar) * 100}%`, minHeight: 4,
                }} />
                <span style={{ fontSize: 10, color: TEXT_CAPTION }}>{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KPI 数据指标 */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_MAIN, marginBottom: 12 }}>核心指标</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {kpis.map(({ label, value, trend, up }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: GRAY_BG, padding: "14px 16px", borderRadius: 12 }}>
              <div>
                <div style={{ fontSize: 12, color: TEXT_SUB }}>{label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: TEXT_MAIN, marginTop: 4 }}>{value}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: up ? GREEN : "#FF3B30" }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI 洞察建议 */}
      <div style={{ background: ORANGE_LIGHT, borderRadius: 14, padding: 16, display: "flex", gap: 10 }}>
        <div style={{ flexShrink: 0, marginTop: 1 }}><IconBulb /></div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: ORANGE, marginBottom: 4 }}>AI 数据洞察</div>
          <p style={{ fontSize: 13, color: TEXT_MAIN, lineHeight: 1.6, margin: 0 }}>
            周末客流量明显增加，建议在周五下午推送促销活动。同时，有 3 位高价值客户超过 7 天未到店，系统已为您自动准备好关怀文案。
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. 主应用程序入口 (Main App)
// ==========================================
export default function App() {
  const [tab, setTab] = useState("home");
  const [page, setPage] = useState(null); // 可选值: null, "customerDetail"

  const handleSetTab = (t) => {
    setPage(null);
    setTab(t);
  };

  const renderScreen = () => {
    if (page === "customerDetail") {
      return <CustomerDetailScreen setPage={setPage} />;
    }
    switch (tab) {
      case "home":
        return <HomeScreen setTab={handleSetTab} setPage={setPage} />;
      case "customers":
        return <CustomerListScreen setPage={setPage} />;
      case "ai":
        return <AIScreen />;
      case "interact":
        return <InteractScreen />;
      case "data":
        return <DataScreen />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#E8E8E8",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "-apple-system, 'PingFang SC', 'Helvetica Neue', sans-serif",
    }}>
      {/* 手机外壳包装容器 */}
      <div style={{
        width: 375, height: 812, background: "white", borderRadius: 48,
        overflow: "hidden", display: "flex", flexDirection: "column",
        boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 0 0 10px #1C1C1E",
        position: "relative",
      }}>
        {/* 顶部状态栏 */}
        <StatusBar />

        {/* 核心内容渲染区域 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {renderScreen()}
        </div>

        {/* 底部导航栏 */}
        <TabBar tab={page === "customerDetail" ? null : tab} setTab={handleSetTab} />
      </div>
    </div>
  );
}