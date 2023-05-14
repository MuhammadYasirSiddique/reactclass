import { Profile } from "./profile";

export default function Gallery() {
  return (
    <>
      <h1>Amazing scientists</h1>
      <section className="flex">
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
