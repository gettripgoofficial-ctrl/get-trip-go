import { NextRequest } from "next/server";
import crypto from "crypto";

function expectedToken() {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  return crypto.createHash("sha256").update(secret).digest("hex");
}

export function isAdminRequest(req: NextRequest): boolean {
  const cookie = req.cookies.get("admin_session")?.value;
  if (!cookie) return false;
  return cookie === expectedToken();
}
