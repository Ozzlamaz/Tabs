function Tab({title,dates,duties,company}) {
  return (
    <div className="max-w-4xl ml-5">
        <h2 className="mb-2">{title}</h2>
        <h4 className="mb-2 p-1 bg-green-300 max-w-fit rounded">{company}</h4>
        <h6 className="mb-6 text-slate-500">{dates}</h6>
        <ul className="pl-5">
            {duties.map((duty,index) => {
                return <li className="list-disc sm:pl-5 mb-3" key={index}>{duty}</li>
            })}
        </ul>
    </div>
  )
}
export default Tab