'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectCube } from 'swiper/modules';

import Post from '@/components/Post';
import StoriesSlider from '@/components/story-slider/StoriesSlider';
import Stories from '@/components/story-slider/Stories';
import Story from '@/components/story-slider/Story';

import mark from '../components/story-slider/assets/avatars/mark.jpg';
import malenia from '../components/story-slider/assets/avatars/malenia.jpg';
import john from '../components/story-slider/assets/avatars/john.jpg';

import f1 from '../components/story-slider/assets/images/food-1.jpg';
import f2 from '../components/story-slider/assets/images/food-2.jpg';
import f3 from '../components/story-slider/assets/images/food-3.jpg';
import f4 from '../components/story-slider/assets/images/food-4.jpg';

import e1 from '../components/story-slider/assets/images/elden-1.jpg';
import e2 from '../components/story-slider/assets/images/elden-2.jpg';
import e3 from '../components/story-slider/assets/images/elden-3.jpg';

import v1 from '../components/story-slider/assets/images/vacation-1.jpg';
import v2 from '../components/story-slider/assets/images/vacation-2.jpg';
import v3 from '../components/story-slider/assets/images/vacation-3.jpg';
import v4 from '../components/story-slider/assets/images/vacation-4.jpg';
import v5 from '../components/story-slider/assets/images/vacation-5.jpg';

import logo from '../components/story-slider/assets/images/logo.png';

import Image from 'next/image';






export default function page() {
  const storiesSliderRef = useRef<any>(null);

  const openUserStories = (userIndex: number): void => {
    const storiesSlider = storiesSliderRef.current;
    storiesSlider.el.classList.add('stories-slider-in');
    storiesSlider.enable();
    storiesSlider.slideTo(userIndex, 0);
  };

  const onCloseButtonClick = (): void => {
    const storiesSlider = storiesSliderRef.current;
    storiesSlider.disable();
    storiesSlider.el.classList.add('stories-slider-out');
  };

  useEffect(() => {
    const storiesSlider = storiesSliderRef.current;
    if (storiesSlider) {
      storiesSlider.el.addEventListener('animationend', () => {
        if (storiesSlider.el.classList.contains('stories-slider-out')) {
          storiesSlider.el.classList.remove('stories-slider-in');
          storiesSlider.el.classList.remove('stories-slider-out');
        }
      });
    }
  }, [storiesSliderRef]);

  const storiesData = [
    {
      user: {
        avatar: mark,
        name: 'mark_johnson',
      },
      stories: [
        {
          date: '21h',
          image: f1,
        },
        {
          date: '12h',
          image: f2,
        },
        {
          date: '2h',
          video: 'video.mp4',
        },
        {
          date: '30m',
          image: f3,
        },
        {
          date: '15m',
          image: f4,
        },
      ],
    },
    {
      user: {
        avatar: malenia,
        name: 'malenia',
      },
      stories: [
        {
          date: '5h',
          image: e1,
        },
        {
          date: '45m',
          image: e2,
        },
        {
          date: '5m',
          image: e3,
        },
      ],
    },
    {
      user: {
        avatar: john,
        name: 'john1986',
      },
      stories: [
        {
          date: '15h',
          image: v1,
        },
        {
          date: '10h',
          image: v2,
        },
        {
          date: '10h',
          image: v3,
        },
        {
          date: '8h',
          image: v4,
        },
        {
          date: '47m',
          image: v5,
        },
      ],
    },
  ];

  return (
    <main className=''>
      <div className="demo-app">
        <div className="demo-title">
          <Image src={logo} width={156} height={156} alt="logo" />
        </div>
        <div className="demo-stories">
          {storiesData.map((userStories, userStoriesIndex) => (
            <a
              key={userStoriesIndex}
              href="#"
              onClick={() => openUserStories(userStoriesIndex)}
            >
              <span className="demo-stories-avatar">
                <Image src={userStories.user.avatar} alt="" width={423} height={768} />
              </span>
              <span className="demo-stories-name">{userStories.user.name}</span>
            </a>
          ))}
        </div>
        {storiesData.map((userStories, userStoriesIndex) => (
          <Post
            key={userStoriesIndex}
            name={userStories.user.name}
            avatar={userStories.user.avatar}
            likesCount="133"
            image={userStories.stories[0].image}
            text="The steak turned out great 😊🥩"
            date="3 hours ago"
            onAvatarClick={() => openUserStories(userStoriesIndex)}
          />
        ))}
      </div>
      <StoriesSlider
        Swiper={Swiper}
        EffectCube={EffectCube}
        enabled={false}
        autoplayDuration={5000}
        onSlidesIndexesChange={(mainIndex: any, subIndex: any) =>
          console.log({ mainIndex, subIndex })
        }
        onStoriesSlider={(instance: any) => {
          storiesSliderRef.current = instance;
        }}
        onEnd={() => {
          storiesSliderRef.current.disable();
          storiesSliderRef.current.el.classList.add('stories-slider-out');
        }}
      >
        {storiesData.map((userStories, userStoriesIndex) => (
          <Stories key={userStoriesIndex}>
            {userStories.stories.map((story, storyIndex) => (
              <Story
                key={storyIndex}
                userLink="#"
                avatar={<Image src={userStories.user.avatar} alt="avatar" width={50} height={50} />}
                name={userStories.user.name}
                date={story.date}
                closeButton
                onCloseButtonClick={onCloseButtonClick}
              >
                {story.video ? (
                  <video src={story.video} playsInline preload="metadata" />
                ) : (
                  <Image src={story.image as any} alt="story" />
                )}
              </Story>
            ))}
          </Stories>
        ))}
      </StoriesSlider>
    </main>
  );
}
