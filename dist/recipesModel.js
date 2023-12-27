class APIModuel{

        constructor() {
                this.lastData = []
        }
        getAllData(ingredient, gluten, dairy) {
                return $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}`)
                        .then(recipes => {
                                this.lastData = recipes
                                return recipes
                        })
        }

}


