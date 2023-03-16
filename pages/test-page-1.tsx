import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import BuilderComp from '../src/BuilderComp';
import '../src/CustomButton';
import '../src/CustomSection';
import '../src/ResImage';

import { Builder } from '@builder.io/react';


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
      </main>
    </>
  )
}

// how do we get all of the current button symbols and feed them into this menu section
// const buttonSymbols = builder.get('Button Symbols');
// console.log('---', buttonSymbols);

Builder.register('insertMenu', {
  name: 'Child Components',
  items: [{ name: 'Custom Button' }, {name: 'Responsive Image'}]
});
