/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Person {
  name: string;
  imageId: string;
}

interface AvatarProp {
  person: { name: string; imageId: string };
  size?: number;
}

export default function Avatar({ person, size = 500 }: AvatarProp) {
  const avatar = `https://i.imgur.com/${person.imageId}.jpg`;

  return (
    <div className="my-10 ">
      <img
        className="mx-auto rounded-full"
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
      <h1 className="text-center text-3xl">Name:{person.name}</h1>
      <p className="text-center">source URL: {avatar}</p>
    </div>
  );
}
