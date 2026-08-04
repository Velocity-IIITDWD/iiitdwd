// @ts-nocheck
import linkedinposts from "@/data/linkedinposts";
import CommonCarousel from "../carousel/common-carousel";
import LinkedInEmbedCards from "./LinkedInEmbedCards";

export default function LinkedInCarousel() {
  return (
    <CommonCarousel>
      {linkedinposts
        .map(post => post.uri)
        .map((postLink, index) => (
          /* @ts-expect-error React 19 JSX typing */
          <LinkedInEmbedCards key={index} postLink={postLink} />
        ))}
    </CommonCarousel>
  );
}
