import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Root } from './pages/root/Root.tsx'
import StreamerList from './pages/streamer-list'
import { Page404 } from './pages/Page404.tsx'

const StreamerDetails = lazy(() => import('./pages/streamer-details'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <StreamerList />,
      },
      {
        path: '/details/:id',
        element: <StreamerDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
])
