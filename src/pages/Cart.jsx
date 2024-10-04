import CartItems from "../components/MyCart/CartItems";
import CartNav from "../components/MyCart/CartNav";
import RelatedItems from "../components/relatedItems/RelatedItems";
import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";

export default function Cart() {
  return (
    <div className="space-y-[100px]">
      <CartNav />
      <CommonSizes>
        <CommonPadding>
          <div className="space-y-[100px]">
            <CartItems />
            <RelatedItems />
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
