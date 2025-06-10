import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";

// Loader component definition
export function Loader() {
  // Render animated loader with icon cloud, spinning hexagon, and initials
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center">
      {/* Icon cloud animation */}
      <IconCloud iconSlugs={Slugs} />
      {/* Spinning hexagon icon in the background */}
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25} />
      {/* Initials displayed in the background */}
      <div className=" absolute font-mono text-primaryColor font-semibold text-6xl -z-10">MK</div>
    </div>
  );
}