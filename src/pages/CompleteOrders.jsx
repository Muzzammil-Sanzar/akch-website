
export default function CompleteOrders() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium">Completed Order List</h2>
      <div className="space-y-8">
        {
          [...Array(4)].map((order, index) => (
            <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between bg-orange-250 px-5 py-6 shadow-sm rounded-xl">
              {/* Image */}
              <div className="flex items-center shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add the correct image path here
                  alt="Order Image"
                  className="w-[120px] h-[110px] rounded-[10px] shrink-0"
                />
              </div>
              <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-y-6">
                {/* Order Details */}
                <div className="space-y-1.5">
                  <h2 className="font-poppins text-lg md:text-2xl font-medium ">
                    Tirunalvali Garlic Mixture
                  </h2>
                  <p className="text-sm text-gray-250">
                    28 May, 02:18 PM • 500 gm • 3 Items
                  </p>
                  <div className="flex flex-wrap items-center gap-3.5">
                    <p className="text-sm text-gray-250">
                      Order type: <span className="font-medium text-base text-gray-150">Online Payment</span>
                    </p>
                    <p className="text-sm text-gray-250">Order Id: TG-36594</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:items-end">
                  <span className="text-[#07CD07] font-semibold text-xs mb-1">Completed</span>
                  <span className="text-black font-semibold text-base">₹777.00</span>
                  <div className="mt-2 flex">
                    <button className="ml-2 text-white px-6 py-2 bg-orange-150 rounded-full">
                      Re-Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
