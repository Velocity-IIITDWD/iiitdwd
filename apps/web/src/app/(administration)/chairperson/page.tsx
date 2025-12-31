import Profile from "../director/profile";

export default async function Page() {
  return (
    <Profile
      image="/images/jalaj_dani.jpeg"
      email="chairperson@iiitdwd.ac.in"
      name="Mr. Jalaj Dani"
      position="Chairperson, IIIT Dharwad"
      quote={``}
      about={[
        `Co-Promoter, Asian Paints | Business Leader & Philanthropist | Chairperson, Dani Foundation | Chairman, IIM Tiruchirappalli`,

        `Mr. Jalaj Dani is a respected business leader, institution-builder, and philanthropist whose contributions span industry leadership, professional sports development, public health, education, and social impact. As Chairman of the Indian Institute of Management Tiruchirappalli, he is actively engaged in governance, academic development, and strategic direction.`,

        `As Co-Promoter of Asian Paints Limited, one of the world’s leading paints and coatings companies, he has played a pivotal role in shaping the organization’s international expansion, supply chain excellence, people development, and adjacencies in chemicals and industrial solutions. His leadership consistently emphasizes innovation adoption, manufacturing excellence, sustainability, and value creation through technology.`,

        `Beyond Asian Paints, he is actively building a diversified investment platform. Through Asiana AIF, direct investments, and strategic partnerships, he invests in high-growth businesses across technology, healthcare, advanced manufacturing, and consumer sectors, with a strong preference for long-term partnerships over transactional capital. He has also been instrumental in pioneering new sports enterprises in India, including the establishment and growth of Ultimate Table Tennis and Chennaiyin FC.`,

        `As Chairperson of the Dani Foundation, Mr. Dani leads large-scale social initiatives focused on education, public health, culture, women empowerment, and physical literacy. Through the Dani Sports Foundation and the Sportscom movement, he is a national advocate for building India’s grassroots sports and physical activity ecosystem. He also supports civic innovation and climate resilience through advisory leadership roles, including with Project Mumbai, a globally recognised public-impact institution.`,

        `Across all his roles, Mr. Dani champions the belief that capital must be purposeful and society-enhancing. He brings together government, private sector, and civil society stakeholders to create sustainable, inclusive, and scalable ecosystems that unlock economic opportunity and improve quality of life.`,

        `His deep commitment to India’s development, combined with a global perspective on innovation and investments, positions him as a trusted partner to institutions and family o􀆯ices seeking to build enduring, impact-aligned platforms in India and beyond.`,
      ]}
      message={[
        `It is an honour to assume the role of Chairman of the Indian Institute of Information Technology, Dharwad.`,

        `IIIT Dharwad represents more than an academic institution — it is a space where ideas, technology, and responsibility must converge to shape the future. At a time when digital transformation is redefining economies, governance, and everyday life, institutions like ours carry the responsibility of not just keeping pace with change, but guiding it.`,

        `Our vision must extend beyond classrooms and curricula. IIIT Dharwad must evolve as a centre for deep technical excellence, interdisciplinary thinking, and innovation that serves society at scale. We must encourage inquiry that is bold, research that is relevant, and learning that equips students to navigate complexity with integrity and purpose.`,

        `I see IIIT Dharwad as a platform where academia and industry collaborate meaningfully, where young minds are empowered to solve real-world challenges, and where technology is approached not merely as a tool, but as a force for inclusive and sustainable progress.`,

        `I look forward to working with the Board, faculty, students, alumni, and partners to collectively shape an institution defined by clarity of vision, excellence in execution, and lasting impact.`,

        `Let us build that future together.`,

        `Warm regards,`,
      ]}
      signatureText="Mr. Jalaj Dani"
      signaturePosition="Chairperson, IIIT Dharwad"
    />
  );
}
