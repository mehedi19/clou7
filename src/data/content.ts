/**
 * All marketing copy lives here (sourced from the Cloud 7 Website Content Blueprint).
 * Edit text in this file — components stay presentational.
 */
import type { IconName } from "@/components/Icon";

export const site = {
  name: "Cloud 7",
  legalName: "Cloud 7 Limited",
  tagline: "Powering Global Digital Commerce in Bangladesh",
  description:
    "Cloud 7 enables international digital platforms to launch, collect payments, stay compliant, settle funds and scale in Bangladesh through one trusted integration.",
};

export const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Insights", href: "#insights" },
];

export const hero = {
  eyebrow: "Digital Commerce Infrastructure",
  titleBefore: "Powering Global Digital Commerce in",
  titleAccent: "Bangladesh",
  sub: "Cloud 7 enables international digital platforms to launch, collect payments, remain compliant, settle funds, and scale in Bangladesh through a single trusted integration. From Direct Carrier Billing and Mobile Financial Services to cards, banking, tax compliance, and local operations — we simplify market entry.",
  ctas: {
    primary: { label: "Become a Partner", href: "#contact" },
    secondary: { label: "Schedule a Meeting", href: "#contact" },
    tertiary: { label: "Contact Sales", href: "#contact" },
  },
  channels: [
    { label: "Carrier Billing", icon: "carrier" as IconName },
    { label: "Mobile Wallets", icon: "wallet" as IconName },
    { label: "Cards", icon: "card" as IconName },
    { label: "Internet Banking", icon: "bank" as IconName },
  ],
};

/** Merchant hubs drawn on the hero map. lon/lat → projected in WorldMap.tsx */
export const mapNodes = [
  { name: "San Francisco", lon: -122.4, lat: 37.8 },
  { name: "New York", lon: -74, lat: 40.7 },
  { name: "São Paulo", lon: -46.6, lat: -23.5 },
  { name: "London", lon: -0.1, lat: 51.5 },
  { name: "Stockholm", lon: 18, lat: 59.3 },
  { name: "Dubai", lon: 55.3, lat: 25.2 },
  { name: "Singapore", lon: 103.8, lat: 1.3 },
  { name: "Tokyo", lon: 139.7, lat: 35.7 },
  { name: "Sydney", lon: 151.2, lat: -33.9 },
];
export const dhaka = { name: "Dhaka", lon: 90.4, lat: 23.8 };

/**
 * Logos: display only where partner permission is confirmed.
 * Until then we render neutral text wordmarks. To use logos, add `logo: "/logos/x.svg"`.
 */
export const trusted = {
  eyebrow: "Trusted by global platforms & local networks",
  merchants: ["Spotify", "Sony LIV", "Boku", "Starlink", "dLocal", "BeMobi", "Tpay", "Digital Virgo", "Hungama"],
  mobile: ["Grameenphone", "Banglalink", "Robi", "bKash", "Nagad", "Visa", "Mastercard", "UnionPay"],
  banks: 6, // number of placeholder bank tiles — replace with real partner logos
};

export const about = {
  eyebrow: "About Cloud 7",
  title: "Connecting global digital businesses with Bangladesh",
  body: [
    "Cloud 7 is a leading digital payment enablement company helping international digital platforms establish and scale their business in Bangladesh.",
    "We bridge the gap between global merchants and local consumers by delivering secure payment collection, carrier billing, mobile wallet integration, settlement, compliance, customer operations, and regulatory support — all through one unified platform.",
  ],
  quote: "Our mission is simple: enable global digital services to succeed locally.",
  facts: [
    { value: "15+", label: "Years serving Bangladesh's digital & payments ecosystem" },
    { value: "3", label: "Mobile operators — Grameenphone, Robi, Banglalink" },
    { value: "4", label: "Payment channels behind one integration" },
    { value: "PCI DSS", label: "Certified, with 24/7 monitoring" },
  ],
};

export type Capability = {
  id: string;
  icon: IconName;
  title: string;
  short: string;
  body: string;
  metaLabel?: string;
  meta?: string[];
};

