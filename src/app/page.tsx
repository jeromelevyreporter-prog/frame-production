import { VideoWall } from "@/components/VideoWall";
import { BroadcastersSection } from "@/components/BroadcastersSection";
import { PartenairesSection } from "@/components/PartenairesSection";

export default function Home() {
  return (
    <>
      <VideoWall />
      <BroadcastersSection />
      <PartenairesSection />
    </>
  );
}
