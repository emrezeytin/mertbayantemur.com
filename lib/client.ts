import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_API;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
