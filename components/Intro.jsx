import styles from "./../styles/intro.module.css"
import Image from "next/image"

const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>AV0CADO </span>
                    DIGITAL PRODUCT AGENCY
                </h1>
                <p className={styles.desc}>
                    Create live segments and 
                    target thr right people 
                    for messages based on their behaviors.
                </p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <div className={styles.card}>
                <Image 
                   src="/img/Avocado.png" 
                   width="100%" 
                   height="100%"
                   objectFit="cover"
                   layout="fill"
                   alt="" 
                />
            </div> 
        </div>
    )
}

export default Intro
