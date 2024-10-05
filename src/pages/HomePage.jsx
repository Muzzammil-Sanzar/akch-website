import Categories from "../components/Hero/Categories";
import Download from "../components/Hero/Download";
import Explore from "../components/Hero/Explore";
import Products from "../components/Hero/Products";
import SummerOffer from "../components/Hero/SummerOffer";
import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";

export default function HomePage() {
  return (
    <div className="space-y-20 py-20">
      <CommonSizes>
        <CommonPadding>
          <Explore />
        </CommonPadding>
      </CommonSizes>

      <Categories />
      <SummerOffer />
      <CommonSizes>
        <CommonPadding>
          <Products />
        </CommonPadding>
      </CommonSizes>
      <Download />
    </div>
  )
}
