function PosterBadge() {
  return (
    <div className="bg-white p-10 space-y-10">

      <div>
        <h2 className="text-black bg-black font-bold text-xl uppercase border-b-2 border-orange-400 inline-block pb-2">
        Ball Control Maestro
        </h2>

        <h3 className="font-bold mt-6">Strength</h3>
        <p>Shooting Accuracy & Ball Handling</p>

        <h3 className="font-bold mt-6">Expertise</h3>
        <p>Precise shooting, impeccable ball control</p>
      </div>

      <div>
        <h2 className="text-black bg-black font-bold text-xl uppercase border-b-2 border-orange-400 inline-block pb-2">
          Precision Training Insights
        </h2>

        <h3 className="font-bold mt-6">Coaching Focus</h3>
        <p>
          Fine-tuning shooting techniques, mastering ball
          handling.
        </p>

        <h3 className="font-bold mt-6">Main Focus bg-black</h3>

        <ul className="list-disc ml-6">
          <li>Shooting drills</li>
          <li>Ball control tutorials</li>
        </ul>

        <h3 className="font-bold mt-6">Tactics</h3>

        <p>
          Ball Handling Mastery: Achieve seamless control
          through precise drills and technique.
        </p>
      </div>

      <div>
        <h2 className="text-black bg-black font-bold text-xl uppercase border-b-2 border-orange-400 inline-block pb-2">
          Training Positions
        </h2>

        <h3 className="font-bold mt-6">Main Focus</h3>

        <ul className="list-disc ml-6">
          <li>Shooting guards</li>
          <li>Power forwards</li>
          <li>Ball handlers</li>
        </ul>

        <h3 className="font-bold mt-6">Also</h3>

        <ul className="list-disc ml-6">
          <li>Trains all basketball positions</li>
        </ul>
      </div>

    </div>
  );
}

export default PosterBadge;