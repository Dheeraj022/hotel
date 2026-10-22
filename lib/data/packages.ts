
export interface HolidayPackage {
  title: string;
  desc: string;
  img: string;
}

export const holidayPackages: HolidayPackage[] = [
  { title: "Honeymoon Packages", desc: "Romantic getaways for couples", img: "/packages/honeymoon.jpg" },
  { title: "Family Packages", desc: "Fun-filled holidays for the family", img: "/packages/family.jpg" },
  { title: "Adventure Packages", desc: "Thrilling experiences for adventure lovers", img: "/packages/adventure.jpg" },
  { title: "Weekend Getaways", desc: "Short trips for a perfect weekend escape", img: "/packages/weekend.jpg" },
  { title: "Group Packages", desc: "Best assistance for groups & friends", img: "/packages/group.jpg" },
  { title: "Pilgrimage Packages", desc: "Spiritual journeys to sacred destinations", img: "/packages/pilgrimage.jpg" },
];
