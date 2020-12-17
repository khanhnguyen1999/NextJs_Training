import Link from 'next/link'

const peoples = [
    {v: "lambor",name:"khanh"},
    {v: "ferarri",name:"test"},
    {v: "bmw",name:"huy"}
]

export default function Details(){
    return (
        <div>
            {
                peoples.map(e=>(
                    <div>
                        <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                            <a>{`Navigate to ${e.name}'s ${e.v}`}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}