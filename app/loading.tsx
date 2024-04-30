import { spinner } from "@/components/stocks";

const Loading = () => {
  return (
    <main className="min-h-dvh flex flex-col place-items-center">
      {spinner}
    </main>
  );
};

export default Loading;