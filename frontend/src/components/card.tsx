export default function Card({value,color}){
    return (
        <div className={`p-4 bg-${color}`}>{value}</div>
    )

}