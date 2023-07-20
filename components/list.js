import { app } from '../components/fire';
import { getFirestore, collection, getDocs, where , query} from 'firebase/firestore/lite';
import styles   from '../styles/Table.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const db = getFirestore(app);




export default function List(){
    const router = useRouter();
    const mydata = []
    const [data, setData] = useState(mydata)
    //ブラウザのパスからジャンルを選択できるようにした。
    const genrePath = decodeURI(router.asPath).slice(1)



    useEffect(() => {
        if(router.query.genre == undefined || router.query.genre == null || router.query.genre == "") {
            router.query.genre = "依存症"
        }
        //[router.query.genre]


        getDocs(query(collection(db, 'manga'), where("genre", "array-contains" , router.query.genre))).then((snapshot)=> {
            snapshot.forEach((document)=> {
                const doc = document.data()
                console.log("list.js doc : ↓↓↓");
                console.log(doc)
                mydata.push(
                    <>
                        <div className="card">
                            <div className="card-header" key={document.id}>
                                <div className="d-flex flex-row-reverse">
                                    {
                                        //JSX内は即時関数を使えばif文書ける
                                        (function (){
                                            if(doc.day == undefined){
                                                return doc.year + "/" + doc.month
                                            }else {
                                                return doc.year + "/" + doc.month + "/" + doc.day
                                            }
                                        }())
                                    }
                                </div>
                            </div>
                            <div className="card-body">
                                    <h2 className="card-title">{doc.title}</h2>
                                    <h3 className="card-subtitle">{doc.subtitle}</h3>
                                    <div className="d-flex flex-row">
                                        {
                                            doc.genre.map((val, index) => 
                                                <div className="card-text" key={index}>[ {val} ]</div>
                                            )
                                        }
                                    </div>
                                    <div className="card-text">{doc.site}</div>
                                    <div className="card-text"><a href={doc.url}>{doc.url}</a></div>
                                    <div className="card-text">{doc.writer}</div>
                                    <div className="card-text">{doc.production}</div>
                                    <div className="card-text">{doc.plan}</div>
                                    <div className="card-text">{doc.cooperation}</div>
                            </div>
                        </div>
                    </>
                )
            })

        
        setData(mydata)
        //↓これ消すと表示されなくなるんだけど何？？？？？？（これが更新を兼ねてるっぽい）
        //setMessage(router.query.genre)

        })
        
        console.log("useeffect")

    },[router.query.genre])


    return (
        <>
            <div>
                <h1>{router.query.genre}</h1>
                <div>{data}</div>     
            </div>
        </>

    )

}