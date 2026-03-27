import ChairpersonTabs from "@/components/chairperson-tabs";
import Profile from "../director/profile";

export default function Page(): JSX.Element {
  return (
    <>
      <Profile
        image="https://iiitdwd.ac.in/images/Sridhar%20Vembu.webp"
        name="Dr. Sridhar Vembu"
        position="Immediate Former Chairperson, Board of Governors"
        quote={``}
        about={[
          `It gives me immense pride to address the vibrant and growing community of young minds at IIIT Dharwad, an Institute of National Importance built on the foundation of excellence, innovation, and inclusivity.`,
          `As the Chairperson of the Board of Governors, it is both an honour and a responsibility to guide an institution that not only imparts technical education, but also fosters ethical leadership, social responsibility, and purposeful innovation.`,
        ]}
        message={[
          `As you embark on your journey through the ever-evolving world of technology, I urge you to look beyond the conventional. The future will not be shaped by degrees alone, but by the depth of your curiosity, the practicality of your skills, and the authenticity of your intent. A vision without committed action remains a distant dream, but when purpose and perseverance come together, transformation becomes inevitable.`,
          `India's strength lies not just in its cities, but also in its villages, small towns, and the untapped potential scattered across our vast landscape. At Zoho, and in my personal journey, I have seen firsthand that real transformation happens at the grassroots. Whether in urban hubs or rural communities, talent knows no boundaries. Let us not limit our dreams to glass towers in metros, India's rural heartland holds immense potential, waiting for innovators like you to engage, build, and uplift.`,
          `IIIT Dharwad, nestled in the twin cities of Hubballi-Dharwad, is uniquely positioned to bridge the aspirations of cutting-edge technology with the grounded realities of India. With a strong academic foundation in Computer Science, Electronics, and Data Science & AI, this institute is emerging as a catalyst for decentralized and inclusive innovation, not just for Karnataka, but for the nation at large.`,
          `While you acquire domain knowledge and technical expertise, I encourage you to also develop roots in values like integrity, humility, and service. True success is not measured by titles or wealth, but by your ability to contribute meaningfully to society while staying grounded in your principles.`,
          `To the students of IIIT Dharwad: dream boldly, stay grounded, and build with purpose. You are not just preparing for jobs, you are preparing to lead India into a future where innovation is rooted in values, and where education becomes a force for empowerment and positive change.`,
          `Let us build that future together.`,
          `Warm regards,`,
        ]}
        signatureText="Dr. Sridhar Vembu"
        signaturePosition="Immediate Former Chairperson, BoG, IIIT Dharwad"
      />
      <ChairpersonTabs />
    </>
  );
}
