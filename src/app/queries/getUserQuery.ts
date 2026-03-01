import { TypedSupabaseClient } from "../supabase/supabase" 

export function getWishlist(client:TypedSupabaseClient, mlId:string) {
  return client.rpc("get_movie_list", { movie_log_id: mlId});
}