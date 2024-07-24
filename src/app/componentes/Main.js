'use client'
import Image from "next/image";
import Link from 'next/link';
import IndicadorDeCarregamento from "./IndicadorDeCarregamento"; 
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import ErrorGet from "./ErrorGet";

export default function Main (){

    
    const [listProduct, setListProduct] = useState([]);
    const [listComplet, setListComplet] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorGet] = useState(false);

    useEffect(()=>{
      const getProduct = async () =>{
       try{  const response = await fetch ("http://localhost:3000/api");
        const data = await response.json();
        
        setListProduct(data);
        setListComplet(data);
        
      }catch{
        setErrorGet(true);
      }
    };
      getProduct();
    }, []);


const orderAz = () =>{
    const newList = [...listProduct].sort(  (a,b)=>  a.nome.localeCompare(b.nome)
    );
    setListProduct(newList);
  }

  const orderZa = () => {
    let newList = [...listProduct].sort( (a,b)=> a.nome.localeCompare(b.nome)
    );
    newList = newList.reverse();
    setListProduct(newList);
  }
    

   const ordermais = () =>{
    const newList = [...listProduct].sort ( (a,b)=>  a.preco - b.preco  
    );
    setListProduct(newList);
   }

   const ordermenos = () =>{
    let newList = [...listProduct].sort ( (a,b)=>  a.preco - b.preco
    );
    newList= newList.reverse();
    setListProduct(newList);
   }

   const searchText = (text)=>{
    setSearch (text);
    if(text.trim() === ""){
      setListProduct(listComplet);
      return;
    }

    
    const newList = listComplet.filter((product) =>
    product.nome.toUpperCase().trim().includes(search.toUpperCase().trim()));
    setListProduct(newList);
   }

   
   if(errorFetch == true){
    return <ErrorGet/>
   }

   if (listProduct[0]==null){
    
    return <IndicadorDeCarregamento/>
   }

  
    return(
      <>
      <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={search}
                    placeholder="Pesquise o produto"
                    onChange={(event) => searchText(event.target.value)}
                    className={styles.searchInput}
                />
          <button className={styles.button} onClick={orderAz}>AZ</button>
          <button className={styles.button} onClick={orderZa}>ZA</button>
          <button className={styles.button} onClick={ordermais}>Maior preço</button>
          <button className={styles.button} onClick={ordermenos}>Menor preço</button>
      </div>
   <main className={styles.main}>
    {listProduct.map((products) => ( 


    <div className={styles.card} key={products.id}>
       <Image className={styles.img}
      width={200}
      height={200}
      src={products.imagem} />
      <h3>{products.nome}</h3>
      <p>{products.descricao}</p>
      <p>Preço: {products.preco}</p>
      <p>Avaliação: {products.avaliacao}</p>
     

        <Link href={'/products/${products.id}'}>
            Ver produto
        </Link>

    </div>
    ))}
  </main>
  </>
  );
}
