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
];


export async function GET (){
    return NextResponse.json(listaDeBodySplash)
}