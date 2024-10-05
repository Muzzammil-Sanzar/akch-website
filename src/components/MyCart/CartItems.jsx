import { Link } from "react-router-dom"

const cartItems = [
  { id: "1", name: "High Ghee Tirunelveli Halwa", price: 300, quantity: 1, weight: "500 gm", image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFsd2ElMjBkaXNofGVufDB8fDB8fHww" },
  { id: "2", name: "Tirunelveli Garlic Mixture", price: 300, quantity: 1, weight: "500 gm", image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFsd2ElMjBkaXNofGVufDB8fDB8fHww" },
  { id: "3", name: "5 Shot special Combo", price: 777, quantity: 1, weight: "500 gm", image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFsd2ElMjBkaXNofGVufDB8fDB8fHww" },
  { id: "4", name: "5 in one SPL Combo", price: 300, quantity: 1, weight: "500 gm", image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFsd2ElMjBkaXNofGVufDB8fDB8fHww" },
]

export default function CartItems() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = 100
  const vat = 0
  const total = subtotal + deliveryFee + vat
  return (
    <div className=" space-y-10 w-full">
      <div className="space-y-8 w-full relative overflow-x-auto">
        <table className="w-full text-base sm:text-lg sm:font-semibold text-left text-gray-150">
          <thead className="text-lg font-medium sm:text-2xl text-gray-150 capitalize border-b">
            <tr>
              <th scope="col" className="px-6 py-4">Image</th>
              <th scope="col" className="px-6 py-4">Product Name</th>
              <th scope="col" className="px-6 py-4">Price</th>
              <th scope="col" className="px-6 py-4">Quantity</th>
              <th scope="col" className="px-6 py-4">Subtotal</th>
              <th scope="col" className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody >
            {cartItems.map((item) => (
              <tr key={item.id} className="bg-white border-b">
                <th scope="row" className="py-4 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-32 h-32 object-cover shrink-0"
                  />
                </th>
                <th className="px-6 py-4 whitespace-nowrap">
                  <div>{item.name}</div>
                  <div className="text-sm text-gray-500 font-normal">Weight: <span className="font-semibold">{item.weight}</span></div>
                </th>
                <th className="px-6 py-4 whitespace-nowrap">₹ {item.price.toFixed(2)}</th>
                <th className="px-6 py-4">
                  <div className="flex items-">
                    <button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                      <div className="h-10  text-base font-normal rounded-s-full border flex items-center justify-center">-</div>
                      <span className="sr-only">Decrease quantity</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={() => { }}
                      className="h-10 w-14 border font-medium text-center"
                    />
                    <button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                      <div className="h-10  text-base font-normal rounded-e-full border flex items-center justify-center" >+</div>
                      <span className="sr-only">Increase quantity</span>
                    </button>
                  </div>
                </th>
                <th className="px-6 py-4">₹ {(item.price * item.quantity).toFixed(2)}</th>
                <th className="text-right py-4">
                  <button variant="ghost" size="icon" className="h-8 w-8">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3238 7.46875C16.3238 7.46875 15.7808 14.2037 15.4658 17.0407C15.3158 18.3957 14.4788 19.1898 13.1078 19.2148C10.4988 19.2618 7.88681 19.2648 5.27881 19.2098C3.95981 19.1828 3.13681 18.3788 2.98981 17.0478C2.67281 14.1858 2.13281 7.46875 2.13281 7.46875" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.708 4.23438H0.75" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.4386 4.239C13.6536 4.239 12.9776 3.684 12.8236 2.915L12.5806 1.699C12.4306 1.138 11.9226 0.75 11.3436 0.75H7.11063C6.53163 0.75 6.02363 1.138 5.87363 1.699L5.63063 2.915C5.47663 3.684 4.80063 4.239 4.01562 4.239" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot className="text-gray-250 text-2xl font-semibold">
            <tr >
              <th className=" py-4" colSpan={5}>Subtotal:</th>
              <th className="text-right text-gray-150 font-medium">₹ {subtotal.toFixed(2)}</th>
            </tr>
            <tr>
              <th className=" py-4" colSpan={5}>Delivery Fee</th>
              <th className="text-right text-gray-150 font-medium">₹ {deliveryFee.toFixed(2)}</th>
            </tr>
            <tr className="border-b">
              <th className=" py-4" colSpan={5}>VAT</th>
              <th className="text-right text-gray-150 font-medium">₹ {vat.toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-2xl font-semibold text-gray-250 flex items-center justify-between">
        <div colSpan={4}>Total</div>
        <div className="text-right font-bold text-orange-150">₹ {total.toFixed(2)}</div>
      </div>
      <div>
        <Link to={'/checkout'}>
          <button className="w-full bg-orange-150 text-white py-2.5 md:py-5 rounded-full">Continue</button>
        </Link>
      </div>
    </div>
  )
}
