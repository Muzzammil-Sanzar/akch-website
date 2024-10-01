import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button flex items-center justify-center rounded-full bg-white text-gray-150 w-7 md:w-10 h-7 md:h-10 embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5312 18.9693C15.6009 19.039 15.6562 19.1217 15.6939 19.2128C15.7316 19.3038 15.751 19.4014 15.751 19.4999C15.751 19.5985 15.7316 19.6961 15.6939 19.7871C15.6562 19.8781 15.6009 19.9609 15.5312 20.0306C15.4615 20.1002 15.3788 20.1555 15.2878 20.1932C15.1967 20.2309 15.0991 20.2503 15.0006 20.2503C14.902 20.2503 14.8045 20.2309 14.7134 20.1932C14.6224 20.1555 14.5396 20.1002 14.47 20.0306L6.96996 12.5306C6.90023 12.4609 6.84491 12.3782 6.80717 12.2871C6.76943 12.1961 6.75 12.0985 6.75 11.9999C6.75 11.9014 6.76943 11.8038 6.80717 11.7127C6.84491 11.6217 6.90023 11.539 6.96996 11.4693L14.47 3.9693C14.6107 3.82857 14.8016 3.74951 15.0006 3.74951C15.1996 3.74951 15.3905 3.82857 15.5312 3.9693C15.6719 4.11003 15.751 4.30091 15.751 4.49993C15.751 4.69895 15.6719 4.88982 15.5312 5.03055L8.5609 11.9999L15.5312 18.9693Z" fill="black" />
      </svg>


      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button flex items-center justify-center rounded-full bg-white text-gray-150 w-7 md:w-10 h-7 md:h-10 embla__button--next"
      type="button"
      {...restProps}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.46878 18.9693C8.3991 19.039 8.34383 19.1217 8.30612 19.2128C8.2684 19.3038 8.24899 19.4014 8.24899 19.4999C8.24899 19.5985 8.2684 19.6961 8.30612 19.7871C8.34383 19.8781 8.3991 19.9609 8.46878 20.0306C8.53847 20.1002 8.62119 20.1555 8.71224 20.1932C8.80328 20.2309 8.90086 20.2503 8.99941 20.2503C9.09796 20.2503 9.19554 20.2309 9.28658 20.1932C9.37763 20.1555 9.46035 20.1002 9.53004 20.0306L17.03 12.5306C17.0998 12.4609 17.1551 12.3782 17.1928 12.2871C17.2306 12.1961 17.25 12.0985 17.25 11.9999C17.25 11.9014 17.2306 11.8038 17.1928 11.7127C17.1551 11.6217 17.0998 11.539 17.03 11.4693L9.53004 3.9693C9.3893 3.82857 9.19843 3.74951 8.99941 3.74951C8.80039 3.74951 8.60952 3.82857 8.46878 3.9693C8.32805 4.11003 8.24899 4.30091 8.24899 4.49993C8.24899 4.69895 8.32805 4.88982 8.46878 5.03055L15.4391 11.9999L8.46878 18.9693Z" fill="black" />
      </svg>
      {children}
    </button>
  )
}
