"use client";
import Avatar from "./avatar";

interface AvatarProp {
  person: { name: string; imageId: string };
  size?: number;
}

export function Profile(props: AvatarProp) {
  return <Avatar {...props} />;
}
