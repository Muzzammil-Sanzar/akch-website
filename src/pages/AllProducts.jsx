import AllProductHeader from "../components/AllProductsComp/AllProductHeader";
import AllProductItems from "../components/AllProductsComp/AllProductItems";
import ProductsFilters from "../components/AllProductsComp/ProductsFilters";
import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";

export default function AllProducts() {
  return (
    <div className="space-y-10 md:space-y-20">
      <AllProductHeader />
      <CommonSizes>
        <CommonPadding>
          <div className='lg:flex gap-2 md:gap-6 lg:gap-9 space-y-6 md:space-y-10'>
            <ProductsFilters />
            <div className='w-full'>
              <AllProductItems />
            </div>
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
