import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react'
import './serviceCarousel.css';
import product from "../../../assets/products.png";
import sweet from "../../../assets/sweets.png";
import package1 from "../../../assets/packages.png";
import tea from "../../../assets/tea.png";
import halwa from "../../../assets/halwa.png";

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

export default function ServicesCarousel({ openModal }) {
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
              <div className="h-full">
                <div className={`rounded-[20px] px-8 py-6 space-y-4 text-center`} style={{ backgroundColor: service.alt }}>
                  <div className="flex justify-center w-full z-50">
                    <img src={service.image} alt={service.alt} />
                  </div>
                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-150 whitespace-nowrap">{service.title}</h3>
                    <div className="">
                      <p className="text-gray-250 line-clamp-4">
                        {service.description} items
                      </p>
                    </div>
                  </div>
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
