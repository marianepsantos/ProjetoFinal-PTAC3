import { NextResponse } from "next/server";

export const listaDeBodySplash = [
    {
        id: 1,
        nome: "Body splash Summer",
        preço: "R$99,10",
        descricao:"Um bem-estar envolvente como o verão",
        avaliacao:"4.3"
    },
    {
        id: 2,
        nome: "Body Splash Pink",
        preço: "R$99,20",
        descricao:"Reivindique o seu estilo Pink da melhor forma!",
        avaliacao:"3.9"
    },
    {
        id: 3,
        nome: "Body Splash Infinity",
        preço: "R$99,30",
        descricao:"Transmita determinação da melhor forma com WEPINK",
        avaliacao:"5.0"
    },
    {
        id: 4,
        nome: "Body Splash Liberté",
        preço: "R$99,40",
        descricao:"Transborde a essência da elegância!",
        avaliacao:"4.7"
    },
    {
        id: 5,
        nome: "Body Splash Red",
        preço: "R$99,50",
        descricao:"Um aroma brilhante para despertar desejo e sofisticação",
        avaliacao:"5.0"
    },
    {
        id: 6,
        nome: "Body Splash Pureblixx",
        preço: "R$99,60",
        descricao:"O verdadeiro elixir inebriante feito para você",
        avaliacao:"2.0"
    },
    {
        id: 7,
        nome: "Body Splash Infinity Star",
        preço: "R$99,70",
        descricao:"Encontro celestial de bem-estar",
        avaliacao:"4.0"
    },
    {
        id: 8,
        nome: "Body Splash VF Aqua",
        preço: "R$99,80",
        descricao:"Pele perfumada em uma essência única e refrescante",
        avaliacao:"4.4"
    },
    {
        id: 9,
        nome: "Body Splash Obsessed",
        preço: "R$99,90",
        descricao:"Uma fragrância marcante e intensa para o seu bem-estar",
        avaliacao:"5.0"
    },
    {
        id: 10,
        nome: "Body Splash One Touch",
        preço: "R$99,99",
        descricao:"Exale poder e bem-estar",
        avaliacao:"2.2"
    },
];


export async function GET (){
    return NextResponse.json(listaDeBodySplash)
}