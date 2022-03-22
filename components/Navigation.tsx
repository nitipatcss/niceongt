import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-12 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">About us</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">Golf-Tip</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">Gallery</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">
          Golfer-Portfolio
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">
          Kids Golf Tournament
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">
          Learning Program
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">Member</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">
          Golfer Rankig
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-12 py-4">Contact us</a>
      </Link>
    </nav>
  );
};

export default Navigation;
