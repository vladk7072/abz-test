export interface UsersType {
  success: boolean
  page: number
  total_pages: number
  total_users: number
  count: number
  links: LinksType
  users: UserType[]
}

export interface LinksType {
  next_url: string
  prev_url: any
}

export interface UserType {
  id: string
  name: string
  email: string
  phone: string
  position: string
  position_id: string
  registration_timestamp: number
  photo: string
}
