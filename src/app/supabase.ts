import { createClient } from '@supabase/supabase-js';

// Ensure your environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);