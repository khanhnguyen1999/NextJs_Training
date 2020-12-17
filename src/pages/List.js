import Link from 'next/link'
import {useEffect,useState} from 'react'

export default function List({ownersList}){
    // const [owners,setOwners]=useState([])
    // useEffect(()=>{
    //     async function loadData(){
    //         const response = await fetch('http://localhost:5000/api/cans/getcans')
    //         const ownersList = await response.json()
    //         setOwners(ownersList)
    //     }
    //     loadData()
    // },[])
    // console.log("item ",owners)
    return (
        <div>
            {
                ownersList && ownersList.map((item,index)=>(
                    <div key={index}>
                        <Link as={`/${item.vehicle}/${item.ownerName}`} href="/[vehicle]/[person]">
                            <a>
                                Navigate to {item.ownerName}'s {item.vehicle}
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
List.getInitialProps = async ()=>{
    const response = await fetch('http://localhost:4001/vehicle')
    const ownersList = await response.json()
    console.log("checking ",ownersList)
    return {ownersList: ownersList} 
}