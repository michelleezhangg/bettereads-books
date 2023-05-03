import Head from 'next/head';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import useSWR from 'swr'; // useSWR allows the use of SWR inside function components
import stylesComponent from '../styles/component.module.css'


// write fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  // set up SWR to run the fetcher function when calling "/api/books"
  // there are 3 possible states: (1) loading when data is null, (2) ready when the data is returned, (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/books', fetcher);

  // handle the error state
  if (error) return <div>Failed to load</div>;

  // handle the loading state
  if (!data) return <div>Loading...</div>;

  // handle the ready state and display result contained in data object mapped to structure of json file
  return (
    
    // from Next.js starter project code
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>List of Books</h1>
      <div className={stylesComponent.cardgrid}>
        {data.map((book) => (
          
            <Card book={book} />
          
        ))}
      </div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
