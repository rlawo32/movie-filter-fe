import { TypedSupabaseClient } from "../supabase/supabase" 

export function getOptionAllQuery(client:TypedSupabaseClient) {
  return client
    .from("mf_option")
    .select("option_id, option_type, option_title")
}

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