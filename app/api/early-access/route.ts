import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, shop, email, website } = body;

    if (!name || !shop || !email) {
      return NextResponse.json(
        { error: "Name, shop name, and email are required fields." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tllsnaywckzaurjuohoo.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

    if (!supabaseKey) {
      return NextResponse.json(
        { error: "Supabase API key is not configured yet in environment variables." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("early_access_requests").insert([
      {
        name,
        shop_name: shop,
        email,
        website: website || null,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save early access request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Early access request submitted successfully!" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Submission handler error:", err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
