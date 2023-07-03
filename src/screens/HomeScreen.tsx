import { DescriptionCarouselComponent } from "../components/DescriptionCarouselComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderMenu } from "../components/HeaderMenuComponent";
import { HeadlineComponent } from "../components/HeadlineComponent";
import { SkillCarouselComponent } from "../components/SkillCarouselComponent";
import { ValuesSectionComponent } from "../components/ValuesSectionComponent";

let links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About us" },
  { link: "/contact", label: "Contact us" },
];

export const HomeScreen = () => {
  return (
    <div>
      <HeaderMenu links={links} />
      <HeadlineComponent />
      <DescriptionCarouselComponent />
      <ValuesSectionComponent
        title={"Our Core Values"}
        description={
          "Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim."
        }
      />
      <SkillCarouselComponent />
      <FooterComponent links={links} />
    </div>
  );
};
