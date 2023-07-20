import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";




export default function Page(){
    const router = useRouter();

    console.log(router.query.num)
    const arr = ["1","2","3","4","5","6","7","8","9","10"]
    const mydata = []
    const [data, setData] = useState(mydata)
    const [message, setMessage] = useState("useEffect前")

    useEffect(() => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == router.query.num){
                console.log("if文で一致したよ")
                mydata.push(
                    <p>{arr[i]}</p>
                )
            }
        }

        setData(mydata)
        setMessage("mese-ji")
      }, [])
    

    return(
        <>
            {/* Linkじゃなくてaつかったらページ全体リフレッシュ、Linkなら必要な箇所だけ */}
            <Link href="/test">Homeへ</Link>
            <div>{data}</div>

        </>
    )

}