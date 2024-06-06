import React from 'react'

const Details = ({data}) => {


  return (
    <div className='w-full md:h-[90vh] px-5 md:px-20 py-10 md:py-20  flex md:flex-row flex-col '>
        <div className='w-full md:w-1/2 h-full'>
            <img src={data.img} alt="" className='object-contain w-full h-full' />
        </div>
        <div className='w-full md:w-1/2 h-full flex px-5 py-10 flex-col gap-4'>
            <h1 className='font-bold text-2xl capitalize'>{data.name}</h1>
            <hr />
            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aliquam? Perferendis, enim fuga, reprehenderit repellat eos amet aliquam neque itaque maxime autem corrupti, aut totam nemo explicabo corporis veritatis ipsam voluptate repellendus.</p>
            <p className='font-bold text-2xl pt-10'>{data.price}</p>
            <button className='capitalize bg-[#041e42] text-white w-1/2 px-3 py-3 text-lg font-extrabold hover:bg-[#F55939]'>Buy Now</button>
        </div>
    </div>
  )
}

export default Details
