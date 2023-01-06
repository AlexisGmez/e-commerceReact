import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../components/home/Categories';
import ProductCard from '../components/home/ProductCard';
import { getAllProductsThunk } from '../store/slices/products.slice';
import './styles/Home.scss';
const Home = () => {
  const dispatch = useDispatch();

  const [nameProducts, setNameProducts] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const [ category, setCategory ] = useState('');
  const products = useSelector(state=>state.products);


 
  const handleSubmit= (e) =>{
    e.preventDefault();
    setNameProducts( e.target.nameProduct.value );
  }

  useEffect( ()=>{
    dispatch( getAllProductsThunk() )
  },[]);

  useEffect(()=>{
    setFilterProducts( products )
  },[products])

  useEffect(()=>{

    const newProducts = products.filter( product => product.title.includes( nameProducts ) && (product.category.id === category || !category));
    setFilterProducts( newProducts );

    console.log( category )

  },[ nameProducts, category ])

  
  return (
    <main className='home'>
      <form className='home__form' onSubmit={ handleSubmit }>
        <div className='home__form-div'>
          <input className='home__form-input' id='nameProduct'  type="text" placeholder='What are you looking for?'/>
          <button className='home__form-btn' ><i className='bx bx-search'></i>
          </button>
        </div>
      </form>
      
      <Categories setCategory={setCategory} />
      <section className='home__container-products'>
        {
          filterProducts.map(product => <ProductCard key={ product.id } product = { product } /> )
        }
      </section>
    </main>
  )
}

export default Home
