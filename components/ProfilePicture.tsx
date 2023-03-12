import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ProfilePicturePhoto from '@/public/images/ProfilePicturePhoto.png';

export const ProfilePicture = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full font-bold gap-y-6">
      <div className="p-5 pb-0">
        <Image
          src={ProfilePicturePhoto}
          alt="Profile picture"
          className="rounded-3xl"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <Link
          href="mailto:berneckimarcin@gmail.com"
          className="flex flex-row items-center space-x-2"
        >
          <span>berneckimarcin@gmail.com</span>
        </Link>
        <Link
          href="tel:+48608832277"
          className="flex flex-row items-center space-x-2"
        >
          <span>+48 608 832 277</span>
        </Link>
      </div>
    </div>
  </div>
);
