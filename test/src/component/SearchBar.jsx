export function SerachBar({query,onChangeQuery}){

    return (
        <input type="text" value={query} className="border border-2 
        border-primary-800" 
        onChange={(e)=>{onChangeQuery(e.target.value)}} />
    )
}