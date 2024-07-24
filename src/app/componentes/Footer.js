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
        </footer>
    )}


   