import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image 
      src="/logo.png" 
      alt="logo of this project" 
      width={80} 
      height={80} 
      />
      <span className="text-xl font-bold text-white hover:text-[#1D4EC2]">LAMARE</span>
    </div>
  )
}
