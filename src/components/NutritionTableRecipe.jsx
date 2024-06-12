const NutritionTableRecipe = () => {
  return (
    <article className="mt-4 p-4 ">
            <h2 className="text-2xl text-[#a37e73] young-serif">Nutrition</h2>
            <p className="outfit">The table below shows nutritional values per serving without
            the additional fillings.</p>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-between px-8">
                <p>Calories</p>
                <span className="text-[#a37e73] font-bold">277kcal</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-between px-8">
                <p>Carbs</p>
                <span className="text-[#a37e73] font-bold">0g</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 border-b-2">
              <div className="flex justify-between px-8">
                <p>Protein</p>
                <span className="text-[#a37e73] font-bold">20g</span>
              </div>
            </div>
            <div className="flex flex-col mt-4  p-4 ">
              <div className="flex justify-between px-8">
                <p>Fat</p>
                <span className="text-[#a37e73] font-bold">22g</span>
              </div>
            </div>
          </article>
  )
}

export default NutritionTableRecipe
