import { Container } from './components/container'
import { Hero } from './sections/hero'
import { Shop } from './sections/shop'

// can't use edge runtime yet because of this issue: https://github.com/vercel/next.js/issues/43690
// export const runtime = 'edge'

const Page = () => {
  return (
    <>
      <Container>
        <Hero />
        {/* @ts-expect-error rsc */}
        <Shop />
      </Container>
    </>
  )
}

export default Page
