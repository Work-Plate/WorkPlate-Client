import Layout from "../../components/common/layout/Layout";
import SubHeader from "../../components/common/subheader/SubHeader";

const RecommendPage = () => {
  return (
    <Layout>
      <SubHeader
        title="추천"
        showLeftButton={true}
        leftLink="/"
        showRightButton={true}
        rightLink="/"
        rightIcon="./public/icons/x.svg"
      />
      {/* 본문 콘텐츠 */}
    </Layout>
  );
};
export default RecommendPage;
