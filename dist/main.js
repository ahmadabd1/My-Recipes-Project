
const sourceRecipes = $("#resultsRecipes-template").html()
const templateRecipes = Handlebars.compile(sourceRecipes)

const prepareTheData = function (dataRecipes) {
    let someHTML = templateRecipes({dataRecipes:dataRecipes}) 
    $("#results").append(someHTML)
    
}
let val;

$("#results").on("click", ".card-img-top",function(){
    $.get(`/recipes/${val}`).then(data=>{
        console.log(data)
        const searchObject= data.find((ind) => ind.imgUrl==$(this).attr('src'));
        alert(searchObject.ingredients[0])
    })
    

})


$("#searchBtn").on("click", () => {
    let inputValue = $(".search-box").val()
    val=inputValue
    console.log(inputValue)
    $.get(`/recipes/${inputValue}`).then(data=>{
        console.log(data)
        prepareTheData(data)
    })

})

