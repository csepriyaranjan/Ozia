import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Collection from '../components/Collection'
import ProductCard from '../components/ProductCard'
import EndHero from '../components/EndHero'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const products = [
    {
      name: 'Eclipse Wrap Gown',
      newPrice: 200,
      oldPrice: 1000,
      imageUrl: 'https://images.pexels.com/photos/29251192/pexels-photo-29251192.jpeg',
    },
    {
      name: 'Golden Hour Co-Ord',
      newPrice: 500,
      oldPrice: 1200,
      imageUrl: 'https://images.pexels.com/photos/29251280/pexels-photo-29251280.jpeg',
    },
    {
      name: 'Sienna Satin Set',
      newPrice: 250,
      oldPrice: 1250,
      imageUrl: 'https://images.pexels.com/photos/6764033/pexels-photo-6764033.jpeg',
    },
    {
      name: 'Coco Luxe Crop',
      newPrice: 590,
      oldPrice: 1800,
      imageUrl: 'https://images.pexels.com/photos/10877552/pexels-photo-10877552.jpeg',
    },
    {
      name: 'Sienna Satin Set',
      newPrice: 250,
      oldPrice: 1250,
      imageUrl: 'https://images.pexels.com/photos/6764033/pexels-photo-6764033.jpeg',
    },
    {
      name: 'Coco Luxe Crop',
      newPrice: 590,
      oldPrice: 1800,
      imageUrl: 'https://images.pexels.com/photos/10877552/pexels-photo-10877552.jpeg',
    },
    {
      name: 'Eclipse Wrap Gown',
      newPrice: 200,
      oldPrice: 1000,
      imageUrl: 'https://images.pexels.com/photos/29251192/pexels-photo-29251192.jpeg',
    },
    {
      name: 'Golden Hour Co-Ord',
      newPrice: 500,
      oldPrice: 1200,
      imageUrl: 'https://images.pexels.com/photos/29251280/pexels-photo-29251280.jpeg',
    },
    
  ];

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Collection/>

    <div className="min-h-screen bg-[#edf3f3] font-roboto font-sans p-12 sm:p-8 flex flex-col items-center">
      
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-brownsugar uppercase text-gray-700">
          Style On Fire
        </h1>
      </header>
      
      {/* Products Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name} 
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            imageUrl={product.imageUrl}
          />
        ))}
      </main>

    </div>


    <EndHero/>
    <NewsLetter/> 
    <Footer/>

    </>
  )
}
