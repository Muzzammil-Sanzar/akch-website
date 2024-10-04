import sale from "../../assets/sale.png"
import CommonPadding from "../../layouts/CommonPadding"
import CommonSizes from "../../layouts/CommonSizes"
export default function SummerOffer() {
  return (
    <div className="bg-gradient-to-r from-[#EFA937E5] to-[#EFA937A1]">
      <CommonSizes>
        <div className="relative pt-14 lg:pb-14">
          <CommonPadding>
            <div className="flex flex-wrap justify-between">
              <div className="basis-full lg:basis-1/3 space-y-1">
                <div className="w-fit rounded-full border border-gray-150 py-1.5 px-6">
                  <p className="text-[15px] salsa uppercase">summer offer</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="rammetto text-2xl sm:text-4xl text-[#603B00]">Up to 30% OFF</h2>
                    <p className="text-sm sm:text-lg text-gray-150">Order food and grocery delivery online from hundreds of restaurants and shops nearby.</p>
                  </div>
                  <div>
                    <button className="py-2.5 md:py-4 rounded-full bg-white text-gray-150 px-20 font-medium">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="basis-full lg:basis-2/3">
                <div className="lg:absolute bottom-0 right-0">
                  <img src={sale} alt="akch" />
                </div>
              </div>
            </div>
          </CommonPadding>
        </div>
      </CommonSizes>
    </div>
  )
}
