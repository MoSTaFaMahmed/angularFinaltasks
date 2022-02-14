export interface User {
  fullName: string
  email: string
  phone: string[]
  password: string
  validatePasswoed: string
  address: {
    city: string
    postalCode: string
    street: string
  }
}
