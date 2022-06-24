import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  console.log(1);

  const router = useRouter()
  typeof window !== 'undefined' ? console.log('前端') : console.log('后端')
  let names = 'about'
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
        <button onClick={() => router.push(`/${names}`)}>
          Click here to read more
        </button>
      </li>
      <li>

      </li>
    </ul>
  )
}
