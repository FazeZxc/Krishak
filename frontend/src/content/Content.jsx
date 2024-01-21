import React from 'react'
import CropData from './CropData'

function Content({ crop }) {

    const found = CropData.find((element) => element.name == crop);
    if (found)
        return (
            <div className='flex flex-col justify-center items-center bg-lime-400 p-10 border-4 rounded-xl gap-2'>
                {/* <div className='border-4 rounded-xl bg-gray-500'> */}
                    {/* <p className='font-bold text-4xl text-white px-6 py-2'>{found.name}</p> */}
                {/* </div> */}
                <div className='bg-[url("./assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg")] border-4 border-slate-700 rounded-xl flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-3xl text-slate-700 px-10 py-6 '>Description</h1>
                    <p className='m-10 text-pretty text-justify w-1/2 text-2xl font-RobotoCondensed tracking-wide' style={{wordSpacing: "8px"}}>{found.description}</p>
                </div>
                <div className='bg-[url("./assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg")] border-4 border-slate-700 rounded-xl flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-3xl text-slate-700 px-10 py-6 '>Climate</h1>
                    <p className='m-10 text-pretty text-justify w-1/2 text-2xl font-RobotoCondensed tracking-wide' style={{wordSpacing: "8px"}}>{found.climate}</p>
                </div>
                <div className='bg-[url("./assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg")] border-4 border-slate-700 rounded-xl flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-3xl text-slate-700 px-10 py-6 '>Uses</h1>
                    <p className='m-10 text-pretty text-justify w-1/2 text-2xl font-RobotoCondensed tracking-wide' style={{wordSpacing: "8px"}}>{found.uses}</p>
                </div>
                <div className='bg-[url("./assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg")] border-4 border-slate-700 rounded-xl flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-3xl text-slate-700 px-10 py-6 '>Conclusion</h1>
                    <p className='m-10 text-pretty text-justify w-1/2 text-2xl font-RobotoCondensed tracking-wide' style={{wordSpacing: "8px"}}>{found.conclusion}</p>
                </div>
            </div>
        )
}

export default Content