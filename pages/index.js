import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
  return (
    <ul>
      <li>
        <Link href="/post/abc">
          <a>Go to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc?foo=bar">
          <a>Also goes to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>
      <li>
        <button onClick={() => router.push('/about')}>
          Click here to read more
        </button>
      </li>
      <li>

      </li>
    </ul>
  )
}
