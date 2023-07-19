
import { app } from '../../components/fire';
import { getFirestore, collection, getDocs, addDoc, where , query} from 'firebase/firestore/lite';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles   from '../../styles/Table.module.css'

const db = getFirestore(app);

export default function add_manga() {
  const mydata = []
  const [data, setData] = useState(mydata)
  const [message, setMessage] = useState('add manga');
  const genres = []
  const [genreList, setGenreList] = useState(genres)

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [writer, setWriter] = useState('')
  const [production, setProduction] = useState('')
  const [plan, setPlan] = useState('')
  const [cooperation, setCooperation] = useState('')
  const [site, setSite] = useState('')
  const [url, setUrl] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [genre0, setGenre0] = useState('')
  const [genre1, setGenre1] = useState('')
  const [genre2, setGenre2] = useState('')
  const [genre3, setGenre3] = useState('')
  const [genre4, setGenre4] = useState('')

  //10個

  const router = useRouter();




  const onChangeTitle = ((e) => {
    setTitle(e.target.value)
  })
  const onChangeSubtitle = ((e) => {
    setSubtitle(e.target.value)
  })

  const onChangeWriter = ((e) => {
    setWriter(e.target.value)
  })
  const onChangeProdctuion = ((e) => {
    setProduction(e.target.value)
  })
  const onChangePlan = ((e) => {
    setPlan(e.target.value)
  })
  const onChangeCooperation = ((e) => {
    setCooperation(e.target.value)
  })
  const onChangeSite = ((e) => {
    setSite(e.target.value)
  })
  const onChangeUrl = ((e) => {
    setUrl(e.target.value)
  })
  const onChangeYear = ((e) => {
    setYear(e.target.value)
  })
  const onChangeMonth = ((e) => {
    setMonth(e.target.value)
  })
  const onChangeDay = ((e) => {
    setDay(e.target.value)
  })
  const onChangeGenre0 = ((e) => {
    console.log("onchangegenre0 etargetvalue" + e.target.value);
    setGenre0(e.target.value)
  })
  const onChangeGenre1 = ((e) => {
    setGenre1(e.target.value)
  })
  const onChangeGenre2 = ((e) => {
    setGenre2(e.target.value)
  })
  const onChangeGenre3 = ((e) => {
    setGenre3(e.target.value)
  })
  const onChangeGenre4 = ((e) => {
    setGenre4(e.target.value)
  })
  //10個


  const doAction = ((e) => {
    const ob = {
        title:title,
        subtitle:subtitle,
        writer:writer,
        production:production,
        plan:plan,
        cooperation:cooperation,
        site:site,
        url:url,
        year:year,
        month:month,
        day:day,
        genre:[genre0, genre1, genre2, genre3, genre4]
        //10個
    }
    addDoc(collection(db, 'manga'), ob).then(ref=>{
        alert('追加した')
        router.push('/fire/add_manga')
    })

  })
  useEffect(() => {
    getDocs(query(collection(db, 'genre'))).then((snapshot)=> {
      genres.push(<option value={"-"} key="-">{"-"}</option>)
      snapshot.forEach((document, index)=> {
        const genreDoc = document.data()
        genres.push(
          <option value={genreDoc.name} key={index}>{genreDoc.name}</option>
        )
      })
    })
    setGenreList(genres)

    getDocs(query(collection(db, 'manga'))).then((snapshot)=> {
      snapshot.forEach((document, index)=> {
        const doc = document.data()
        mydata.push(
          <div className={styles.big} key={index}>
              <div className={styles.container}>
                  <div className={styles.id}>{document.id}</div>
                  <div className={styles.date}>{doc.year + "/" + doc.month + "/" + doc.day}</div>
              </div> 
              
              <div className={styles.title}>{doc.title}</div>
              <div className={styles.subtitle}>{doc.subtitle}</div>
              <ul>
                {
                    doc.genre.map((val, index) => 
                        <li key={index}>{val}</li>
                    )
                }
              </ul>
              <div className={styles.site}>{doc.site}</div>
              <div className={styles.url}>URL:<a href={doc.url}>{doc.url}</a></div>
              <div className={styles.writer}>{doc.writer}</div>
              <div className={styles.production}>{doc.production}</div>
              <div className={styles.plan}>{doc.plan}</div>
              <div className={styles.cooperation}>{doc.cooperation}</div>
          </div>
        )//mydata
      })
      setData(mydata)
      setMessage('漫画追加画面')
    })
  }, [])


  return (
    <>
    <div className="container">
    <div className="row">



      <div className="col-md-6">
      <h5 className="mb-4">{message}</h5>
      <div>{data}</div>
      </div>
      <div className="col-md-6">
      <form>
        <div className="mb-0">
          <label>タイトル:</label>
          <input type="text" onChange={onChangeTitle}
              className="form-control" />
        </div>

        <div className="mb-0">
          <label>サブタイトル:</label>
          <input type="text" onChange={onChangeSubtitle}
            className="form-control" />
        </div>

        <div className="mb-0">
          <label>作者:</label>
          <input type="text" onChange={onChangeWriter}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>制作会社:</label>
          <input type="text" onChange={onChangeProdctuion}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>企画:</label>
          <input type="text" onChange={onChangePlan}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>協力:</label>
          <input type="text" onChange={onChangeCooperation}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>サイト名:</label>
          <input type="text" onChange={onChangeSite}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>URL:</label>
          <input type="text" onChange={onChangeUrl}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>発行日:</label>
          <input type="text" onChange={onChangeYear}
            className="form-control" />
          <input type="text" onChange={onChangeMonth}
            className="form-control" />
          <input type="text" onChange={onChangeDay}
            className="form-control" />
        </div>
        <div className="mb-0">
          <label>ジャンル:</label>
          <select onChange={onChangeGenre0}>{genreList}</select>
          <select onChange={onChangeGenre1}>{genreList}</select>
          <select onChange={onChangeGenre2}>{genreList}</select>
          <select onChange={onChangeGenre3}>{genreList}</select>
          <select onChange={onChangeGenre4}>{genreList}</select>
        </div>
        <button onClick={doAction} className="btn btn-primary">
          Add
        </button>

      </form>
      </div>
  


    </div>
    </div>
    </>
  )
    
}

