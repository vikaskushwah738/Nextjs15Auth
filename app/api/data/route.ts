import { auth } from "@/lib/auth"
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session =await auth();
    if (!session) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
    return NextResponse.json({
      message: "This is a protected API route",
     session
    });
  } catch (error) {
    console.error("Edge Function error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

