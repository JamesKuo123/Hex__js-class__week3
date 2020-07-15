new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: '1',
                name: 'apple',
                imgUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                category: 'fruits',
                unit: 'box',
                original_price: 500,
                price: 200,
                description: 'this is a box of 6 apples.',
                content: 'an apple a day keeps doctors away.',
                is_forSale: false,
            },
            {
                id: '2',
                name: 'banana',
                imgUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                category: 'fruits',
                unit: 'box',
                original_price: 300,
                price: 150,
                description: 'this is a box of 6 bananas.',
                content: 'bananas are good.',
                is_forSale: true,
            },
        ],
        tempProduct: {

        }
    },
    methods: {
        addNewProduct() {
            let id = new Date().getTime();
            this.tempProduct.id = id;
            let newProduct = JSON.parse(JSON.stringify(this.tempProduct));
            this.products.push(newProduct);
            this.tempProduct = {};
            $('#addNewProduct').modal('hide');
        },
        openEditModal(id) {
            this.products.forEach(element => {
                if (element.id == id) {
                    let newProduct = JSON.parse(JSON.stringify(element));
                    this.tempProduct = newProduct;
                }
            });
        },
        editProduct() {
            let id = this.tempProduct.id;
            let index;
            this.products.forEach(function (element, i) {
                if (element.id == id) {
                    index = i;
                }
            })
            this.$set(this.products, index, this.tempProduct);
            $('#editProduct').modal('hide');
        },
        deleteProduct(id) {
            if (confirm(`Are you sure you're deleting this product?`)) {
                let index;
                this.products.forEach(function (element, i) {
                    if (element.id == id) {
                        index = i;
                    }
                });
                this.products.splice(index, 1);
            }
        },
    },
    created() {
    }
});