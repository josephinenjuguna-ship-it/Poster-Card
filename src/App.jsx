import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterBadge from "./components/PosterBadeg";

function App() {
  return (
    <PosterLayout>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 relative min-h-[420px] sm:min-h-[560px] bg-black text-white p-6">
          <PosterImage alt="Albert Odero" />
          <PosterHeading text="Albert Odero" level="display" as="h1" colorClassName="text-white" />
          <PosterSubtext text="Basketball coach" size="base" colorClassName="text-neutral-300" />
        </div>

        <div className="flex-1 bg-white text-black p-6">
          <PosterBadge label="Basketball coach" variant="outline" />
        </div>
      </div>
    </PosterLayout>
  );
}

export default App;