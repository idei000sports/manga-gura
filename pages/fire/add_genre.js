
import { app } from '../../components/fire';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const db = getFirestore(app);


export default function Add_genre() {
  const mydata = []
  const [data, setData] = useState(mydata)
  const [message, setMessage] = useState('add data');

  const [name, setName] = useState('')
  const [kana, setKana] = useState('')

  const router = useRouter();
  //表示
  useEffect(() => {
    
    getDocs(collection(db, 'genre')).then((snapshot)=> {
      snapshot.forEach((document)=> {
        const doc = document.data()
        mydata.push(
          <tr key={document.id}>
            <td>{document.id}</td>
            <td>{doc.name}</td>
            <td>{doc.kana}</td>
          </tr>
        )
      })
      setData(mydata)
      setMessage('ジャンル追加画面')
    })
  }, [])



  const onChangeName = ((e) => {
    setName(e.target.value)
  })

  const onChangeKana = ((e) => {
    setKana(e.target.value)
  })

  const doAction = ((e) => {
    const ob = {
        name:name,
        kana:kana
    }
    addDoc(collection(db, 'genre'), ob).then(ref=>{
        alert(ob.name + ob.kana + '追加した')
        router.push('/fire/add_genre')
    })

  })


  return (
    <div>
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <div className="text-left">
          <div className="form-group">
            <label>ジャンル名:</label>
            <input type="text" onChange={onChangeName}
              className="form-control" />
          </div>
          <div className="form-group">
            <label>カナ（アルファベット):</label>
            <input type="text" onChange={onChangeKana}
              className="form-control" />
          </div>
        </div>
        <button onClick={doAction} className="btn btn-primary">
          Add
        </button>
      </div>

      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <table className="table bg-white text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>サブタイトル</th>
              <th>作者</th>
              <th>制作会社</th>
              <th>企画</th>
              <th>協力</th>
              <th>サイト名</th>
              <th>URL</th>
              <th>発行日</th>
              <th>ジャンル</th>
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

