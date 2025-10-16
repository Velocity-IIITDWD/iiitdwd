// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
// } from "@/components/ui/drawer";
// import { Instagram, Linkedin, Twitter } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface ClubCardProps {
//   name: string;
//   logo?: string;
//   imageUrl?: string;
//   href: string;
//   description: string;
//   memberCount: number;
//   meetingSchedule: string;
//   location: string;
//   president: string;
//   vision: string;
//   mission: string;
//   socials: {
//     instagram?: string;
//     linkedin?: string;
//     twitter?: string;
//   };
// }

// export function ClubCard({
//   name,
//   logo,
//   imageUrl,
//   description,
//   memberCount,
//   meetingSchedule,
//   location,
//   president,
//   vision,
//   mission,
//   socials,
// }: ClubCardProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerDirection, setDrawerDirection] = useState<"bottom" | "right">(
//     "bottom"
//   );

//   useEffect(() => {
//     const updateSize = () => {
//       setDrawerDirection(window.innerWidth >= 1024 ? "right" : "bottom"); // Adjust breakpoint as needed
//     };

//     updateSize(); // Set initial direction
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <>
//       <div
//         className="group cursor-pointer h-full"
//         onClick={() => setIsOpen(true)}
//         role="button"
//         tabIndex={0}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter' || e.key === ' ') {
//             setIsOpen(true);
//           }
//         }}
//       >
//         <Card className="overflow-hidden h-full p-0 gap-0 border shadow-lg transition-all duration-300 group-hover:shadow-2xl bg-white">
//           <div className="relative h-48 w-full flex-none overflow-hidden">
//             {imageUrl ? (
//               <Image
//                 src={imageUrl}
//                 alt={name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             ) : (
//               <div className="relative h-48 w-full bg-gray-200" />
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 pointer-events-none">
//               <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white p-1">
//                 {logo ? (
//                   <Image
//                     src={logo}
//                     alt={`${name} logo`}
//                     fill
//                     className="object-cover "
//                   />
//                 ) : (
//                   <div className="absolute inset-0 bg-gray-200" />
//                 )}
//               </div>
//               <h3 className="text-title-1 font-bold text-white">{name}</h3>
//             </div>
//           </div>

//           <div className="p-6 text-title-3 flex flex-col justify-between h-full">
//             <p className="text-gray-600 line-clamp-3">{description}</p>

//             {/* <div className="flex items-center justify-between text-body">
//               <div className="flex items-center gap-2 text-[#001B3D]">
//                 <Users className="h-5 w-5" />
//                 <span className="font-medium">{memberCount} members</span>
//               </div>
//               <div className="flex items-center gap-2 text-[#001B3D]">
//                 <Calendar className="h-5 w-5" />
//                 <span className="font-medium">{meetingSchedule}</span>
//               </div>
//             </div> */}
//           </div>
//         </Card>
//       </div>

//       {/* Drawer */}
//       <Drawer
//         open={isOpen}
//         onOpenChange={setIsOpen}
//         direction={drawerDirection}
//       >
//         <DrawerContent
//           className={`mx-auto transition-all ${
//             drawerDirection === "right"
//               ? "h-screen w-[400px] md:w-500px]"
//               : "max-h-[85vh] max-w-xl"
//           }`}
//         >
//           <div className="p-6 overflow-y-auto">
//             <DrawerHeader className="px-0 pb-2">
//               <div className="flex items-center gap-4">
//                 <div className="relative h-12 w-12 rounded-full overflow-hidden">
//                   <Image
//                     src={logo!}
//                     alt={`${name} logo`}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <DrawerTitle className="text-large-title font-bold">
//                   {name}
//                 </DrawerTitle>
//               </div>
//               <DrawerDescription className="text-gray-600 mt-2">
//                 {description}
//               </DrawerDescription>
//             </DrawerHeader>

//             <div className="py-2 space-y-4 text-gray-800">
//               <div>
//                 <h4 className="font-semibold">📌 President:</h4>
//                 <p className="text-gray-600">{president}</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold">🎯 Vision:</h4>
//                 <p className="text-gray-600">{vision}</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold">🚀 Mission:</h4>
//                 <p className="text-gray-600">{mission}</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold">📍 Meeting Details:</h4>
//                 <p className="text-gray-600">
//                   {meetingSchedule} at {location}
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold">🔗 Connect with us:</h4>
//                 <div className="flex gap-3 mt-2">
//                   {socials.instagram && (
//                     <a
//                       href={socials.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Instagram className="h-6 w-6 text-[#E1306C] hover:scale-110 transition-transform" />
//                     </a>
//                   )}
//                   {socials.linkedin && (
//                     <a
//                       href={socials.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Linkedin className="h-6 w-6 text-[#0077b5] hover:scale-110 transition-transform" />
//                     </a>
//                   )}
//                   {socials.twitter && (
//                     <a
//                       href={socials.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Twitter className="h-6 w-6 text-[#1DA1F2] hover:scale-110 transition-transform" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <DrawerFooter className="px-0 pt-2">
//               <DrawerClose asChild>
//                 <Button variant="outline">Close</Button>
//               </DrawerClose>
//             </DrawerFooter>
//           </div>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Interface to accommodate all club schemas
interface ClubCardProps {
  name: string;
  _type: "techClubs" | "nonTechClubs" | "culturalClubs";
  slug: string | "undefined";
  logo?: string;
  imageUrl?: string;
  description: string;
  memberCount: number;
  members?: Array<{ name: string; position: string }>;
  meetingDetails?: {
    schedule?: string;
    location?: string;
  };
  vision?: string;
  mission?: string;
  links?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    gmail?: string;
    website?: string;
    github?: string;
  };
}

