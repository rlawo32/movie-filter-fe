import { TypedSupabaseClient } from "../supabase/supabase" 

export function getOptionPersonnelQuery(client:TypedSupabaseClient) {
  return client
    .from("mf_option")
    .select("option_title")
    .eq("option_type", "P")
}

export function getOptionMotionQuery(client:TypedSupabaseClient) {
  return client
    .from("mf_option")
    .select("option_title")
    .eq("option_type", "M")
}

export function getOptionGenreQuery(client:TypedSupabaseClient) {
  return client
    .from("mf_option")
    .select("option_title")
    .eq("option_type", "G")
}