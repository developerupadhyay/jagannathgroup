import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT 1 as connected");
    return NextResponse.json({ 
      success: true, 
      message: "Database connected successfully!",
      data: rows 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Database connection failed",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