export function ClubCard({
  name,
  _type,
  logo,
  imageUrl,
  description,
  memberCount,
  meetingDetails,
  members,
  vision,
  mission,
  links,
}: ClubCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState<"bottom" | "right">(
    "bottom"
  );

  useEffect(() => {
    const updateSize = () => {
      setDrawerDirection(window.innerWidth >= 1024 ? "right" : "bottom");
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const sortedMembers = [...(members || [])].sort((a, b) => {
    const posA = a.position?.toLowerCase();
    const posB = b.position?.toLowerCase();

    if (posA === "president") return -1;
    if (posB === "president") return 1;
    if (posA === "vice president") return -1;
    if (posB === "vice president") return 1;

    // Add checks for name to avoid errors if a member name is null
    if (!a.name || !b.name) return 0;
    return a.name.localeCompare(b.name);
  });

  const dynamicHref = `/student-life/clubs/${_type === "nonTechClubs" ? "non-tech" : _type.replace("Clubs", "").toLowerCase()}/${name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <div
        className="group cursor-pointer h-full"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        <Card className="overflow-hidden h-full p-0 gap-0 border shadow-lg transition-all duration-300 group-hover:shadow-2xl bg-white">
          <div className="relative h-48 w-full flex-none overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: "cover" }} // Ensure the image covers the area without distortion
              />
            ) : (
              <div className="relative h-48 w-full bg-gray-200" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 pointer-events-none">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white p-1">
                {logo ? (
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200" />
                )}
              </div>
              <h3 className="text-title-1 font-bold text-white">{name}</h3>
            </div>
          </div>

          <div className="p-6 text-title-3 flex flex-col justify-between h-full">
            <p className="text-gray-600 line-clamp-3">{description}</p>
            {meetingDetails && (
              <div className="flex items-center justify-between text-body mt-4">
                <div className="flex items-center gap-2 text-[#001B3D]">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">{memberCount} members</span>
                </div>
                {/*meetingDetails.schedule && (
                <div className="flex items-center gap-2 text-[#001B3D]">
                  <Calendar className="h-5 w-5" />
                  {<span className="font-medium">
                    {meetingDetails.schedule}
                  </span>}
                </div>
              )*/}
              </div>
            )}
          </div>
        </Card>
      </div>

      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction={drawerDirection}
      >
        <DrawerContent
          className={`mx-auto transition-all ${
            drawerDirection === "right"
              ? "h-screen w-[400px] md:w-500px]"
              : "max-h-[85vh] max-w-xl"
          }`}
        >
          <div className="p-6 overflow-y-auto">
            <DrawerHeader className="px-0 pb-2">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={`${name} logo`}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200" />
                  )}
                </div>
                <DrawerTitle className="text-large-title font-bold">
                  {name}
                </DrawerTitle>
              </div>
              <DrawerDescription className="text-gray-600 mt-2">
                {description}
              </DrawerDescription>
            </DrawerHeader>

            <div className="py-2 space-y-4 text-gray-800">
              {sortedMembers && sortedMembers.length > 0 && (
                <div>
                  <h4 className="font-semibold">👥 Members:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {sortedMembers.map((member, index) => (
                      <li key={index} className="text-gray-600">
                        <span className="font-medium">{member.name}</span> -{" "}
                        {member.position}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {vision && (
                <div>
                  <h4 className="font-semibold">🎯 Vision:</h4>
                  <p className="text-gray-600">{vision}</p>
                </div>
              )}
              {mission && (
                <div>
                  <h4 className="font-semibold">🚀 Mission:</h4>
                  <p className="text-gray-600">{mission}</p>
                </div>
              )}
              {/* {meetingDetails?.schedule && meetingDetails?.location && (
                <div>
                  <h4 className="font-semibold">📍 Meeting Details:</h4>
                  <p className="text-gray-600">
                    {meetingDetails.schedule} at {meetingDetails.location}
                  </p>
                </div>
              )} */}
              {links &&
                (links.instagram ||
                  links.linkedin ||
                  links.twitter ||
                  links.gmail ||
                  links.website ||
                  links.github) && (
                  <div>
                    <h4 className="font-semibold">🔗 Connect with us:</h4>
                    <div className="flex gap-3 mt-2">
                      {links.instagram && (
                        <a
                          href={links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} Instagram`}
                        >
                          <Instagram className="h-6 w-6 text-[#E1306C] hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {links.linkedin && (
                        <a
                          href={links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} LinkedIn`}
                        >
                          <Linkedin className="h-6 w-6 text-[#0077b5] hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {links.twitter && (
                        <a
                          href={links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} Twitter`}
                        >
                          <Twitter className="h-6 w-6 text-[#1DA1F2] hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {links.gmail && (
                        <a
                          href={`mailto:${links.gmail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} Email`}
                        >
                          <Mail className="h-6 w-6 text-gray-600 hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {links.website && (
                        <a
                          href={links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} Website`}
                        >
                          <Globe className="h-6 w-6 text-gray-600 hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} GitHub`}
                        >
                          <Github className="h-6 w-6 text-gray-800 hover:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
            </div>

            <DrawerFooter className="px-0 pt-2 max-w-full flex flex-col gap-2">
              <Link href={dynamicHref} className="w-full">
                <Button className="w-full" variant="outline">
                  Know More
                </Button>
              </Link>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
