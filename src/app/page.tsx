import Blog from "../../components/blog";
import Features from "../../components/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <Features />
      <Blog />
    </main>
  );
}
