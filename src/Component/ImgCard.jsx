const ImgCard = ({author, url}) => {
  return (

        <div className='w-[200px] h-[200px] p-2 mb-5'>
              <img src={url} alt='img' className='w-full h-full object-cover rounded-2xl'/>
              <h2 className='font-semibold text-white text-center'>{author}</h2>
            </div>

  )
}

export default ImgCard
