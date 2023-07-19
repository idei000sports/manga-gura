import { app } from '../../components/fire';
import { getFirestore, collection, getDocs, where , query} from 'firebase/firestore/lite';
import styles   from '../../styles/Table.module.css'
import { useState, useEffect } from 'react'

const db = getFirestore(app);



export default function List(){
    const mydata = []
    const [data, setData] = useState(mydata)
    const [message, setMessage] = useState('add manga');
    useEffect(() => {
        getDocs(collection(db, 'manga')).then((snapshot)=> {
        snapshot.forEach((document)=> {
            const doc = document.data()


            mydata.push(
                <>
                    <p>ここから</p>
                    <ul key={document.id}>
                    {
                        doc.genre.map((val, index) => 
                                <li key={index}>{val}</li>
                        )
                    }
                    </ul>
                    <p>ここまで</p>
                </>
            )
        })
        setData(mydata)
        setMessage("set完了")
        })
    },[])


    return (

        <>
            <h5 className="mb-4">{message}</h5>
            <ul>{data}</ul>
            <div></div>     
        </>

    )

}