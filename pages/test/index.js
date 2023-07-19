import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
    const query = {
        id: 1,
        num: 1
    }

    const router = useRouter();
    
    const nextPage = (num) =>{
        query.num = num;
        router.push({pathname: "/test/page", query: query}, "/test/page")
    } 
    


    return (
        <>
            <button onClick={() => nextPage("1")}>1pageへ遷移する</button>
            <button onClick={() => nextPage("2")}>2pageへ遷移する</button>
            <button onClick={() => nextPage("3")}>3pageへ遷移する</button>
        </>
    )
}