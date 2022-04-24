type UseAuthType = {
  isLoggedIn: boolean
}
export const useAuth = (): UseAuthType => {
  const isLoggedIn = true

  return { isLoggedIn }
}
