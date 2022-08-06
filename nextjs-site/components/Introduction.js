import Image from "next/image"
export default function Introduction() {
  return (
    <div className="h-2/3 flex justify-between items-center">
        <div id="title">
            <h1>Jason-Kyle De Lara</h1>
            <h3>Full Stack Web Developer at ICP DAS USA.</h3>
        </div>
        <div id="img">
            <Image className="rounded-full bg-transparent" src="/me.JPG" width="300" height="300" />
        </div>
    </div>
  )
}
