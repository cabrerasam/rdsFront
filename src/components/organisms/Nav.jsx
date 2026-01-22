import logo from '../../assets/logo.webp'
const Nav = () => {
  return (
    <>
      <header className='text-light border-b border-gray-800 flex justify-center items-center'>
        <nav className='w-3/4 flex justify-between items-center py-4'>
          <div className='w-52'>
            <img src={logo} alt="" srcset="" />
          </div>
          <ul className='flex gap-3 font-black'>
            <li className="hover:bg-gray-950 px-3 py-2 rounded-xl transition-transform duration-100 ease-in-out">Sobre nosotros</li>
            <li className="hover:bg-gray-950 px-3 py-2 rounded-xl transition-transform duration-100 ease-in-out">Política</li>
            <li className="hover:bg-gray-950 px-3 py-2 rounded-xl transition-transform duration-100 ease-in-out">Contacto</li>
          </ul>
          <div>
            <form action="" className='flex gap-4 bg-gray-800 py-2 px-2 rounded-2xl'>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="#BDC3C8" /></svg>
              <input className='border-none outline-0 text-sm' type="text" placeholder='Buscar...' />
            </form>
          </div>
        </nav>
      </header>
      <section className='border-b border-gray-800 flex justify-center'>
        <div className='w-3/4 py-1'>
          <p className='text-light font-light'><span className='text-primary mr-4'>URGENTE </span> Trump anuncia el ‘marco para un futuro acuerdo’ respecto a Groenlandia</p>
        </div>
      </section>
    </>
  )
}

export default Nav
