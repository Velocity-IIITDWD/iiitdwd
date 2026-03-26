import ChairpersonTabs from "@/components/chairperson-tabs";
import Profile from "../director/profile";

export default function Page(): JSX.Element {
  return (
    <>
      <Profile
        image="/images/sudha_murty.jpg"
        name="Smt. Sudha Murty"
        position="Founding Chairperson, BoG, IIIT Dharwad"
        quote={``}
        about={[
          `It gives me immense pride to address the vibrant and growing community of young minds at IIIT Dharwad, an Institute of National Importance built on the foundation of excellence, innovation, and inclusivity.`,
          `As the Founding Chairperson of the Board of Governors, it is both an honour and a responsibility to guide an institution that not only imparts technical education, but also fosters ethical leadership, social responsibility, and purposeful innovation.`,
        ]}
        message={[
          `As the Founding Chairperson of the Board of Governors of IIIT Dharwad, I would like to share a slice of wisdom with the young generation around us: vision without action is merely a dream; action without vision is merely passing time; but vision and action together can change the world.`,
          `We can give our children only two things in life which are essential: strong roots and powerful wings. Afterwards, they may fly anywhere and live independently; of all the luxuries in life, the greatest one is getting freedom of the right kind.`,
          `To come up in life, the young generation requires talent, hard work, drive, and ability to communicate genuinely with people. With my experience in life, I feel that having good relationships, compassion, and peace of mind is much more important than achievements, awards, degrees, or money.`,
          `Hence, we should always have a definite aim in life which we must try to achieve while being of help to others. I wish IIIT Dharwad great success in shaping young minds into professionals with the best of skills coupled with the highest of values.`,
          `Warm regards,`,
        ]}
        signatureText="Smt. Sudha Murty"
        signaturePosition="Founding Chairperson, BoG, IIIT Dharwad"
      />
      <ChairpersonTabs />
    </>
  );
}
