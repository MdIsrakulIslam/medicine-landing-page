import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
<Image
  src="/logo.png"
  alt="logo of this project"
  width={80}
  height={80}
  className="w-20 h-20 md:w-18 md:h-18 lg:w-16 lg:h-16 xl:h-20 xl:w-20"
/>

      <span
        className="text-xl font-bold text-white hover:text-[#1D4EC2] select-none"
        style={{
          fontFamily: "Sniglet",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "30px",
          lineHeight: "60px",
        }}
      >
        LAMARE
      </span>
    </div>
  );
}
