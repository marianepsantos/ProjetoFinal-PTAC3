import { NextResponse } from "next/server";

export const listaDeBodySplash = [
    {
        id: 1,
        nome: "Body Splash Summer",
        preço: "R$99,10",
        descricao:"Um bem-estar envolvente como o verão",
        avaliacao:"4.3",
        imagem: "https://wepink.vtexassets.com/arquivos/ids/158255-1000-1000?v=638509612809730000&width=1000&height=1000&aspect=true"
    },
    {
        id: 2,
        nome: "Body Splash Pink",
        preço: "R$99,20",
        descricao:"Reivindique o seu estilo Pink da melhor forma!",
        avaliacao:"3.9",
        imagem: "https://wepink.vtexassets.com/arquivos/ids/158542-1000-1000?v=638533564444100000&width=1000&height=1000&aspect=true"
    },
    {
        id: 3,
        nome: "Body Splash Infinity",
        preço: "R$99,30",
        descricao:"Transmita determinação da melhor forma com WEPINK",
        avaliacao:"5.0",
        imagem: "https://wepink.vtexassets.com/arquivos/ids/157927-800-auto?v=638496479955000000&width=800&height=auto&aspect=true"
    },
    {
        id: 4,
        nome: "Body Splash Liberté",
        preço: "R$99,40",
        descricao:"Transborde a essência da elegância!",
        avaliacao:"4.7",
        imagem: "https://wepink.vtexassets.com/arquivos/ids/157941-1000-1000?v=638496484975630000&width=1000&height=1000&aspect=true"
    },
    {
        id: 5,
        nome: "Body Splash Red",
        preço: "R$99,50",
        descricao:"Um aroma brilhante para despertar desejo e sofisticação",
        avaliacao:"5.0",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157972-1000-1000?v=638496513313970000&width=1000&height=1000&aspect=true"
    },
    {
        id: 6,
        nome: "Body Splash Pureblixx",
        preço: "R$99,60",
        descricao:"O verdadeiro elixir inebriante feito para você",
        avaliacao:"2.0",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157740-1000-1000?v=638479374457970000&width=1000&height=1000&aspect=true"
    },
    {
        id: 7,
        nome: "Body Splash Infinity Star",
        preço: "R$99,70",
        descricao:"Encontro celestial de bem-estar",
        avaliacao:"4.0",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157932-1000-1000?v=638496482644470000&width=1000&height=1000&aspect=true"
    },
    {
        id: 8,
        nome: "Body Splash VF Aqua",
        preço: "R$99,80",
        descricao:"Pele perfumada em uma essência única e refrescante",
        avaliacao:"4.4",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157912-1000-1000?v=638496476153330000&width=1000&height=1000&aspect=true"
    },
    {
        id: 9,
        nome: "Body Splash Obsessed",
        preço: "R$99,90",
        descricao:"Uma fragrância marcante e intensa para o seu bem-estar",
        avaliacao:"5.0",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157951-1000-1000?v=638496488187170000&width=1000&height=1000&aspect=true"
    },
    {
        id: 10,
        nome: "Body Splash One Touch",
        preço: "R$99,99",
        descricao:"Exale poder e bem-estar",
        avaliacao:"2.2",
        imagem:"https://wepink.vtexassets.com/arquivos/ids/157957-1000-1000?v=638496497837470000&width=1000&height=1000&aspect=true"
    },
];


export async function GET (){
    return NextResponse.json(listaDeBodySplash)
}