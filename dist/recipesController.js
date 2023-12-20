const render = new Render()
const apiModuel = new APIModuel()

showDivResult.on("click", ".card-img-top", function () {
    const searchObject = $(this).closest(".card").find("li:first").text()
    alert("The First Ingredient for this Recipe is: " + searchObject)     
})

$("#searchBtn").on("click", () => {
    let inputValue = searchBox.val()
    let checkBoxGluten = GLUTEN_ID_CHECKBOX.is(':checked');
    let checkBoxDietary = DIARY_ID_CHECKBOX.is(':checked');

    apiModuel.getAllData(inputValue,checkBoxGluten,checkBoxDietary)
    .then(data => {
        render.displayTheRecipes(data)
    })
})

showDivResult.on('click','.btnaddcart',function(){
    console.log($(this).closest('.card').attr('id'))
    const idMeal = $(this).closest('.card').attr('id')
    let inputValue = searchBox.val()
    let checkBoxGluten = GLUTEN_ID_CHECKBOX.is(':checked');
    let checkBoxDietary = DIARY_ID_CHECKBOX.is(':checked');
    apiModuel.getAllData(inputValue,checkBoxGluten,checkBoxDietary)
    .then(data => {
        render.addToCart(idMeal,data)
    })
})
$("#showcart").on('click',function(){
    render.displayTheCart()
})
