declare module 'stories-slider' {
  export type Swiper = any; // Adjust the type accordingly
  export type EffectCube = any; // Adjust the type accordingly

  interface StoriesSliderOptions {
    autoplayDuration?: number;
    Swiper: Swiper;
    EffectCube?: EffectCube;
    onSlidesIndexesChange?: (
      activeSubSwiperIndex: number,
      activeIndex: number,
    ) => void;
    onAutoplayStart?: (swiper: any) => void;
    onAutoplayStop?: (swiper: any) => void;
    onEnd?: () => void;
    enabled?: boolean;
  }

  interface StoriesSlider {
    destroy: () => void;
    slideTo: (mainIndex: number, subIndex?: number) => void;
    enable: () => void;
    disable: () => void;
    pause: (preventTouchResume?: boolean) => void;
    resume: () => void;
  }

  export default function createStoriesSlider(
    el: HTMLElement,
    params?: StoriesSliderOptions,
  ): StoriesSlider;
}
