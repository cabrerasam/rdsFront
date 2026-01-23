import QR from '../../assets/qr.png'

const Post = () => {
  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto flex gap-4 py-4 border-b border-gray-800 relative'>
      <article className='w-4/6 relative'>
        <h1 className='text-light text-3xl my-4 font-bold hover:text-primary cursor-pointer'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico</h1>
        <figure className='overflow-hidden rounded-2xl'>
          <img className='h-full w-full object-cover' src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' />
        </figure>
        <div className='text-sm font-light flex items-center gap-2 my-4'>
          <p className='text-gray-500'><span className='text-primary'>Autor: </span>RDS-TV</p>
          <div className='bg-gray-800 w-px h-4' />
          <p className='text-gray-500'><span className='text-primary'>Fecha: </span>22 de enero de 2026</p>
        </div>
        <div className='text-gray-400 flex flex-col gap-4'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

          <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>

          <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
        </div>
        <section className='flex justify-center mt-6'>
          <article className='w-3/4 flex gap-2 border border-[#128c7e] bg-[#075e54] text-light rounded-3xl overflow-hidden'>
            <div className='w-1/2 h-full p-4 flex flex-col justify-center items-center gap-4'>
              <h3 className='text-center text-[#dcf8c6] font-bold'>Súmate a nuestro grupo de WhatsApp</h3>
              <p>Tenemos un grupo de WhatsApp donde compartimos novedades, info útil y algunas sorpresas exclusivas. Es la forma más fácil de estar en contacto y no perderte nada.</p>
            </div>
            <div className='w-1/2 h-full bg-[#25d366] p-4 flex flex-col justify-center items-center gap-4'>
              <p className='text-center text-[#075e54] font-bold'>Escaneá el QR</p>
              <figure className='h-[150px] w-[150px] overflow-hidden mx-auto shadow-2xl'>
                <img src={QR} alt='' className='h-full w-full object-cover' />
              </figure>
              <p className='text-center text-[#075e54]'>o tocá el <a href='#' className='text-[#34b7f1] bg-[#075e54] px-2 py-1 rounded-full mx-2'>enlace</a> y únete en segundos.</p>
            </div>
          </article>
        </section>
      </article>
      <aside className='w-2/6 max-h-[900px] overflow-auto border border-gray-800 rounded-2xl p-4 flex flex-col justify-center'>
        <h2 className='text-light border-l-2 border-primary pl-4 bg-gray-950'>Recomendadas para tí</h2>
        <ul className='mt-4 flex flex-col gap-5'>
          <li className='flex flex-col items-center gap-2 border-b border-gray-800 pb-4 last:border-b-0'>
            <figure className='w-[95%] h-[150px] overflow-hidden rounded-2xl'>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-full w-full object-cover hover:scale-110 transition-all' />
            </figure>
            <p className='w-[95%] text-light text-sm flex flex-col '>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
          </li>
          <li className='flex flex-col items-center gap-2 border-b border-gray-800 pb-4 last:border-b-0'>
            <figure className='w-[95%] h-[150px] overflow-hidden rounded-2xl'>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-full w-full object-cover hover:scale-110 transition-all' />
            </figure>
            <p className='w-[95%] text-light text-sm flex flex-col '>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
          </li>
          <li className='flex flex-col items-center gap-2 border-b border-gray-800 pb-4 last:border-b-0'>
            <figure className='w-[95%] h-[150px] overflow-hidden rounded-2xl'>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-full w-full object-cover hover:scale-110 transition-all' />
            </figure>
            <p className='w-[95%] text-light text-sm flex flex-col '>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
          </li>
        </ul>
      </aside>
    </main>
  )
}

export default Post
