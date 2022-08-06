export default function Navigation() {
  return (
    <div className="flex flex-row justify-between  items-center">
        <ul className="flex flex-row gap-16">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dash</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="/notes">Notes</a></li>
        </ul>
        <div className="p-2 rounded-lg bg-orange-100 shadow-md">
           <a href="#"> $</a>
        </div>
    </div>
    
  )
}
