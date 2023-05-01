import herostyles from  "../styles/herosection.module.css";
import styles from  "../styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({title, imageurl}) => {
  return (
    <main className={herostyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={herostyles.hero_content}>
                    <h1>{title}</h1>
                    <p> From award-wining dramas to blockblaster action movies, we&apos;ve got you covered.Browse our selection of the latest and greatest movies, and find your new favorite today. </p>
                    <Link href='/movie' >
                    <button>
                        Explore Movies
                    </button>
                    </Link>
                </div>

                <div className={herostyles.hero_image}>
                    <Image src={imageurl} alter="Hero img" width={700} height={650}/>
                </div>

            </div>

        </div>

    </main>
  )
}

export default Herosection