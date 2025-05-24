import AnimatedBg from "../components/AnimatedBg";
import MunEventsBlock from "../components/MunEventsBlock";
export default function Events() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AnimatedBg />
      <main style={{ position: "relative", zIndex: 2, paddingTop: "5vh" }}>
        <MunEventsBlock />
      </main>
    </div>
  );
}