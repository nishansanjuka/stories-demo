import React, { ReactNode, HTMLAttributes } from 'react';

interface StoriesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Stories({ children, ...rest }: StoriesProps) {
  return (
    <div className="swiper-slide" {...rest}>
      <div className="swiper">
        <div className="swiper-wrapper">{children}</div>
      </div>
    </div>
  );
}
