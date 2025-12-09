import LightRays from "@/components/LightRays";

export default function BackgroundLightRays() {
  return (
    <div className="absolute inset-0 -z-10">
      <LightRays
        intensity={0.8}
        speed={0.3}
        color="#ffffff"
      />
    </div>
  );
}
