import EstimatedTimeRecipe from "./components/EstimatedTimeRecipe";
import HeaderRecipe from "./components/HeaderRecipe";
import IngredientsRecipe from "./components/IngredientsRecipe";
import InstructionsRecipe from "./components/InstructionsRecipe";
import NutritionTableRecipe from "./components/NutritionTableRecipe";

const App = () => {
  return (
    <>
      <header>
        <HeaderRecipe/>
      </header>
      <main>
        <section className="mt-4 p-4">
          <EstimatedTimeRecipe/>
          <IngredientsRecipe/>
          <InstructionsRecipe/>
          <NutritionTableRecipe/>
        </section>
              
      </main>
    </>
  );
};

export default App;
