import Link from "next/link";

export default function Mehfil() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {/* Card 1 */}
      <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/3 h-auto shadow-xl rounded-3xl transition-all hover:border-s-8">
        <Link href={"/studio/01"}>
          <div className="flex flex-col sm:flex-row items-center p-4">
            {/* Uncomment the Image component below if required */}
            {/* <Image
              src={i1}
              alt="img"
              className="w-full sm:w-40 md:w-48 lg:w-56 rounded-3xl shadow-xl"
            /> */}
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif underline">
                Tanam Farsooda Jan Para
              </h1>
              <p className="text-sm sm:text-base font-sans mt-2">
                Farsi Naat By Moulana Abdul Rehman Jami With Urdu Tazmeen By
                Muhaamid Akhtari
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/3 h-auto shadow-xl rounded-3xl transition-all hover:border-s-8">
        <Link href={"/studio/02"}>
          <div className="flex flex-col sm:flex-row items-center p-4">
            {/* Uncomment the Image component below if required */}
            {/* <Image
              src={i2}
              alt="img"
              className="w-full sm:w-40 md:w-48 lg:w-56 rounded-3xl shadow-xl"
            /> */}
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif underline">
                Assalam Ya Nabi
              </h1>
              <p className="text-sm sm:text-base font-sans mt-2">
                Salam By Mufti E Azam Hind With Mesmerizing Mashup Of Amazing
                Arabic Nasheeds
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
