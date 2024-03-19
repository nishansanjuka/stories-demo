import React, { useEffect, useRef, ReactNode, HTMLAttributes } from 'react';
import createStoriesSlider from './stories-slider.esm';

interface StoriesSliderProps extends HTMLAttributes<HTMLDivElement> {
  Swiper: any; // Adjust the type accordingly
  EffectCube: any; // Adjust the type accordingly
  enabled?: boolean;
  autoplayDuration?: number;
  onStoriesSlider?: (slider: any) => void; // Adjust the type accordingly
  onSlidesIndexesChange?: (mainIndex: any, subIndex: any) => void; // Adjust the type accordingly
  onAutoplayStart?: () => void; // Adjust the type accordingly
  onAutoplayStop?: () => void; // Adjust the type accordingly
  onEnd?: () => void; // Adjust the type accordingly
  children?: ReactNode;
}

export default function StoriesSlider({
  Swiper,
  EffectCube,
  enabled = true,
  autoplayDuration = 5000,
  onStoriesSlider,
  onSlidesIndexesChange,
  onAutoplayStart,
  onAutoplayStop,
  onEnd,
  children,
  ...rest
}: StoriesSliderProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const storiesSlider = useRef<any>(null);

  useEffect(() => {
    storiesSlider.current = createStoriesSlider(elRef.current, {
      Swiper,
      EffectCube,
      enabled,
      autoplayDuration,
      onSlidesIndexesChange,
      onAutoplayStart,
      onAutoplayStop,
      onEnd,
    });
    if (onStoriesSlider) onStoriesSlider(storiesSlider.current);
    return () => {
      if (storiesSlider.current && storiesSlider.current.destroy) {
        storiesSlider.current.destroy();
      }
    };
  }, []);

  return (
    <div className="stories-slider" ref={elRef} {...rest}>
      <div className="swiper">
        <div className="swiper-wrapper">{children}</div>
      </div>
    </div>
  );
}
