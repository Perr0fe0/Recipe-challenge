const App = () => {
  return (
    <>
      <header>
        <img src="src\assets\images\image-omelette.jpeg" alt="" />
        <h1 className="text-4xl young-serif mt-8 px-4 text-[#302d2c]">Simple Omelette Recipe</h1>
        <p className="px-6 mt-8 outfit">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </header>

      <main>
        <section className="mt-4 p-4">
          <div className="bg-[#fff5fa] p-4">
            <h3 className="text-lg text-[#7b284f] font-bold" >Preparation time</h3>
            <li className="outfit"><span className="font-bold">Total: </span>Approximately 10 minutes</li>
            <li className="outfit"><span className="font-bold">Preparation:</span> 5 minutes</li>
            <li className="outfit"><span className="font-bold">Cooking:</span> 5 minutes</li>
          </div>

          <article className="mt-4 p-4 border-b-2">
            <h2 className="text-2xl mb-4 text-[#a37e73] young-serif">Ingredients</h2>
            <li className="outfit">2-3 large eggs</li>
            <li className="outfit">Salt, to taste</li>
            <li className="outfit">Pepper, to taste</li>
            <li className="outfit">1 tablespoon of butter or oil</li>
            <li className="outfit">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </article>

          <article className="mt-4 p-4 border-b-2">
            <h2 className="text-2xl text-[#a37e73] young-serif ">Instructions</h2>
            <ol className="list-decimal p-4">
              <li className="outfit mb-1">
                <span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and
                pepper until they are well mixed. You can add a tablespoon of
                water or milk for a fluffier texture.
              </li>
              <li className="outfit mb-1">
                <span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and
                add butter or oil.
              </li>
              <li className="outfit mb-1">
                <span className="font-bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </li>
              <li className="outfit mb-1">
                <span className="font-bold">Add fillings (optional):</span> When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li className="outfit mb-1">
                <span className="font-bold">Fold and serve:</span> As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </li>
              <li className="outfit mb-1">
                <span className="font-bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </article>

          <article className="mt-4 p-4 ">
            <h2 className="text-2xl text-[#a37e73] young-serif">Nutrition</h2>
            <p className="outfit">The table below shows nutritional values per serving without
            the additional fillings.</p>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-around">
                <p>Calories</p>
                <span className="text-[#a37e73] font-bold">277kcal</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-around">
                <p>Carbs</p>
                <span className="text-[#a37e73] font-bold">277kcal</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-around">
                <p>Protein</p>
                <span className="text-[#a37e73] font-bold">277kcal</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 ">
              <div className="flex justify-around">
                <p>Fat</p>
                <span className="text-[#a37e73] font-bold">277kcal</span>
              </div>
            </div>
          </article>
        </section>
              
      </main>
    </>
  );
};

export default App;
