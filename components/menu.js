import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.css'


const genreArr = [
    "依存症","薬物乱用","安全対策・労災","健康","医療","メンタルヘルス","精神障がい","身体障がい","制度","法律","マナー","技術","学校",
    "小学生向け","中学生向け","高校生向け","大学生向け","社会人向け","食育","衛生","子育て","防災・防犯","産業","雇用",
    "インフラ","地域振興","歴史","交通","行政","いじめ","高齢者","IT(情報技術)","ハラスメント","年金"
  ]

export default function Menu(){
    const router = useRouter();
    const query = {
        genre: "aaaa"
    }
    const nextPage = (genre) =>{
        query.genre = genre;
        router.push({pathname: "/", query: query})
        console.log("query.genre = " + query.genre)
    } 

    const genreData = []
    const [data, setData] = useState(genreData)
    const [message, setMessage] = useState("ひょい")
    
    useEffect(() => {
        genreData.push(
            genreArr.map((val, index) => 
                <li  className={styles.li} key={index}><a onClick={() => {nextPage(val)}}>{val}</a></li>
            )
        )
        setData(genreData);
        setMessage("ooaa-")
    },[])

    

    return (
        <>
            <ul>
                {data}
            </ul>
                        
        </>

    )

}