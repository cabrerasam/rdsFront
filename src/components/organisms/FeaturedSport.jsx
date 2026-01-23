const FeaturedSport = () => {
  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto mt-4 mb-4 border-b border-gray-800 pb-4'>
      <h2 className='text-xl font-bold mb-4 text-light bg-green-950 pl-2 border-l-2 border-orange-700'>Deportes</h2>
      <div className='grid grid-cols-3 gap-8'>
        <article className='col-span-2'>
          <figure className='overflow-hidden rounded-2xl'>
            <img src='https://erbol.com.bo/sites/default/files/bol_mexico_21.jpg' alt='' />
          </figure>
          <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Difunden los precios de las entradas del partido ante México</h1>
          <p className='text-gray-400 text-sm line-clamp-3'>José Claure, dirigente de la Federación Boliviana de Fútbol (FBF), confirmó los precios de las entradas para el partido amistoso que disputarán las selecciones de Bolivia y México este 25 de enero en el estadio Ramón Tahuichi Aguilera, en Santa Cruz.</p>
          <a href='#' className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
        </article>
        <section className='col-span-1 flex flex-col gap-4'>
          <article>
            <figure className='h-40 overflow-hidden rounded-2xl'>
              <img src='https://erbol.com.bo/sites/default/files/bol_mexico_21.jpg' alt='' />
            </figure>
            <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Difunden los precios de las entradas del partido ante México</h1>
            <a href='#' className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
          </article>
          <article>
            <figure className='h-40 overflow-hidden rounded-2xl'>
              <img src='https://erbol.com.bo/sites/default/files/bol_mexico_21.jpg' alt='' />
            </figure>
            <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Difunden los precios de las entradas del partido ante México</h1>
            <a href='#' className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
          </article>
        </section>
      </div>
    </main>
  )
}

export default FeaturedSport
