import styles from "./../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AVOKADO CREATIVES</h1>
                <h1 className={styles.linkTitle}>
                    <a href="/contact" passHref>
                      <span className={styles.linkText}>WORK WITH US</span>
                      <Image src="/img/link.png" alt="" width="40px" height="40px"/>
                    </a>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    12 ADAM STREET NY <br /> USA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@DIMON.DEV <br /> 213 1243 12312
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US:<br /> __FB __IN __BE __TW
                </div>
                <div className={styles.cardItem}>
                    @ 2022 DIMON INTERACTIVE, <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
