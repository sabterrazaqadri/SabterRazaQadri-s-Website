import React from "react";
import Image from "next/image";
import i1 from "./Images/i1.png";
import i2 from "./Images/i2.webp";
import i3 from "./Images/i3.webp";
import Link from "next/link";

export default function Studio() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {/* Card 1 */}
      <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/3 h-auto shadow-xl rounded-3xl transition-all hover:border-s-8">
        <Link href={"/studio/01"}>
          <div className="flex flex-col sm:flex-row items-center p-4">
            <Image
              src={i1}
              alt="img"
              className="w-full sm:w-40 md:w-48 lg:w-56 rounded-3xl shadow-xl"
            />
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
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
            <Image
              src={i2}
              alt="img"
              className="w-full sm:w-40 md:w-48 lg:w-56 rounded-3xl shadow-xl"
            />
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
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

      {/* Card 3 */}
      <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/3 h-auto shadow-xl rounded-3xl transition-all hover:border-s-8">
        <Link href={"/studio/03"}>
          <div className="flex flex-col sm:flex-row items-center p-4">
            <Image
              src={i3}
              alt="img"
              className="w-full sm:w-40 md:w-48 lg:w-56 rounded-3xl shadow-xl"
            />
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif underline">
                Welcome O Mustafa
              </h1>
              <p className="text-sm sm:text-base font-sans mt-2">
                Mesmerizing Meelad Kalam Composed & Recited By Sabter Raza
                Qadri
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Add more cards similarly */}
    </div>
  );
}
