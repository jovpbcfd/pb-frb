import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1230px] mx-auto mt-10 md:bg-[#181B49]/50 md:p-10">
      <div>
        <h1 className="text-white text-2xl font-bold uppercase text-center md:text-4xl">
          Panalobet Free Registration Bonus
        </h1>
        <div className="h-[1px] w-[90%] mx-auto bg-gray-500 my-5"></div>
      </div>

      <div className="grid grid-cols-1 gap-y-5 mt-10 md:grid-cols-4">
        <div className="w-full flex flex-col items-center gap-5 md:justify-between md:flex-col-reverse">
          <div className="flex items-start">
            <p className="text-white font-bold text-center text-xl">
              <span className="block">Step: 1</span>
              <span>Click Sign Up</span>
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
            <Image
              src="/img/step-one-1.webp"
              height={500}
              width={300}
              alt="Step one of free registration"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5 md:justify-between md:flex-col-reverse">
          <div className="flex items-start">
            <p className="text-white font-bold text-center text-xl">
              <span className="block">Step: 2</span>
              <span>Fill in all the info</span>
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
            <Image
              src="/img/step-two.webp"
              height={500}
              width={300}
              alt="Step two of free registration"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5 md:justify-between md:flex-col-reverse">
          <div className="flex items-start">
            <p className="text-white font-bold text-center text-xl">
              <span className="block">Step: 3</span>
              <span>Click live chat button</span>
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
            <Image
              src="/img/step-three.webp"
              height={500}
              width={300}
              alt="Step three of free registration"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5 md:justify-between md:flex-col-reverse">
          <div className="flex items-start">
            <p className="text-white font-bold text-center text-xl">
              <span className="block">Step: 4</span>
              <span className="text-pretty">
                Ask Customer service to claim the register bonus
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
            <Image
              src="/img/step-four.webp"
              height={500}
              width={300}
              alt="Step four of free registration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
