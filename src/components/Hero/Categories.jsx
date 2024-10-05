import CommonPadding from "../../layouts/CommonPadding";
import CommonSizes from "../../layouts/CommonSizes";
import ServicesCarousel from "./categoryCarousel/ServicesCarousel";

export default function Categories() {
  return (
    <div className="bg-[#FFF8E5] pt-10 pb-[100px]">
      <CommonSizes>
        <div className=" space-y-9">
          <CommonPadding>
            <div className="text-center space-y-1">
              <h2 className="text-[30px] sm:text-[40px] text-gray-150 font-medium">Our Popular Categories</h2>
              <p className=" text-xs sm:text-base max-w-2xl mx-auto text-gray-250">Order South-Indian traditional food and Sweets of restaurants and shops in South-India.</p>
            </div>
          </CommonPadding>
          <div className="px-14">
            <ServicesCarousel />
          </div>
        </div>
      </CommonSizes>
    </div>
  )
}
