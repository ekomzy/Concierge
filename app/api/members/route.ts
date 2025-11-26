import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type Member = {
  fullName: string;
  email: string;
  phone?: string;
  membershipType?: string;
  notes?: string;
  createdAt: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "members.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !body.fullName || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const newMember: Member = {
      fullName: String(body.fullName).trim(),
      email: String(body.email).trim(),
      phone: body.phone ? String(body.phone).trim() : "",
      membershipType: body.membershipType
        ? String(body.membershipType)
        : "standard",
      notes: body.notes ? String(body.notes) : "",
      createdAt: new Date().toISOString(),
    };

    // ensure data directory/file exists
    try {
      await fs.access(DATA_PATH);
    } catch {
      // create directory and file if missing
      const dir = path.dirname(DATA_PATH);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(DATA_PATH, "[]", "utf8");
    }

    const current = await fs.readFile(DATA_PATH, "utf8");
    let arr: any[] = [];
    try {
      arr = JSON.parse(current || "[]");
      if (!Array.isArray(arr)) arr = [];
    } catch {
      arr = [];
    }

    arr.push(newMember);
    await fs.writeFile(DATA_PATH, JSON.stringify(arr, null, 2), "utf8");

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
