import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "For lovers who hesitate",
      src: "/for1.jpg",
    },
    {
      title: "Dreams,Books,Powers,and Walls",
      src: "/for1.jpg",
    },
    {
      title: "Ladybird",
      src: "/lady2.jpg",
    },
    {
      title: "ASTEARGOBY",
      src: "/lady2.jpg",
    },
    {
      title: "She",
      src: "/she4.jpg",
    },
    {
      title: "Summer",
      src: "/sum3.jpg",
    },
  ];

  return (
    <div className="my-16">
      <FocusCards cards={cards} />
    </div>
  );
}
