import Image from "next/image";
import styles from '.header.module.css';

export default function Header () {
    return(
        <header className={styles.cssheader}>
            <div>
                <Image className={styles.logo}
                width={100}
                height={100}
                src={"https://raw.githubusercontent.com/marianepsantos/meu-projeto-express-ejs/main/public/imagem/Captura%20de%20Tela%20(59).png"}
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