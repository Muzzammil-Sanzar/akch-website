import logo from "../assets/logo.svg";
import google from "../assets/GooglePlay.svg";
import appstore from "../assets/AppStore.svg";
import Facebook from "../assets/Facebook.svg";
import linkdin from "../assets/Linkedin.svg";
import twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";



export default function Footer() {
  return (
    <div>
      <div className="bg-[#FFEBC7] py-16">
        <CommonSizes>
          <CommonPadding>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-12">
              <div className="basis-full lg:basis-[58%]">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl salsa">Get a 20% Discount & Offers on Your First Order!</h2>
              </div>
              <div className="basis-full lg:basis-[45%] space-y-4">
                <div className="space-y-1">
                  <h2 className="text-lg lg:text-2xl font-medium lg:font-bold capitalize">news letter</h2>
                  <p className="text-gray-250 text-sm lg:text-base">Subscribe to our new channel to get latest updates</p>
                </div>
                <div className="flex flex-wrap items-center justify-center bg-white px-6 xxs:px-2 py-2 border border-gray-300 rounded-full shadow-md overflow-hidden max-w-md">
                  <input
                    type="text"
                    className="flex-grow p-2 text-gray-700 focus:outline-none rounded-l-full"
                    placeholder="Your Email Adress"
                  />
                  <button className="bg-orange-150 hover:bg-orange-400 text-white rounded-full px-4 py-2 flex items-center gap-1">
                    <span>Subscribe</span>

                  </button>
                </div>
              </div>

            </div>
          </CommonPadding>
        </CommonSizes>
      </div>
      <div className="bg-orange-250 pt-20 pb-11">
        <CommonSizes>
          <CommonPadding>
            <div className="flex flex-wrap justify-between gap-y-12 ">
              <div className="space-y-11">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    <img src={logo} alt="logo" />
                    <h2 className="text-xl akch text-orange-150">AKCH</h2>
                  </div>
                  <div className="max-w-xs">
                    <p>Lorem ipsum dolor sit amet consectetur. Sagittis quam cras eu velit ultrices </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-medium">Download our app</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={appstore} alt="logo" />
                    <img src={google} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-20">
                <div className="space-y-6">
                  <p className="font-semibold">Quick Links</p>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="font-semibold">Legal</p>
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="font-semibold">Address</p>
                  <ul>
                    <li>86066 Haag Unions, </li>
                    <li>Darehaven 34735-7080</li>
                    <li>1-473-834-3176 x74614</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <img src={Facebook} alt="logo" />
                  <img src={linkdin} alt="logo" />
                  <img src={twitter} alt="logo" />
                  <img src={Instagram} alt="logo" />
                </div>
              </div>
            </div>
          </CommonPadding>
        </CommonSizes>
      </div>
    </div>
  )
}
