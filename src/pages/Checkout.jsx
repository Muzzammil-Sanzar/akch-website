import { useState } from "react";
import marker from '../assets/marker.svg';
import master from '../assets/master.svg';
import cash from '../assets/cash.svg';
import CartNav from "../components/MyCart/CartNav";
import CommonSizes from "../layouts/CommonSizes";
import CommonPadding from "../layouts/CommonPadding";

export default function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  return (
    <div>
      <CartNav title={"Payment"} />
      <CommonSizes>
        <CommonPadding>
          <div className="py-12 grid lg:grid-cols-2 gap-8">
            {/* Left Section: Address */}
            <div className="bg-white px-7 py-10 rounded-3xl shadow-lg border space-y-5">
              <h2 className="text-xl font-bold">Address</h2>
              <div className="space-y-4">
                {/* Address: Home */}
                <div
                  className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${selectedAddress === 'home' ? 'border-orange-150' : 'border-gray-300'
                    }`}
                  onClick={() => setSelectedAddress('home')}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={marker} // Placeholder for address image
                      alt="My Home"
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">My Home</h3>
                      <p className="text-gray-250 text-sm">46 Larkrow, Main Street, UK</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    checked={selectedAddress === 'home'}
                    onChange={() => setSelectedAddress('home')}
                    className="form-radio h-5 w-5 text-orange-150"
                  />
                </div>

                {/* Address: Office */}
                <div
                  className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${selectedAddress === 'office' ? 'border-orange-150' : 'border-gray-300'
                    }`}
                  onClick={() => setSelectedAddress('office')}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={marker} // Placeholder for address image
                      alt="My Office"
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">My Office</h3>
                      <p className="text-gray-250 text-sm">46 Larkrow, Main Street, UK</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    checked={selectedAddress === 'office'}
                    onChange={() => setSelectedAddress('office')}
                    className="form-radio h-5 w-5 text-orange-150"
                  />
                </div>

                {/* Add New Address */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold">Add New Address</h3>
                  <div className="mt-5 bg-white px-5 py-3 rounded-xl border shadow-md space-y-4">
                    <div className="space-y-2.5">
                      <label htmlFor="address" className="text-sm font-medium">Address</label>
                      <input
                        id="address"
                        type="text"
                        placeholder="Address"
                        className="w-full p-2 border rounded mb-2"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2.5">
                        <label htmlFor="town" className="text-sm font-medium">Town/City</label>
                        <input
                          id="town"
                          type="text"
                          placeholder="Town/City"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="postcode" className="text-sm font-medium">Postcode/ZIP</label>
                        <input
                          id="postcode"
                          type="text"
                          placeholder="Postcode/ZIP"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="mt-4 bg-orange-150 text-white px-4 py-2 rounded-lg hover:bg-orange-150">
                        Save Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Payment Method */}
            <div className="bg-white px-7 py-10 rounded-3xl shadow-lg border space-y-5">
              <h2 className="text-xl font-bold">Payment Method</h2>
              <div className="space-y-5">
                {/* Payment: MasterCard */}
                <div
                  className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${selectedPaymentMethod === 'card' ? 'border-yellow-400' : 'border-gray-300'
                    }`}
                  onClick={() => setSelectedPaymentMethod('card')}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={master} // Placeholder for payment icon
                      alt="MasterCard"
                      className="w-10 h-10"
                    />
                    <div>
                      <h3 className="font-medium">Master Card</h3>
                      <p className="text-gray-250 text-xs">**** 5623</p>
                    </div>
                  </div>
                  <button className="bg-orange-150 text-white border border-orange-150 px-2 py-1 rounded">+</button>
                </div>

                {/* Payment: Cash on Delivery */}
                <div
                  className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${selectedPaymentMethod === 'cod' ? 'border-orange-150' : 'border-gray-300'
                    }`}
                  onClick={() => setSelectedPaymentMethod('cod')}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={cash} // Placeholder for cash on delivery icon
                      alt="Cash on Delivery"
                      className="w-10 h-10"
                    />
                    <div>
                      <h3 className=" font-medium">Cash On Delivery</h3>
                      <p className="text-gray-250 text-xs">Just need to pay when you get the parcel</p>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="text-gray-250 space-y-14">
                  <div className="mt-6 space-y-6 ">
                    <div className="flex justify-between">
                      <span>Sub Total :</span>
                      <span className="text-black text-lg font-semibold">₹1977.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fees :</span>
                      <span className="text-black text-lg font-semibold">₹100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT :</span>
                      <span className="text-black text-lg font-semibold">₹0.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total (4 Items) :</span>
                    <span className="text-orange-150 font-bold text-lg">₹2077.00</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button className="mt-6 w-full bg-orange-150 text-white py-3 rounded-full hover:bg-orange-150">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
