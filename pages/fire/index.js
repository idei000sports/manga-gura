
import { app } from '../../components/fire';
import { getFirestore, collection, getDocs, where, query} from 'firebase/firestore/lite';
import { useState, useEffect } from 'react'

const db = getFirestore(app);
/*
const q = query(collection(db, 'mydata'), where("age", "==", "39"))
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id);
});
*/


export default function Home() {
  const mydata = []
  const [data, setData] = useState(mydata)
  const [message, setMessage] = useState('wait...')

  useEffect(() => {
    
    getDocs(query(collection(db, 'mydata'), where("mail", "==", "taro@yamada"))).then((snapshot)=> {
      snapshot.forEach((document)=> {
        const doc = document.data()
        mydata.push(
          <tr key={document.id}>
            <td><a href={'/fire/del?id=' + document.id}>
                {document.id}</a></td>
            <td>{doc.name}</td>
            <td>{doc.mail}</td>
            <td>{doc.age}</td>
          </tr>
        )
      })
      setData(mydata)
      setMessage('Firebase data.')
    })
  }, [])


  return (
    <div>
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <table className="table bg-white text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    </div>
  )
}