export const capabilities: Capability[] = [
  {
    id: "dcb",
    icon: "carrier",
    title: "Direct Carrier Billing",
    short: "Pay with mobile balance",
    body: "Enable consumers to purchase digital services using their mobile balance — no card, no wallet required. The most inclusive payment method in Bangladesh.",
    metaLabel: "Supported operators",
    meta: ["Grameenphone", "Robi", "Banglalink"],
  },
  {
    id: "mfs",
    icon: "wallet",
    title: "Mobile Financial Services",
    short: "Wallets people already use",
    body: "Accept payments through Bangladesh's leading mobile wallets — the country's dominant digital payment behaviour.",
    metaLabel: "Channels",
    meta: ["bKash", "Nagad", "Rocket"],
  },
  {
    id: "cards",
    icon: "card",
    title: "Card Acceptance",
    short: "Local & international cards",
    body: "Accept international and local card payments through a fully compliant gateway.",
    metaLabel: "Networks",
    meta: ["Visa", "Mastercard", "UnionPay", "American Express"],
  },
  {
    id: "banking",
    icon: "bank",
    title: "Internet Banking",
    short: "Bank-grade collections",
    body: "Direct integration with bank APIs for instant payments and large-value fund collection from consumer and enterprise accounts.",
    metaLabel: "Best for",
    meta: ["Instant payments", "Large-value collection", "Enterprise accounts"],
  },
  {
    id: "settlement",
    icon: "settle",
    title: "Merchant Settlement",
    short: "Cross-border, multi-currency",
    body: "Cross-border settlement with multi-currency support, automated reconciliation, and reporting delivered on your preferred cadence.",
    metaLabel: "Includes",
    meta: ["Multi-currency", "Auto reconciliation", "Custom cadence"],
  },
  {
    id: "compliance",
    icon: "compliance",
    title: "Compliance & Regulatory",
    short: "Audit-ready, end to end",
    body: "End-to-end regulatory coverage — KYC, AML, Bangladesh Bank compliance, VAT, tax, and audit-ready settlement reports.",
    metaLabel: "Coverage",
    meta: ["KYC", "AML", "Bangladesh Bank", "VAT & tax"],
  },
];

export const industries: { icon: IconName; title: string }[] = [
  { icon: "play", title: "OTT & Video Streaming" },
  { icon: "gamepad", title: "Gaming" },
  { icon: "sparkles", title: "Artificial Intelligence Platforms" },
  { icon: "cloud", title: "Cloud & SaaS" },
  { icon: "grid", title: "App Stores & Digital Marketplaces" },
  { icon: "cap", title: "Education & EdTech" },
  { icon: "music", title: "Music & Audio Streaming" },
  { icon: "file", title: "Digital Content & Publishing" },
  { icon: "tower", title: "Telecommunications" },
  { icon: "building", title: "Government Digital Services" },
  { icon: "briefcase", title: "Enterprise Software" },
  { icon: "repeat", title: "Subscription Commerce" },
];

export const bangladesh = {
  eyebrow: "Why Bangladesh",
  title: "A digital-first market of 170 million people",
  cta: { label: "Expand into Bangladesh with one integration", href: "#contact" },
  counters: [
    { value: 170, suffix: "M+", label: "Population" },
    { value: 120, suffix: "M+", label: "Internet users" },
    { value: 210, suffix: "M+", label: "Mobile connections" },
  ],
  tiles: [
    { icon: "trend" as IconName, big: "Fast-growing", label: "Digital economy" },
    { icon: "carrier" as IconName, big: "High", label: "Smartphone adoption" },
    { icon: "wallet" as IconName, big: "Fastest-growing", label: "Mobile payments market in South Asia" },
    { icon: "users" as IconName, big: "Large", label: "Youth population" },
    { icon: "repeat" as IconName, big: "Rapidly expanding", label: "Subscription economy" },
  ],
};

export const platform = {
  eyebrow: "Our Platform",
  title: "One integration. Every channel. Fully settled.",
  sub: "Follow a payment from a global merchant, through Cloud 7, to a consumer in Bangladesh — and back as settled funds.",
  stages: [
    { id: "merchant", icon: "globe" as IconName, title: "Global Merchant", text: "Your app or service calls one API." },
    { id: "platform", icon: "cloud" as IconName, title: "Cloud 7 Platform", text: "Routing, risk scoring and orchestration in real time." },
    { id: "channels", icon: "plug" as IconName, title: "Payment Channels", text: "Carrier Billing · MFS · Cards · Internet Banking" },
    { id: "settlement", icon: "settle" as IconName, title: "Settlement Engine", text: "Reconciled, reported and paid out on your cadence." },
    { id: "consumer", icon: "carrier" as IconName, title: "Consumer", text: "Pays the way they already do." },
  ],
  channelList: ["Carrier Billing", "MFS", "Cards", "Internet Banking"],
  capabilities: [
    { icon: "bolt" as IconName, title: "Real-time transaction processing" },
    { icon: "shield" as IconName, title: "Fraud detection and risk scoring" },
    { icon: "chart" as IconName, title: "Analytics and business intelligence" },
    { icon: "settle" as IconName, title: "Automated settlement" },
    { icon: "undo" as IconName, title: "Refunds and dispute management" },
    { icon: "plug" as IconName, title: "Webhook APIs and event streaming" },
    { icon: "file" as IconName, title: "Comprehensive reporting" },
    { icon: "grid" as IconName, title: "Unified merchant dashboard" },
  ],
};

