import CommonPadding from "../../layouts/CommonPadding";
import CommonSizes from "../../layouts/CommonSizes";

export default function Buttons({ activeButton, setActiveButton }) {
  return (
    <div className="bg-orange-250 py-4">
      <CommonSizes>
        <CommonPadding>
          <div className="flex flex-wrap gap-y-4 items-center gap-4">
            <button onClick={e => setActiveButton(1)} className={`${activeButton === 1 ? "bg-orange-150 text-white font-semibold" : "text-black font-medium"} px-8 py-2 rounded-full hover:text-white hover:bg-yellow-500 duration-200`}>
              Product Details
            </button>
            <button onClick={e => setActiveButton(2)} className={`${activeButton === 2 ? "bg-orange-150 text-white font-semibold" : "text-black font-medium"} px-8 py-2 rounded-full hover:text-white hover:bg-yellow-500 duration-200`}>Reviews</button>
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
