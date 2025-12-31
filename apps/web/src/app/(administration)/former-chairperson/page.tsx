import Image from "next/image";

export default function Page(): JSX.Element {
  const data = {
    image: "https://iiitdwd.ac.in/images/Sridhar%20Vembu.webp",
    name: "Dr. Sridhar Vembu",
    position: "Former Chairperson, IIIT Dharwad",
  };

  return (
    <main className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#eef2ff] rounded-xl shadow-2xl p-6 md:p-10 flex items-center gap-4 md:gap-10">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                {data.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mt-1">
                {data.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
