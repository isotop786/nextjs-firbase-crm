"use client"
import React,{useState, useEffect,FormEventHandler} from 'react'
import { useRouter } from 'next/navigation'
import {addCategories} from '../../../services';

interface User {
    email: string | null,
    uid: string | null
}

interface Item{
    name: string,
    id: string,
    number_of_products: number
}

const CategoryPage = () => {

    const [user, setUser] = useState<User>();
    const [categoryName, setCategoryName] = useState<string>("")
    const [categories, setCategories] = useState([])
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        // alert(categoryName)
        addCategories(categoryName)
    }

  return (
    <main className='flex w-full min-h-[100vh] relative'>
        <div className='md:-w[85%] w-full py-4 px-6 min-h-[100vh] bg-[#f4f4f4]'>

        <section className="w-full mb-10">
                <h3 className="text-lg mb-4">Add Category</h3>
                    <form className="w-full flex items-center space-x-6" onSubmit={handleSubmit}>
                            <input className="border-b-[1px] px-4 py-2 w-1/2 rounded" 
                            type="text" 
                            placeholder="Category" 
                            name="name" id="name" 
                            required 
                            value={categoryName} 
                              onChange={e => setCategoryName(e.target.value)} 
                            />
                       
                        <button className="py-2 px-4 bg-blue-500 text-white rounded" type="submit">Add Category</button>
                    </form>
                </section>  
        </div>
    </main>
  )
}

export default CategoryPage