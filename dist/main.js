
const render = new Render()
const apiModuel = new APIModuel()




$("#results").on("click", ".card-img-top", function () {
   
    const searchObject = $(this).closest(".card").find("li:first").text()
    alert("The First Ingredient for this Recipe is: " + searchObject)
      
})


$("#searchBtn").on("click", () => {
    let inputValue = searchBox.val()
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');

    apiModuel.getAllData(inputValue,checkBoxGluten,checkBoxDietary)
    .then(data => {
        render.displayTheRecipes(data)
    })

})

