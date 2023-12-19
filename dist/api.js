class APIModuel{

        getAllData(ingredient, gluten, dairy) {
           return $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}`)
        }
       

}

