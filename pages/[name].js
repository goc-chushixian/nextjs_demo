import { useRouter } from "next/router"
export default function About(){
    const {query} = useRouter();
    console.log('====================================');
    // console.log(query);
    console.log('====================================');
    return (
        <div>about</div>
    )
}