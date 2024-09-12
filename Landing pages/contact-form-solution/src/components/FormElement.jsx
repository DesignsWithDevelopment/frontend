export default function FormElement({title}){
    return <div>
        <div>{title}</div>
        <input type="text" className="border border-gray-500 rounded w-80 h-10"/>
    </div>
}