import { Session } from "@supabase/auth-helpers-nextjs"

export interface UserSession {
  session: Session | null
}

interface Country {
  type: string
  value: string
}

interface Countries {
  id: Country
  name: string
  iso2: string
  iso3: string
  local_name: string
  continent: string
}

interface UserProfile {
  id: string
  first_name: string
  last_name: string
  country: Country
  countries: Countries
}

export type ProfileState = UserProfile
