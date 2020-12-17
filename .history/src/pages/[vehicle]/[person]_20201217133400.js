import {useRouter} from 'next/router'

export default function Person(){
    const router = useRouter()
    const {person,vehicle}=router.query
    console.log(router.query)
    return (
        <>
            <h2>Vehicle: {vehicle}</h2>
            <h2>{person}'s car</h2>
        </>
    )
}