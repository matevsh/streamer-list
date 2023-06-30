import { ReactQueryProvider } from './ReactQueryProvider.tsx'
import { RouterRoot } from './RouterRoot.tsx'

export function ProvidersRoot() {
  return (
    <ReactQueryProvider>
      <RouterRoot />
    </ReactQueryProvider>
  )
}
