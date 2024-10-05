import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState('https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Default image
  const images = [
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image paths
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image paths
    'https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-12">
        {/* Left: Image Gallery */}
        <div className="md:basis-1/2">
          {/* Main Image */}
          <div className="border mb-4">
            <img src={selectedImage} alt="Main product" className="w-full h-auto rounded-lg" />
          </div>
          {/* Image Slideshow */}
          <div className="flex flex-wrap gap-1 md:space-x-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer border p-1 rounded ${selectedImage === img ? 'border-yellow-400' : ''}`}
              >
                <img src={img} alt={`product ${idx}`} className="w-20 h-20 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="md:basis-1/2">
          <div className='space-y-5'>
            <div className='flex flex-wrap gap-y-4 items-center justify-between'>
              <div className='flex flex-wrap gap-y-4 items-center gap-2'>
                <h1 className="text-2xl font-semibold">High Ghee Tirunelvali Halwa</h1>
                <span className="text-green-600 whitespace-nowrap bg-green-600/10 px-2 py-0.5 font-medium rounded-full text-xs">In Stock</span>
              </div>
              <div>
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.0355 10.3719L18.0355 0.371901C17.8958 0.231965 17.7176 0.136623 17.5237 0.0979326C17.3297 0.0592424 17.1286 0.0789418 16.9458 0.154539C16.7631 0.230137 16.6068 0.358237 16.4968 0.522639C16.3869 0.687041 16.3281 0.880361 16.328 1.07815V6.1219C13.0855 6.3994 9.5043 7.9869 6.55805 10.4857C3.01055 13.4957 0.801799 17.3744 0.338049 21.4069C0.301809 21.7204 0.365376 22.0374 0.519704 22.3127C0.674032 22.5879 0.911257 22.8075 1.19762 22.9402C1.48398 23.0729 1.80489 23.1118 2.11468 23.0515C2.42446 22.9912 2.70734 22.8348 2.92305 22.6044C4.29805 21.1406 9.19055 16.5119 16.328 16.1044V21.0781C16.3281 21.2759 16.3869 21.4693 16.4968 21.6337C16.6068 21.7981 16.7631 21.9262 16.9458 22.0018C17.1286 22.0774 17.3297 22.0971 17.5237 22.0584C17.7176 22.0197 17.8958 21.9243 18.0355 21.7844L28.0355 11.7844C28.2226 11.5969 28.3276 11.3429 28.3276 11.0782C28.3276 10.8134 28.2226 10.5594 28.0355 10.3719ZM18.328 18.6644V15.0782C18.328 14.8129 18.2227 14.5586 18.0352 14.371C17.8476 14.1835 17.5933 14.0782 17.328 14.0782C13.818 14.0782 10.3993 14.9944 7.1668 16.8032C5.52048 17.7284 3.98656 18.8408 2.59555 20.1182C3.32055 17.1382 5.14805 14.3044 7.8518 12.0107C10.7543 9.5494 14.2968 8.07815 17.328 8.07815C17.5933 8.07815 17.8476 7.97279 18.0352 7.78526C18.2227 7.59772 18.328 7.34337 18.328 7.07815V3.49315L25.9143 11.0782L18.328 18.6644Z"
                    fill="black" />
                </svg>
              </div>
            </div>

            {/* Ratings and Delivery */}
            <div className="flex items-center mt-2 gap-1">
              <span className="text-orange-150 text-lg">★★★★★</span>
              <span className=" text-gray-250">64 Reviews</span>
              <span className="ml-4 text-orange-150 text-sm">Free Delivery</span>
            </div>

            {/* Price Section */}
            <div className="mt-4">
              <span className="text-gray-400 line-through text-lg">₹350.00</span>
              <span className="text-[#2C742F] text-2xl font-bold ml-2">₹300.00</span>
              <span className="ml-4 text-[#FF6900] bg-[#FF690033] font-medium px-2 py-0.5 rounded-full text-xs">30% Off</span>
            </div>

            <div className='border-b' />
          </div>

          {/* Product Description */}
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur. Vestibulum curabitur adipiscing leo sollicitudin quis varius.
            Libero sed mauris scelerisque elit senectus id cras.
          </p>

          {/* Available Weight */}
          <div className="mt-6">
            <div className='flex items-center justify-between'>
              <h3 className="font-semibold text-gray-150">Available Weight</h3>
              <div className='flex items-center gap-1 bg-orange-150 px-3 py-2 text-white rounded-full w-fit'>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.625 1.41064H10.9375V0.848145C10.9375 0.69896 10.8782 0.555886 10.7727 0.450397C10.6673 0.344908 10.5242 0.285645 10.375 0.285645C10.2258 0.285645 10.0827 0.344908 9.97725 0.450397C9.87176 0.555886 9.8125 0.69896 9.8125 0.848145V1.41064H4.1875V0.848145C4.1875 0.69896 4.12824 0.555886 4.02275 0.450397C3.91726 0.344908 3.77418 0.285645 3.625 0.285645C3.47582 0.285645 3.33274 0.344908 3.22725 0.450397C3.12176 0.555886 3.0625 0.69896 3.0625 0.848145V1.41064H1.375C1.07663 1.41064 0.790483 1.52917 0.579505 1.74015C0.368526 1.95113 0.25 2.23728 0.25 2.53564V13.7856C0.25 14.084 0.368526 14.3702 0.579505 14.5811C0.790483 14.7921 1.07663 14.9106 1.375 14.9106H12.625C12.9234 14.9106 13.2095 14.7921 13.4205 14.5811C13.6315 14.3702 13.75 14.084 13.75 13.7856V2.53564C13.75 2.23728 13.6315 1.95113 13.4205 1.74015C13.2095 1.52917 12.9234 1.41064 12.625 1.41064ZM8.6875 10.4106H7.5625V11.5356C7.5625 11.6848 7.50324 11.8279 7.39775 11.9334C7.29226 12.0389 7.14918 12.0981 7 12.0981C6.85082 12.0981 6.70774 12.0389 6.60225 11.9334C6.49676 11.8279 6.4375 11.6848 6.4375 11.5356V10.4106H5.3125C5.16332 10.4106 5.02024 10.3514 4.91475 10.2459C4.80926 10.1404 4.75 9.99733 4.75 9.84814C4.75 9.69896 4.80926 9.55589 4.91475 9.4504C5.02024 9.34491 5.16332 9.28564 5.3125 9.28564H6.4375V8.16064C6.4375 8.01146 6.49676 7.86839 6.60225 7.7629C6.70774 7.65741 6.85082 7.59814 7 7.59814C7.14918 7.59814 7.29226 7.65741 7.39775 7.7629C7.50324 7.86839 7.5625 8.01146 7.5625 8.16064V9.28564H8.6875C8.83668 9.28564 8.97976 9.34491 9.08525 9.4504C9.19074 9.55589 9.25 9.69896 9.25 9.84814C9.25 9.99733 9.19074 10.1404 9.08525 10.2459C8.97976 10.3514 8.83668 10.4106 8.6875 10.4106ZM1.375 4.78564V2.53564H3.0625V3.09814C3.0625 3.24733 3.12176 3.3904 3.22725 3.49589C3.33274 3.60138 3.47582 3.66064 3.625 3.66064C3.77418 3.66064 3.91726 3.60138 4.02275 3.49589C4.12824 3.3904 4.1875 3.24733 4.1875 3.09814V2.53564H9.8125V3.09814C9.8125 3.24733 9.87176 3.3904 9.97725 3.49589C10.0827 3.60138 10.2258 3.66064 10.375 3.66064C10.5242 3.66064 10.6673 3.60138 10.7727 3.49589C10.8782 3.3904 10.9375 3.24733 10.9375 3.09814V2.53564H12.625V4.78564H1.375Z" fill="white" />
                </svg>
                <button>Custom</button>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs mt-2">
              <div className="flex items-center space-x-1">
                <input type="radio" name="weight" id="0.5kg" />
                <label htmlFor="0.5kg" className="text-gray-250">0.5 kg</label>
              </div>
              <div className="flex items-center space-x-1">
                <input type="radio" name="weight" id="1kg" />
                <label htmlFor="1kg" className="text-gray-250">1 kg</label>
              </div>
              <div className="flex items-center space-x-1">
                <input type="radio" name="weight" id="2kg" />
                <label htmlFor="2kg" className="text-gray-250">2 kg</label>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col gap-y-5 lg:flex-row items-center justify-between mt-6 space-x-4 border-y py-5">
            <div className="flex items-center space-x-2 border px-4 py-2 rounded-full">
              <div className='w-8 h-8 rounded-full bg-[#F2F2F2] flex items-center justify-center'>
                <button className="text-gray-250 font-medium">-</button>
              </div>
              <span className='font-bold'>01</span>
              <div className='w-8 h-8 rounded-full bg-[#F2F2F2] flex items-center justify-center'>
                <button className="text-gray-900 font-medium">+</button>
              </div>
            </div>
            <Link className='w-full' to={"/cart"}>
              <button className="bg-orange-150 text-white px-6 w-full py-3 rounded-full hover:bg-yellow-600 duration-200 flex items-center justify-center gap-4">
                Add to Cart
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1855 0.149902H1.68555C1.28772 0.149902 0.906191 0.307938 0.624887 0.589242C0.343582 0.870547 0.185547 1.25208 0.185547 1.6499V15.1499C0.185547 15.5477 0.343582 15.9293 0.624887 16.2106C0.906191 16.4919 1.28772 16.6499 1.68555 16.6499H18.1855C18.5834 16.6499 18.9649 16.4919 19.2462 16.2106C19.5275 15.9293 19.6855 15.5477 19.6855 15.1499V1.6499C19.6855 1.25208 19.5275 0.870547 19.2462 0.589242C18.9649 0.307938 18.5834 0.149902 18.1855 0.149902ZM9.93555 9.1499C8.74245 9.14866 7.59858 8.67416 6.75494 7.83051C5.91129 6.98687 5.43679 5.843 5.43555 4.6499C5.43555 4.45099 5.51456 4.26022 5.65522 4.11957C5.79587 3.97892 5.98663 3.8999 6.18555 3.8999C6.38446 3.8999 6.57522 3.97892 6.71588 4.11957C6.85653 4.26022 6.93555 4.45099 6.93555 4.6499C6.93555 5.44555 7.25162 6.20861 7.81423 6.77122C8.37684 7.33383 9.1399 7.6499 9.93555 7.6499C10.7312 7.6499 11.4943 7.33383 12.0569 6.77122C12.6195 6.20861 12.9355 5.44555 12.9355 4.6499C12.9355 4.45099 13.0146 4.26022 13.1552 4.11957C13.2959 3.97892 13.4866 3.8999 13.6855 3.8999C13.8845 3.8999 14.0752 3.97892 14.2159 4.11957C14.3565 4.26022 14.4355 4.45099 14.4355 4.6499C14.4343 5.843 13.9598 6.98687 13.1162 7.83051C12.2725 8.67416 11.1286 9.14866 9.93555 9.1499Z" fill="white" />
                </svg>
              </button>
            </Link>
            <div>
              <div className='w-12 h-12 rounded-full bg-orange-250 flex items-center justify-center'>
                <button className="text-gray-900 font-medium">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7793 0.899902C11.166 0.899902 9.75352 1.59365 8.87305 2.76631C7.99258 1.59365 6.58008 0.899902 4.9668 0.899902C3.6826 0.90135 2.45141 1.41214 1.54335 2.3202C0.635281 3.22827 0.124494 4.45945 0.123047 5.74365C0.123047 11.2124 8.23164 15.639 8.57695 15.8218C8.66797 15.8707 8.7697 15.8964 8.87305 15.8964C8.97639 15.8964 9.07813 15.8707 9.16914 15.8218C9.51445 15.639 17.623 11.2124 17.623 5.74365C17.6216 4.45945 17.1108 3.22827 16.2027 2.3202C15.2947 1.41214 14.0635 0.90135 12.7793 0.899902ZM8.87305 14.5562C7.44648 13.7249 1.37305 9.93818 1.37305 5.74365C1.37429 4.79091 1.75331 3.87755 2.427 3.20386C3.10069 2.53017 4.01406 2.15114 4.9668 2.1499C6.48633 2.1499 7.76211 2.95928 8.29492 4.25928C8.34201 4.37391 8.42211 4.47196 8.52505 4.54096C8.62799 4.60996 8.74912 4.6468 8.87305 4.6468C8.99697 4.6468 9.1181 4.60996 9.22104 4.54096C9.32398 4.47196 9.40408 4.37391 9.45117 4.25928C9.98398 2.95693 11.2598 2.1499 12.7793 2.1499C13.732 2.15114 14.6454 2.53017 15.3191 3.20386C15.9928 3.87755 16.3718 4.79091 16.373 5.74365C16.373 9.93193 10.298 13.7241 8.87305 14.5562Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
