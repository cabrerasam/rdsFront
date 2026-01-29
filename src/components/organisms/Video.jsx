import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto mt-4 mb-4 border-b border-gray-800 pb-4'>
      <h2 className='text-xl font-bold mb-4 text-light bg-red-950 pl-2 border-l-2 border-red-700'>Video</h2>
      <div className='flex gap-4'>
        <ReactPlayer src='https://youtu.be/Rfco64kKLPY?si=9ebGeo8fnIzDX2cA' width='100%' />
        <ReactPlayer src='https://youtu.be/z595k5xostE?si=tIZYMuPS77NMBr0O' width='100%' />
        <ReactPlayer src='https://youtu.be/CzhHexub9lE?si=XjUqlHpLk-Ly1G8t' width='100%' />
      </div>
    </main>
  )
}

export default Video
