-- SQL Migration for Early Access Requests Table in Supabase
CREATE TABLE IF NOT EXISTS public.early_access_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  shop_name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Row Level Security (RLS) Policy
ALTER TABLE public.early_access_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for early access submissions
CREATE POLICY "Allow public insert to early access requests" 
ON public.early_access_requests 
FOR INSERT 
WITH CHECK (true);
