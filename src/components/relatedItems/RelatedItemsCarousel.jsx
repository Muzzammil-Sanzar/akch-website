import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react'
import './relatedItems.css';
import product from "../../assets/products.png";
import sweet from "../../assets/sweets.png";
import package1 from "../../assets/packages.png";
import tea from "../../assets/tea.png";
import halwa from "../../assets/halwa.png";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import favorite from "../../assets/favorite.svg";

const services = [
  {
    title: "All Products",
    description: "140",
    image: product,
    alt: "#FFECB4",
  },
  {
    title: "Sweets",
    description: "30",
    image: sweet,
    alt: "#FEE7D7",
  },
  {
    title: "Special Package",
    description: "52",
    image: package1,
    alt: "#D6F2F3",
  },
  {
    title: "Tea & Coffee",
    description: "15",
    image: tea,
    alt: "#FFECB4",
  },
  {
    title: "Halwa",
    description: "11",
    image: halwa,
    alt: "#FFEDF1",
  },
];

export default function RelatedItemsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto' });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla4 flex items-center">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport4 px-6" ref={emblaRef}>
        <div className="embla__container4">
          {services.map((service, index) => (
            <div key={index} className="embla__slide4">
              <div className='space-y-3 cursor-pointer' >
                <div className='rounded-xl w-full h-[302px] relative overflow-hidden'>
                  <Link to={"/product"}>
                    <img className='object-cover w-full h-full' src={"https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="card" width={270} height={302} />
                  </Link>
                  <div className='absolute top-3.5 right-3.5  hover:scale-105 duration-200'>
                    <img src={favorite} alt='favorite' />
                  </div>
                </div>
                <div>
                  <Link to={"/product"}>
                    <p className="font-medium capitalize">high ghee tirunelvali halwa</p>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-lg">₹ 300 <span className="text-xs text-gray-250 font-normal">/500 gm</span></p>
                      </div>
                      <div>
                        <div className="flex items-center justify-end text-xs gap-1">
                          <div className="text-orange-150 flex items-center gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p className="text-gray-150">(100+)</p>
                          </div>
                          <p>{""}</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <button className="rounded-full border border-orange-150 text-sm font-semibold py-3 w-full hover:bg-orange-150 hover:text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  )
}
