import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Currently validates and logs.
 * TODO: forward to your CRM / email provider (HubSpot, Resend, SES, etc.)
 * and route by `route` (sales | partnerships | support | media | careers | offices).
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, route } = body as Record<string, string | undefined>;
  if (!name?.trim() || !message?.trim() || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  console.log("[contact]", { route, name, email, company: body.company });
  return NextResponse.json({ ok: true });
}
