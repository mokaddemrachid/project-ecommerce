import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeProducts from './HomeProducts'
import { getProduct } from '../../redux/action/productAction'
import SingleProduct from '../SingleProduct/SingleProduct';
import { Route, Routes } from 'react-router-dom';


export default function Home({search}) {
  console.log(search)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
  return (
    <div>
      <div style={{backgroundImage:`url('https://i.pinimg.com/564x/88/8d/a1/888da110b49880a2f3aab899f4155956.jpg')`,
                  backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '900px'}}>

          <h3 style={{position: 'absolute', marginTop: '350px', backgroundColor: 'transparent', color: 'white', fontWeight: '1500', left: '400px'}}
          >Magasin de Vêtements en Ligne <br></br>"Style et Commodité à Votre Portée"
          </h3>

          <p style={{position: 'absolute', backgroundColor: 'transparent', marginTop: '450px', color: 'white', fontWeight: '700', right: '300px'}}>
            "Bienvenue dans notre boutique de vêtements en ligne, où la mode rencontre la commodité.<br/>
           Nous proposons une large gamme de vêtements élégants et tendance pour hommes, femmes et enfants.<br/>
            Que vous recherchiez les dernières tendances de la mode,<br/>
             des tenues décontractées pour tous les jours,<br/>
              ou quelque chose de spécial pour une occasion particulière, nous avons ce qu'il vous faut."
          </p>
      </div>
       {<HomeProducts data={info} search={search}/>}
       <Routes>
        {info.map((product) => 
          <Route path={`/:id`} element={<SingleProduct key={product._id} data={product} />} />
        )}
       </Routes>

    </div>
  )
}
