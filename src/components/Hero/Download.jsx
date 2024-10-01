import download from '../../assets/download.png';
import appstore from '../../assets/Appstore2.svg';
import playstore from '../../assets/Playstore.svg';
import CommonSizes from '../../layouts/CommonSizes';
import CommonPadding from '../../layouts/CommonPadding';
export default function Download() {
  return (
    <div className="bg-orange-150">
      <CommonSizes>
        <CommonPadding>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-24 py-10 lg:py-0">
            <div className='hidden lg:block'>
              <img src={download} alt="akch" />
            </div>
            <div className='text-white space-y-5'>
              <div className='space-y-1'>
                <h2 className='text-3xl font-bold max-w-xs'>Download our app to get the best</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur. Mi at fames viverra vitae eu dictumst semper. Ullamcorper enim non nec neque in consectetur ullamcorper a ut.</p>
              </div>
              <div className='flex flex-wrap items-center gap-5'>
                <img src={appstore} alt='akch' />
                <img src={playstore} alt='akch' />
              </div>
            </div>
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
