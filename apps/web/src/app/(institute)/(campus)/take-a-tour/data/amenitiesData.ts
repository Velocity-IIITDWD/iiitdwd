export interface BlockData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
}

export const blocksData: BlockData[] = [
  {
    id: 'm-block',
    name: 'M Block',
    subtitle: 'Multi-Purpose Hall',
    description:
      'The vibrant hub of campus life, M Block serves as a versatile venue for sports, cultural events, technical activities, and large gatherings. From intense badminton matches to hackathon nights, this space adapts to every occasion.',
    features: [
      'Indoor sports facilities: Chess, Carrom, Table Tennis, Arm Wrestling',
      'Full-size Basketball Court with professional flooring',
      'Two dedicated Badminton Arenas with standard markings',
      'Hackathon and technical event hosting capability',
      'Cultural celebrations and festival venues',
      'Multi-purpose auditorium for assemblies and performances',
      'DJ nights and entertainment event infrastructure',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/M_Block.webp',
      'https://assets.iiitdwd.ac.in/images/M_Block1.NEF',
      'https://assets.iiitdwd.ac.in/images/M_Block2.NEF',
      'https://assets.iiitdwd.ac.in/images/M_Block3.NEF',
      'https://assets.iiitdwd.ac.in/images/M_Block4.NEF',
    ],
  },
  {
    id: 'pi-block',
    name: 'Pi Block (π)',
    subtitle: 'Administration & Research Hub',
    description:
      'The administrative nerve center and innovation headquarters of IIIT Dharwad. Pi Block houses key offices, cutting-edge research laboratories, and the expansive Knowledge Resource Centre for collaborative study.',
    features: [
      "Director's Office and Registrar's Office",
      'Senate Hall for institutional governance',
      'VLSI Laboratory for semiconductor research',
      '5G Research and Testing Laboratory',
      'Drones and Automation Laboratory',
      'Quantum Computing Research Lab',
      'Robotics and AI/ML Laboratories',
      'Knowledge Resource Centre (KRC) – 24/7 open study space',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/PiBlock.webp',
      'https://images.unsplash.com/photo-1581092921461-eab10380ed6a?w=800&q=80',
      'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=800&q=80',
    ],
  },
  {
    id: 'e-block',
    name: 'E Block',
    subtitle: 'Academic & Education Wing',
    description:
      'The academic heart of the institute, E Block brings together faculty expertise, modern classrooms, and comprehensive laboratory facilities under one roof. Every corner is designed to foster learning and intellectual growth.',
    features: [
      'Faculty chambers and Head of Department offices',
      'Smart classrooms with advanced audio-visual systems',
      '240-seater main auditorium for lectures and seminars',
      '120-seater large smart classrooms',
      'Computer hardware and software laboratories',
      'Digital learning infrastructure',
      'Collaborative project spaces',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/E_Block.webp',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    ],
  },
  {
    id: 'library',
    name: 'Central Library',
    subtitle: 'Knowledge Repository',
    description:
      'A treasure trove of knowledge spanning computer science, literature, mythology, and culture. The library features smart RFID-based book tracking, silent reading zones, and extensive digital resources for comprehensive research.',
    features: [
      'Extensive collection of Computer Science and Programming texts',
      'Machine Learning and Artificial Intelligence resources',
      'Fiction, novels, and contemporary literature',
      'Mythology, Sanskrit, and cultural heritage books',
      'RFID smart monitoring and checkout system',
      'Digital e-resources and online journal access',
      'Silent study zones and reading halls',
      'Extended operating hours during examinations',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/Library.jpg',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    ],
  },
  {
    id: 'b-block',
    name: 'B Block',
    subtitle: "Boys' Hostel",
    description:
      'Residential facility designed for focused academic life and community bonding. Spacious rooms, essential amenities, and recreational spaces create an environment conducive to both study and relaxation.',
    features: [
      'Capacity for 600+ residents across multiple floors',
      'Well-furnished rooms with study tables and storage',
      'Dining hall with 200+ seating capacity',
      'Multiple cuisine options in the mess',
      'Laundromat services on premises',
      'Common recreation hall with Table Tennis and TV',
      'High-speed Wi-Fi and 24/7 security',
      'Power backup and water supply systems',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/B_Block.webp',
      'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=800&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80',
    ],
  },
  {
    id: 'g-block',
    name: 'G Block',
    subtitle: "Girls' Hostel",
    description:
      'A modern residential facility constructed with support from Infosys Foundation, prioritizing comfort, privacy, and superior living standards. Contemporary design meets practical amenities for an ideal living experience.',
    features: [
      'Capacity for 300+ residents',
      'Built with Infosys CSR Initiative support',
      'Premium interiors and contemporary design',
      'Well-regarded mess with excellent food quality',
      'Advanced security systems and access control',
      'Dedicated community and recreation spaces',
      'Complete Wi-Fi coverage',
      'Enhanced privacy and comfortable living',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/G_Block.webp',
      'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&q=80',
    ],
  },
  {
    id: 'h-block',
    name: 'H Block',
    subtitle: 'Health & Recreation Centre',
    description:
      'Dedicated to physical wellness and creative pursuits, H Block offers comprehensive healthcare, fitness facilities, and recreational amenities. From medical consultations to badminton matches, every wellness need is addressed.',
    features: [
      'On-campus medical clinic with 24/7 basic healthcare',
      'Fully equipped modern gymnasium',
      'International-standard indoor badminton courts',
      'Yoga and wellness activity space',
      'Art room and creative studio',
      'Private canteen and refreshment area',
      'Stationery and convenience store',
      'Open veranda and outdoor relaxation zones',
    ],
    images: [
      'https://assets.iiitdwd.ac.in/images/H_Block.webp',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    ],
  },
];
