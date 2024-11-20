import Layout from "../../components/common/layout/Layout";
import SubHeader from "../../components/common/subheader/SubHeader";
import { FoodPageContainer, SubHeaderFixed } from "./FoodMainPage.styled";
import FoodScrollBox from "../../components/foodMainPageComponents/foodScrollBox/FoodScrollBox";
import SideScrollBox from "../../components/foodMainPageComponents/sideScrollBox/SideScrollBox";
import AdvertisementButton from "../../components/foodMainPageComponents/advertisementButton/AdvertisementButton";
import FoodCard from "../../components/foodMainPageComponents/foodCard/FoodCard";
import { BottomNavigation } from "../../components/common/bottomNavigation/BottomNavigation";
import { useEffect } from "react";
import { getRestaurants } from "../../apis/restaurants";

const FoodMainPage = () => {
  const images = [
    "/foodMainImage/aroundFood1.svg",
    "/foodMainImage/aroundFood2.png",
    "/foodMainImage/aroundFood3.png",
    "/foodMainImage/aroundFood4.png",
  ];

  // 임시 테스트
  useEffect(() => {
    const fetchData = async () => {
      const restaurants = await getRestaurants();
      console.log("식당 리스트:", restaurants); // 데이터를 콘솔에 출력
    };

    fetchData();
  }, []);
  ///

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
          <FoodCard imageSrc="/foodMainImage/Foodlists1.png" />
          <FoodCard imageSrc="/foodMainImage/Foodlists2.png" />
          <FoodCard imageSrc="/foodMainImage/Foodlists3.png" />
          <FoodCard imageSrc="/foodMainImage/Foodlists4.png" />
        </FoodScrollBox>
      </FoodPageContainer>
      <BottomNavigation />
    </Layout>
  );
};

export default FoodMainPage;
