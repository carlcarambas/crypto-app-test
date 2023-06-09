import Head from 'next/head'

export default function MainLayout(props) {
  const { children, title }  = props;

  return(
    <>
      <Head>
        <title>{title ?? "Crypto App"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='content'>
          {children}
        </div>
      </main>
    </>
  )
}