$("#results").on("click", ".card-img-top", function () {
    let inputValue = searchBox.val()
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');
    $.get(`/recipes/${inputValue}?gluten=${checkBoxGluten}&dieary=${checkBoxDietary}`).then(data => {
        
        console.log(data)
        const searchObject = data.find((ind) => ind.imgUrl == $(this).attr('src'));
        alert(searchObject.ingredients[0])
       
    })
})


$("#searchBtn").on("click", () => {
    let inputValue = searchBox.val()
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');

    $.get(`/recipes/${inputValue}?gluten=${checkBoxGluten}&dieary=${checkBoxDietary}`)
    .then(data => {
        displayTheRecipes(data)
    })

})

