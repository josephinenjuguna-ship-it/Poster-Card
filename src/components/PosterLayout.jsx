function PosterLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex w-full">
        {children}
      </div>
    </div>
  );
}

export default PosterLayout;