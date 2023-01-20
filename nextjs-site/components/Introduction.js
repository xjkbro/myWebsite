import Image from "next/image"
export default function Introduction() {
  return (
    <>
        <div className="h-screen flex justify-between items-center flex-col lg:flex-row">
            <div className="md:w-2/3 w-full mx-auto my-12" id="title">
                <h1 className="text-[3rem] font-black">Jason-Kyle De Lara</h1>
                <h3 className="text-[2rem] font-bold">Full Stack Web Developer at ICP DAS USA.</h3>
            </div>
            <div className="md:w-1/3 w-full mx-auto my-12" id="img">
                <Image className="rounded-full bg-transparent" src="/me.JPG" width="300" height="300" />
            </div>
        </div>
        
    </>
  )
}

