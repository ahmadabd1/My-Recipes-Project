const render = new Render()
const apiModuel = new APIModuel()
let nextcount
let prevcount

showDivResult.on("click", ".card-img-top", function () {
    const searchObject = $(this).closest(".card").find("li:first").text()
    alert("The First Ingredient for this Recipe is: " + searchObject)

})
var isEmptyOrDefault = function (field) {
    var value = field;
    return (value.length === 0);
};
SEARCH_BTN.on("click", () => {
    nextcount = 1
    let inputValue = searchBox.val()
    let checkBoxGluten = GLUTEN_ID_CHECKBOX.is(':checked');
    let checkBoxDietary = DIARY_ID_CHECKBOX.is(':checked');

    if (isEmptyOrDefault(inputValue)) {
        alert("Please Enter a Value to Search");
    } else {
        apiModuel.getAllData(inputValue, checkBoxGluten, checkBoxDietary)
            .then(data => {
                render.displayTheRecipes(data, nextcount)
                $('.deletbtn').hide()
            })
    }
})

PREV_BTN.on('click', function () {
    if (nextcount > 0) {
        nextcount--
        render.displayTheRecipes(apiModuel.lastData, nextcount)
        $('.deletbtn').hide()
    } else {
        alert("first Recipe")
    }

})

NEXT_BTN.on('click', function () {
    if (nextcount <= apiModuel.lastData.length) {
        nextcount++
        render.displayTheRecipes(apiModuel.lastData, nextcount)
        $('.deletbtn').hide()
    } else {
        alert("last Recipe")
    }
})

showDivResult.on('click', '.btnaddcart', function () {
    const idMeal = $(this).closest('.card').attr('id')
    render.addToCart(idMeal, apiModuel.lastData)
})

SHOWCART.on('click', function () {
    render.displayTheCart()
})
showDivResult.on('click', '.deletbtn', function () {

    const idMeal = $(this).closest('.card').attr('id')
    render.deletFromTheCart(idMeal)

})
