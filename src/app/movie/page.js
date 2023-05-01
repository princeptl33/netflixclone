import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "../styles/common.module.css";

const page = async () => {

  // await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
 
  const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '8b408ea2f7msh576d8ecef4bdd78p100fdajsn6d5d8ab74dfc',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
// console.log(data);

  return (
    <>
               <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
    </>
  )
}

export default page