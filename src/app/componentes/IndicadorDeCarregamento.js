import Image from "next/image";

export default function IndicadorDeCarregamento() {
    return(
        <Image
        width={100}
        height={100}
        src= ''
        alt = 'imagem carregando'
        />
    );
}