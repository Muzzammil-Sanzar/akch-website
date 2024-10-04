import CommonPadding from "../../layouts/CommonPadding";
import CommonSizes from "../../layouts/CommonSizes";

export default function CartNav({ title }) {
  return (
    <div className="bg-[#EFA937DE] py-3 text-center">
      <CommonSizes>
        <CommonPadding>
          <h1 className="uppercase text-[42px] font-bold">{title ? title : "MY Cart"}</h1>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
