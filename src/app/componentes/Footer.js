import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={styles.footer}>

            <Image 
            className={styles.imgfooter}
            width={100}
            height={100}
            src = "https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/logo-primary___5bd0e7fa6451ba181395889123dfe00a.svg"
            alt = "Logo"
            />

            <Image 
            className={styles.imginsta}
            width={100}
            height={100}
            src = "https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/instagram___7414c911367adbfb6e2fb8d8ea73c773.svg"
            alt = "Logo"
            />

            <Image 
            className={styles.imginsta}
            width={100}
            height={100}
            src = "https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/twitter___1b5f8b1cdde9839d4bf0784d6a4494c2.svg"
            alt = "Logo"
            />

            <Image 
            className={styles.imginsta}
            width={100}
            height={100}
            src = "https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/facebook___6d7c4858762b8dffde03370b551efd02.svg"
            alt = "Logo"
            />

            
        </footer>
    )}


   