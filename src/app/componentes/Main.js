'use client'
import Image from "next/image";
import Link from 'next/link';
import Spinner from "./Spinner"; //mudar o nome de spinner
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import ErrorGet from "./ErrorGet";

export default function Main (){

    
    const [listProduct, setListProduct] = useState([]);
    const [listComplet, setListComplet] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect(()=>{
      const getProduct = async () =>{
       try{  const response = await fetch ("https://fakestoreapi.com/products");
        const data = await response.json();
        
        setListProduct(data);
        setListComplet(data);
        
      }catch{
        setErrorFetch();
      }
    };
      getProduct();
    }, []);
}

const orderAz = () =>{
    const newList = [...listProduct].sort(  (a,b)=>
          a.title.localeCompare(b.title)
    );
    setListProduct(newList);
  }

  const orderZa = () => {
    let newList = [...listProduct].sort( (a,b)=>
        a.localeCompare(b.title)
    );
    newList = newList.reverse();
    setListProduct(newList);
  }
    

   const ordermais = () =>{
    const newList = [...listProduct].sort ( (a,b)=>
          a.price - b.price
    );
    setListProduct(newList);
   }

   const ordermenos = () =>{
    let newList = [...listProduct].sort ( (a,b)=>
          a.price - b.price
    );
    newList= newList.reverse();
    setListProduct(newList);
   }

   const searchText = (text)=>{
    setSearch (text);
    if(text.trim() == ""){
      setListProduct(listComplet);
      return
    }

    //A const searchText é uma função de pesquisa, que nesse caso aí pesquisa pelo nome do produto.
    const newList = listProduct.filter((product) =>
    product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
    setListProduct(newList);
   }

   //E esse if aí é quando ocorre um erro do Fetch ele retorna o componente ErrorGetData
   if(errorFetch == true){
    return <ErrorGetData/>
   }

   if (listProduct[0]==null){
    //mudar o noe do spinner
    return <Spinner/>
   }

  
    return(
      <>
      <div>
          <button className={styles.button} onClick={orderAz}>AZ</button>
          <button className={styles.button} onClick={orderZa}>ZA</button>
          <button className={styles.button} onClick={ordermais}>Menor preço</button>
          <button className={styles.button} onClick={ordermenos}>Maior preço</button>
      </div>
   <main className={styles.main}>
    {listProduct.map((products) =>


    <div className={styles.card} key={products.id}>
      <p>{products.title}</p>
      <p>{products.description}</p>
      <p>{products.category}</p>
      <p>{products.rating.count}</p>
      <Image
      width={200}
      height={200}
      src={products.image} />

      
    </div>
    )}
  </main>
  </>
    );