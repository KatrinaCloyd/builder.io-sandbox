import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import BuilderComp from '../src/BuilderComp';
import CustButton from '@/src/CustomButton';
import CustSection from '@/src/CustomSection';


export default function BuilderTest() {
  return (
    <>
      <Head>
        <title>Next App with Builder IO!</title>
        <meta name="description" content="earning new stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hullo hullo!</h1>
          <h2>Builder Test Page</h2>
        </div>
        <BuilderComp />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <CustSection heading="Hard Coded Custom Section" button={undefined}></CustSection>
        <CustButton />
      </main>
    </>
  )
}
