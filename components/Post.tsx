'use client';

import Image from 'next/image';
import React, { MouseEventHandler } from 'react';
import like from '../components/story-slider/assets/icons/like.svg'
import comment from '../components/story-slider/assets/icons/comment.svg'
import send from '../components/story-slider/assets/icons/send.svg'
import bookmark from '../components/story-slider/assets/icons/bookmark.svg'

interface PostProps {
  name: string;
  avatar: any;
  likesCount: string;
  image: any;
  text: string;
  date: string;
  onAvatarClick: MouseEventHandler<HTMLAnchorElement>;
}

const Post: React.FC<PostProps> = ({
  name,
  avatar,
  likesCount,
  image,
  text,
  date,
  onAvatarClick,
}: PostProps) => {
  return (
    <div className="demo-post">
      <div className="demo-post-header">
        <a href="#" className="demo-post-avatar" onClick={onAvatarClick}>
          <Image src={avatar} width={50} height={50} alt="Avatar" />
        </a>
        <div className="demo-post-name">{name}</div>
        <button className="demo-post-header-actions">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="demo-post-image">
        <Image src={image} alt="Post" width={1280} height={768} />
      </div>
      <div className="demo-post-footer">
        <div className="demo-post-footer-actions">
          <div className="demo-post-footer-actions-lefts">
            <button>
              <Image src={like} width={10} height={10} alt="Like" />
            </button> 
            <button>
            <Image src={comment} width={10} height={10} alt="comment" />
            </button>
            <button>
            <Image src={send} width={10} height={10} alt="send" />
            </button>
          </div>
          <div className="demo-post-footer-actions-right">
            <button>
            <Image src={bookmark} width={48} height={48} alt="bookmark" />
            </button>
          </div>
        </div>
        <div className="demo-post-likes">Likes: {likesCount}</div>
        <div className="demo-post-content">
          <span className="demo-post-content-name">{name}</span>
          <span className="demo-post-content-text">{text}</span>
        </div>
        <div className="demo-post-date">{date}</div>
      </div>
    </div>
  );
};

export default Post;
