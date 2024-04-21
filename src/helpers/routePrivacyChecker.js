const publicRoutes = [
  '/',
  '/faq',
  '/register',
  '/login'
]


export const isPublicRoute = (route) => {
  console.log('compare', route)
  for(const publicRoute of publicRoutes) {
    if(route == publicRoute) return true
  }
  return false
}

export const isApiRoute = (route) => {
  console.log('isapi', route)
  return route.startsWith('/api')
}