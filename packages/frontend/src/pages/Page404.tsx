import { Link } from 'react-router-dom'

export function Page404() {
  return (
    <div>
      <h1>404</h1>
      <Link to={'/'}>Wróć do strony głównej</Link>
    </div>
  )
}
