-- Create early access requests table
CREATE TABLE IF NOT EXISTS public.early_access_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  shop_name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.early_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policy allowing public inserts
CREATE POLICY "Allow public insert to early access requests" 
ON public.early_access_requests 
FOR INSERT 
WITH CHECK (true);
