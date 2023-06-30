import { RouterProvider } from 'react-router-dom'

import { router } from '../../router.tsx'

export function RouterRoot() {
  return <RouterProvider router={router} />
}
