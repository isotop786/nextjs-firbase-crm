import {doc, deleteDoc, onSnapshot, collection, addDoc, query, where, serverTimestamp, orderBy, Timestamp} from 'firebase/firestore'
import db from './firebase';


// Category Services
export const addCategories = async (name: string) =>{
    try{
        await addDoc(collection(db, "categories"),{
            name
        })
        console.log(name+" >> has added.")
    }
    catch(err)
    {
        console.error("error >> "+err)
    }
}


// Category Services End