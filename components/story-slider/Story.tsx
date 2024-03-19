import React, { ReactNode, HTMLAttributes, MouseEvent } from 'react';

interface StoryProps extends HTMLAttributes<HTMLDivElement> {
  avatar?: ReactNode;
  userLink?: string;
  name?: string;
  date?: string;
  duration?: string;
  closeButton?: boolean;
  onCloseButtonClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export default function Story({
  avatar,
  userLink = '',
  name,
  date,
  duration,
  closeButton,
  onCloseButtonClick,
  children,
  ...rest
}: StoryProps) {
  return (
    <div className="swiper-slide" data-duration={duration} {...rest}>
      <a href={userLink} className="stories-slider-user">
        {avatar && <div className="stories-slider-user-avatar">{avatar}</div>}
        {name && <div className="stories-slider-user-name">{name}</div>}
        {date && <div className="stories-slider-user-date">{date}</div>}
      </a>
      {closeButton && (
        <div className="stories-slider-actions">
          <button
            className="stories-slider-close-button"
            onClick={onCloseButtonClick}
          />
        </div>
      )}

      <div className="stories-slider-content">{children}</div>
    </div>
  );
}
