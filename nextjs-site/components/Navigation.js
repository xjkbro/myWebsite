export default function Navigation() {
  return (
    <div className="flex flex-row justify-between  items-center my-8">
        <ul className="flex flex-row gap-16">
            <li className="font-bold text-lg hover:text-sixth"><a href="/">Home</a></li>
            <li className="font-bold text-lg hover:text-sixth"><a href="/dash">Dash</a></li>
            <li className="font-bold text-lg hover:text-sixth"><a href="/work">Work</a></li>
            <li className="font-bold text-lg hover:text-sixth"><a href="/notes">Notes</a></li>
        </ul>
        {/* <div className="p-2 rounded-full h-12 w-12 bg-orange-100 shadow-md">
           <a className="" href="#"> $</a>
        </div> */}
    </div>
    
  )
}
