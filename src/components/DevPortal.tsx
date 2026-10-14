"use client";

import { useState } from "react";
import { developers } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

// NOTE: endpoint + package names are illustrative placeholders. Replace with real values.
const SNIPPETS = {
  JavaScript: `import { Cloud7 } from "@cloud7/sdk";

const cloud7 = new Cloud7(process.env.CLOUD7_API_KEY);

const payment = await cloud7.payments.create({
  amount: 199,
  currency: "BDT",
  channel: "dcb", // dcb | mfs | card | bank
  customer: { msisdn: "+8801XXXXXXXXX" },
  returnUrl: "https://example.com/thanks",
});

console.log(payment.status); // "pending_confirmation"`,
  Python: `from cloud7 import Cloud7

client = Cloud7(api_key=os.environ["CLOUD7_API_KEY"])

payment = client.payments.create(
    amount=199,
    currency="BDT",
    channel="dcb",  # dcb | mfs | card | bank
    customer={"msisdn": "+8801XXXXXXXXX"},
    return_url="https://example.com/thanks",
)

print(payment.status)  # "pending_confirmation"`,
  PHP: `<?php
$cloud7 = new \\Cloud7\\Client(getenv('CLOUD7_API_KEY'));

$payment = $cloud7->payments->create([
    'amount'    => 199,
    'currency'  => 'BDT',
    'channel'   => 'dcb', // dcb | mfs | card | bank
    'customer'  => ['msisdn' => '+8801XXXXXXXXX'],
    'returnUrl' => 'https://example.com/thanks',
]);

echo $payment->status; // pending_confirmation`,
  Java: `Cloud7 cloud7 = new Cloud7(System.getenv("CLOUD7_API_KEY"));

Payment payment = cloud7.payments().create(
    PaymentRequest.builder()
        .amount(199)
        .currency("BDT")
        .channel("dcb") // dcb | mfs | card | bank
        .customerMsisdn("+8801XXXXXXXXX")
        .returnUrl("https://example.com/thanks")
        .build());

System.out.println(payment.getStatus()); // pending_confirmation`,
} as const;

type Lang = keyof typeof SNIPPETS;

export function DevPortal() {
  const [lang, setLang] = useState<Lang>("JavaScript");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[lang]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section id="developers" className="section dev">
      <div className="container dev__grid">
        <Reveal>
          <SectionHead eyebrow={developers.eyebrow} title={developers.title} sub={developers.sub} light />
          <ul className="dev__links">
            {developers.links.map((l) => (
              <li key={l.label}>
                <a href="#developers">
                  <Icon name={l.icon} size={18} />
                  {l.label}
                  <Icon name="arrowUpRight" size={14} className="dev__go" />
                </a>
              </li>
            ))}
          </ul>
          <p className="status" role="status">
            <span className="status__dot" /> All systems operational
          </p>
        </Reveal>

        <Reveal delay={120} className="code">
          <div className="code__bar">
            <span className="code__lights" aria-hidden="true"><i /><i /><i /></span>
            <div className="code__tabs" role="tablist" aria-label="SDK language">
              {(Object.keys(SNIPPETS) as Lang[]).map((l) => (
                <button key={l} role="tab" aria-selected={l === lang} className={l === lang ? "is-active" : ""} onClick={() => setLang(l)}>
                  {l}
                </button>
              ))}
            </div>
            <button className="code__copy" onClick={copy} aria-label="Copy code">
              <Icon name={copied ? "check" : "copy"} size={16} />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="code__body"><code>{SNIPPETS[lang]}</code></pre>
        </Reveal>
      </div>
    </section>
  );
}
