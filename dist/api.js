class APIModuel{

 
        constructor() {
            // this.data = {}
        }
    
        getAllData(ingredient, gluten, dairy) {
           return $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}`)
        }
       

}

