var vm = new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        productList: []
    },
    filters: {

    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function() {
            var _this = this;
            this.$http.get('data/cartData.json', {'id': 123}).then(function(res) {
                // 之前这里会出问题是因为json文件中用 // 的方式写了注释
                _this.productList = res.data.result.list;
                // _this.totalMoney = res.body.result.totalMoney;
                console.log(res.data);
            })
        }
    }
})