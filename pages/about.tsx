import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <Layout>
      <NextSeo title="About" />
      <div className="mx-auto max-w-xl">
        <h1 className={styles.title}>About</h1>
        {/* <figure>
          <Image src="/logo@2x.png" width={1472} height={642} alt="Anders Lind" />
        </figure> */}
        <p className="mt-4">
        Coming soon Tutorials on Coding ,  How to speak  5 Languages and  more
        </p>
      </div>
    </Layout>
  )
}

export default About
