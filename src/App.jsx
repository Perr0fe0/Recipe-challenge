import EstimatedTimeRecipe from "./components/EstimatedTimeRecipe";
import HeaderRecipe from "./components/HeaderRecipe";
import IngredientsRecipe from "./components/IngredientsRecipe";
import InstructionsRecipe from "./components/InstructionsRecipe";
import NutritionTableRecipe from "./components/NutritionTableRecipe";

const App = () => {
  return (
    <>
      <main className="flex flex-col md:my-20 ">
        <div className="md:w-[45%] bg-white md:p-8 mx-auto rounded-xl ">
          <HeaderRecipe />
          <section className="mt-4 p-4">
            <EstimatedTimeRecipe />
            <IngredientsRecipe />
            <InstructionsRecipe />
            <NutritionTableRecipe />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
