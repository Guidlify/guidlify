import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Database } from "@/types/supabase"

// This needs to export a function, as the headers and cookies are not populated with values until the Server Component is requesting data.
export const supabaseServer = () =>
  createServerComponentClient<Database>({ cookies })
