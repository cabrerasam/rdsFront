import logo from '../../assets/logo.jpeg'
import QR from '../../assets/qr.png'
const Footer = () => {
  return (
    <footer className='bg-gray-950 border-t border-gray-800 text-light mt-4 py-4 flex flex-col justify-center items-center'>
      <section className='max-w-[1200px] w-3/4 border-b border-gray-800 grid grid-cols-3 gap-4 pb-4'>
        <section>
          <h3>Sobre nosotros</h3>
          <img src={logo} alt='logo' />
          <p>En RDS nos comprometemos a brindarte la mejor experiencia en servicios de alquilar y vender vehículos. Con años de experiencia en el mercado, somos líderes en la industria automotriz, ofreciendo soluciones innovadoras y personalizadas para satisfacer tus necesidades.</p>
        </section>
        <section>
          <h3 className='text-center'>Contáctanos</h3>
          <p className='text-center'>Whatsapp: </p>
          <p className='text-center'>Instagram: </p>
          <p className='text-center'>Facebook: </p>
          <p className='text-center'>Mail: </p>
        </section>
        <section className='flex justify-center'>
          <article className='w-3/4 flex flex-col gap-2 border border-[#128c7e] bg-[#075e54] text-light rounded-3xl overflow-hidden'>
            <div className='h-full flex pt-4 justify-center items-center'>
              <h3 className='text-center text-[#dcf8c6] font-bold'>Súmate a nuestro grupo de WhatsApp</h3>
            </div>
            <div className='h-full bg-[#25d366] p-4 flex flex-col justify-center items-center gap-4'>
              <p className='text-center text-[#075e54] font-bold'>Escaneá el QR</p>
              <figure className='h-[150px] w-[150px] overflow-hidden mx-auto shadow-2xl'>
                <img src={QR} alt='' className='h-full w-full object-cover' />
              </figure>
              <p className='text-center text-[#075e54]'>o tocá el <a href='#' className='text-[#34b7f1] bg-[#075e54] px-2 py-1 rounded-full mx-2'>enlace</a> y únete en segundos.</p>
            </div>
          </article>
        </section>
      </section>
      <section className='max-w-[1200px] w-3/4 mt-4 flex justify-between items-center'>
        <p>© {new Date().getFullYear()} RDS. Todos los derechos reservados.</p>
        <span>Desarrollado por <a href='https://github.com/saalcazar' target='_blank' rel='noopener noreferrer' className='text-[#34b7f1]'>saalcazar</a></span>
      </section>
    </footer>
  )
}

export default Footer