export const whyChoose = {
  eyebrow: "Why Cloud 7",
  title: "The local partner global platforms rely on",
  items: [
    { icon: "pin" as IconName, title: "Local Market Expertise", text: "15+ years serving Bangladesh's digital and payments ecosystem." },
    { icon: "plug" as IconName, title: "One Integration", text: "Connect once. Reach every payment channel in the country." },
    { icon: "rocket" as IconName, title: "Faster Market Entry", text: "Launch in weeks, not months — with a partner who has done it before." },
    { icon: "compliance" as IconName, title: "Regulatory Expertise", text: "Bangladesh Bank, BTRC, VAT, and tax compliance handled end-to-end." },
    { icon: "lock" as IconName, title: "Enterprise Security", text: "PCI DSS certified, end-to-end encryption, 24/7 monitoring, high availability." },
    { icon: "headset" as IconName, title: "Dedicated Support", text: "Named technical, commercial, and operational contacts throughout the partnership." },
  ],
};

export const journey = {
  eyebrow: "Global Merchant Journey",
  title: "From first conversation to live revenue",
  steps: [
    { title: "Discovery", text: "We map your product, audience and goals for Bangladesh and recommend the right channel mix." },
    { title: "Commercial Agreement", text: "Pricing, revenue share and settlement terms agreed with a named commercial contact." },
    { title: "Technical Integration", text: "Connect once to the Cloud 7 API using SDKs, sandbox credentials and webhooks." },
    { title: "Testing & Certification", text: "End-to-end test flows across operators, wallets, cards and banks before launch." },
    { title: "Go-Live", text: "Production launch with monitoring and operational support on hand from day one." },
    { title: "Settlement", text: "Automated reconciliation and cross-border payout in your preferred currency and cadence." },
    { title: "Business Growth", text: "Analytics, optimisation and new channels as your subscriber base scales." },
  ],
};

export const solutions = {
  eyebrow: "Solutions",
  title: "Built for how your industry earns in Bangladesh",
  items: [
    {
      id: "ott",
      icon: "play" as IconName,
      title: "Cloud 7 for OTT & Streaming",
      challenges: ["Low card penetration among subscribers", "Churn from failed or declined renewals", "Multiple operator integrations"],
      solutions: ["Direct Carrier Billing across all three MNOs", "Wallet and card fallbacks", "Automated renewal & retry logic"],
      benefits: ["Wider subscriber reach", "Higher conversion at checkout", "Lower customer acquisition cost"],
    },
    {
      id: "ai",
      icon: "sparkles" as IconName,
      title: "Cloud 7 for AI Platforms",
      challenges: ["No local way to pay for AI subscriptions", "Currency and cross-border friction", "Regulatory uncertainty"],
      solutions: ["Local payment channels behind one API", "Multi-currency settlement", "Compliance handled by Cloud 7"],
      benefits: ["Monetise a new, young user base", "Predictable payouts", "Faster launch"],
    },
    {
      id: "gaming",
      icon: "gamepad" as IconName,
      title: "Cloud 7 for Gaming",
      challenges: ["Players without cards", "Small-ticket, high-frequency purchases", "Fraud and chargeback exposure"],
      solutions: ["Instant mobile-balance and wallet payments", "Risk scoring on every transaction", "Refund & dispute tooling"],
      benefits: ["More paying players", "Lower fraud losses", "Frictionless top-ups"],
    },
    {
      id: "saas",
      icon: "cloud" as IconName,
      title: "Cloud 7 for SaaS",
      challenges: ["Enterprise invoicing across banks", "Local tax and VAT requirements", "Reconciliation overhead"],
      solutions: ["Internet banking for large-value collection", "VAT and tax compliance", "Automated reconciliation"],
      benefits: ["Faster collections", "Audit-ready reporting", "Less finance admin"],
    },
    {
      id: "media",
      icon: "file" as IconName,
      title: "Cloud 7 for Digital Media",
      challenges: ["Micro-payments for content", "Fragmented payment preferences", "Limited local analytics"],
      solutions: ["Pay-per-content & subscription billing", "Unified channels", "Merchant dashboard & reporting"],
      benefits: ["New revenue from local audiences", "Clear performance insight", "Simple operations"],
    },
    {
      id: "telecom",
      icon: "tower" as IconName,
      title: "Cloud 7 for Telecom",
      challenges: ["Launching partner services at pace", "Billing integrations per partner", "Settlement transparency"],
      solutions: ["Standardised carrier-billing flows", "Partner onboarding tooling", "Automated settlement reports"],
      benefits: ["More digital services on-network", "Shorter partner onboarding", "Trusted reporting"],
    },
    {
      id: "government",
      icon: "building" as IconName,
      title: "Cloud 7 for Government",
      challenges: ["Citizens paying across many channels", "Security and audit requirements", "Reconciliation across agencies"],
      solutions: ["Single collection layer for every channel", "PCI DSS-grade security", "Audit-ready reports"],
      benefits: ["Broader citizen access", "Transparent records", "Lower operating cost"],
    },
    {
      id: "education",
      icon: "cap" as IconName,
      title: "Cloud 7 for Education",
      challenges: ["Parents and students without cards", "Seasonal payment peaks", "Manual fee reconciliation"],
      solutions: ["Mobile balance & wallet payments", "High-availability processing", "Automated reconciliation"],
      benefits: ["More enrolments completed", "Reliable at peak load", "Time saved for admin teams"],
    },
  ],
};

