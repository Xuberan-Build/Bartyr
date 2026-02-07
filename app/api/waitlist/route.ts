import { getSupabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const body = await request.json();
    const { email, first_name, location, growing_status, beta_tester, referral_source, notes } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("waitlist").insert([
      {
        email: email.toLowerCase().trim(),
        first_name: first_name?.trim() || null,
        location: location?.trim() || null,
        growing_status: growing_status || null,
        beta_tester: beta_tester ?? false,
        referral_source: referral_source || null,
        notes: notes?.trim() || null,
      },
    ]).select();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "This email is already on the waitlist!" }, { status: 409 });
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ message: "You're on the list!", data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
