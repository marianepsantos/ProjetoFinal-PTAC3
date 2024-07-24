import Image from "next/image";

export default function IndicadorDeCarregamento() {
    return(
        <Image
        width={100}
        height={100}
        src= 'animacao.svg'
        alt = 'imagem carregando'
        />
    );
}