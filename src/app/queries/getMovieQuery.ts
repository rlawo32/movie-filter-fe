import { TypedSupabaseClient } from "../supabase/supabase" 

export function getRecommendMovieListQuery(client:TypedSupabaseClient, mlId:string, uiId:string|null|undefined) {
  return client.rpc("get_movie_list", { movie_log_id: mlId, user_id: uiId || undefined});
}