export const caseStudy = {
  eyebrow: "Success Stories",
  title: "How an international OTT platform went live in six weeks",
  client: "International OTT Platform",
  challenge: "No reliable local payment method to reach subscription customers in Bangladesh.",
  solution: "Direct Carrier Billing across all three MNOs, integrated in six weeks.",
  result: "Subscription revenue grew, conversion improved, customer acquisition cost fell significantly.",
  highlights: [
    { value: "6", label: "weeks to integrate" },
    { value: "3", label: "mobile operators live" },
  ],
};

export const insights = {
  eyebrow: "Insights",
  title: "Thought leadership on Bangladesh's digital economy",
  articles: [
    { title: "How to Enter the Bangladesh Digital Market", tag: "Guide", icon: "rocket" as IconName },
    { title: "Direct Carrier Billing Explained", tag: "Explainer", icon: "carrier" as IconName },
    { title: "The Bangladesh Payment Landscape", tag: "Report", icon: "bank" as IconName },
    { title: "Mobile Payments in Bangladesh — Annual Report", tag: "Report", icon: "wallet" as IconName },
    { title: "The Rise of the Subscription Economy", tag: "Insight", icon: "repeat" as IconName },
    { title: "Bangladesh OTT Market Outlook", tag: "Outlook", icon: "play" as IconName },
    { title: "Monetising AI Subscriptions in Emerging Markets", tag: "Insight", icon: "sparkles" as IconName },
    { title: "Bangladesh Gaming Market Report", tag: "Report", icon: "gamepad" as IconName },
    { title: "Bangladesh Digital Economy — A Global Merchant's Guide", tag: "Guide", icon: "globe" as IconName },
  ],
};

export const developers = {
  eyebrow: "Developer Portal",
  title: "Built by engineers, for engineers",
  sub: "Sandbox, SDKs and clear docs so your team can go from API key to live payments quickly.",
  links: [
    { icon: "book" as IconName, label: "API Documentation" },
    { icon: "flask" as IconName, label: "Sandbox Environment" },
    { icon: "code" as IconName, label: "SDKs (JavaScript, Python, PHP, Java)" },
    { icon: "plug" as IconName, label: "Webhooks & Event Reference" },
    { icon: "lock" as IconName, label: "Authentication & Security Guide" },
    { icon: "list" as IconName, label: "Step-by-step Integration Guide" },
    { icon: "send" as IconName, label: "Postman Collection" },
    { icon: "activity" as IconName, label: "Live System Status Page" },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's bring your service to Bangladesh",
  sub: "Choose the team you need and we'll route your message to the right people on the first click.",
  routes: [
    { id: "sales", icon: "briefcase" as IconName, title: "Sales & Business Development", text: "Pricing, scope and commercial terms." },
    { id: "partnerships", icon: "users" as IconName, title: "Global Partnerships", text: "Market-entry and strategic partnerships." },
    { id: "support", icon: "headset" as IconName, title: "Technical Support", text: "Integration help and incident support." },
    { id: "media", icon: "file" as IconName, title: "Media & Press", text: "Interviews, briefings and assets." },
    { id: "careers", icon: "rocket" as IconName, title: "Careers", text: "Join the Cloud 7 team." },
    { id: "offices", icon: "pin" as IconName, title: "Office Locations", text: "Find us in Dhaka and beyond." },
  ],
};

export const footer = {
  columns: [
    { title: "Solutions", links: solutions.items.map((s) => s.title.replace("Cloud 7 for ", "")) },
    { title: "Industries", links: ["OTT & Streaming", "Gaming", "AI Platforms", "SaaS", "Education", "Government"] },
    { title: "Resources", links: ["Insights", "Case Studies", "Reports", "Guides"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    { title: "Partners", links: ["Become a Partner", "Operators", "Wallets & Banks", "Global Merchants"] },
    { title: "Developers", links: ["API Docs", "Sandbox", "SDKs", "Status"] },
  ],
  legal: ["Privacy Policy", "Terms of Service", "Security", "Regulatory Disclosures"],
  social: ["LinkedIn", "X", "YouTube"],
};
