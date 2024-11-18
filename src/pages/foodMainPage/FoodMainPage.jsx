import Layout from "../../components/common/layout/Layout";
import SubHeader from "../../components/common/subheader/SubHeader";
import { FoodPageContainer, SubHeaderFixed } from "./FoodMainPage.styled";
import FoodScrollBox from "../../components/foodMainPageComponents/foodScrollBox/FoodScrollBox";
import SideScrollBox from "../../components/foodMainPageComponents/sideScrollBox/SideScrollBox";
import AdvertisementButton from "../../components/foodMainPageComponents/advertisementButton/AdvertisementButton";
import FoodCard from "../../components/foodMainPageComponents/foodCard/FoodCard";
import { BottomNavigation } from "../../components/common/bottomNavigation/BottomNavigation";

const FoodMainPage = () => {
  const images = [
    "/foodMainImage/aroundFood1.svg",
    "/foodMainImage/aroundFood1.svg",
    "/foodMainImage/aroundFood1.svg",
  ];

  return (
    <Layout>
      <SubHeaderFixed>
        <SubHeader
          title="밥상"
          showLeftButton={true}
          leftLink="/"
          showRightButton={true}
          rightLink="/"
          rightIcon="/icons/glass.svg"
        />
      </SubHeaderFixed>
      <FoodPageContainer>
        <FoodScrollBox>
          <SideScrollBox images={images} />
          <AdvertisementButton />
          <FoodCard />
          <FoodCard />
        </FoodScrollBox>
      </FoodPageContainer>
      <BottomNavigation />
    </Layout>
  );
};

export default FoodMainPage;
