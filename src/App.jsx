import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgCard from './Component/imgCard'

const App = () => {
  const [user, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    getData()
  },[index])
  const getData = async () => {
    try{
      setLoading(true)
     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    // const galleryData =  await response.data
    setUserData(response.data)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }



  return (
    <div className='min-h-screen bg-black p-10 items-center'> 
      <div className='container flex flex-wrap gap-3'>
        
     {loading ? (
          <h3 className='text-2xl text-white'>Loading...</h3>
                ) : (
          user.map((elem, id) => {
          return <ImgCard key={id} author={elem.author} url={elem.download_url}/>
        })
                )}
      </div>
      <div className='flex justify-center gap-4 items-center mt-5'>
        <button onClick={()=>{  if(index > 1){
          setIndex(prev => prev - 1)
        }
        }} className='bg-yellow-600 px-5 py-2 rounded cursor-pointer font-semibold'>Prev</button>
        <h2 className='text-white'>{index}</h2>
        <button onClick={()=>{
          setIndex(prev=> prev + 1)}} className='bg-yellow-600  px-5 py-2 rounded cursor-pointer font-semibold'>Next</button>
      </div>
    </div>

  )
}

export default App
