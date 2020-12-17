import {useRouter} from 'next/router'

export default function Person({ownersList}){
    const router = useRouter()
    const {person,vehicle}=router.query
    return (
        <pre>{JSON.stringify(ownersList,null,4)}</pre>
    )
}

Person.getInitialProps = async (ctx)=>{
    const {query} = ctx
    const response = await fetch('http://localhost:4001/vehicle?ownersName='+query.person+'&vehicle='+query.vehicle)
    const ownersList = await response.json()
    return {
        ownersList: ownersList
    } 
}