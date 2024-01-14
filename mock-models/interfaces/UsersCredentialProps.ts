interface UsersProps {
  id: number
  username: string
  email: string
  password: string
}

export interface UsersCredentialProps {
  users: UsersProps[]
}
