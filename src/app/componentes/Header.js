import Image from "next/image";
import styles from './header.module.css';

export default function Header () {
    return(
        <header className={styles.cssheader}>
            <div>
                <Image className={styles.logo}
                width={100}
                height={100}
                src={"https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/logo-primary___5bd0e7fa6451ba181395889123dfe00a.svg"}
            />
            </div>

            <div>
                <image className={styles.carrinhoo}
                width={100}
                height={100}
                src={"https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.0.12/svg/mini-cart___f661ba60d07110abc8760b46c48d87cf.svg"}
            />
            </div>
        </header>
    )
}