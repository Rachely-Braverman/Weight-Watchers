class Store {

    ShowProducts = document.querySelector('.ShowProducts');

    #productList;
    #listFilter;
    #helpFilter;

    constructor() {
        this.#productList = new Array();
        this.#listFilter = this.#productList;
        this.PrintAllProducts();
    };
    set setProductList(productList) {
        this.#productList = productList;
    }
    get getProductList() {
        return this.#productList;
    }
    //דחיפת מוצר למערך המוצרים
    AddProduct(product) {
        return this.#productList.push(product);
    }

    //מחיקת מוצר ממערך המוצרים
    DeleteProduct(id) {
        const arr = this.#productList.filter(c => c.getId != id);
        this.#productList = arr;
        this.PrintAllProducts();
    }

    //חיפוש לפי שם מוצר על המערך המפולטר שמאותחל בתחילה על כל מערך המוצרים
    SearchNameProduct(name) {
        this.#helpFilter = this.#listFilter.filter(p => p.getProductName === name);
        this.#listFilter = this.#helpFilter;
        this.#helpFilter === undefined;
        return this.#listFilter;
    }

    //חיפוש לפי קוד מזהה  על המערך המפולטר שמאותחל בתחילה על כל מערך המוצרים
    SearchIdProduct(id) {
        return this.#productList.filter(p => p.getId === parseInt(id));
    }

    //חיפוש לפי טווח מחיר על המערך המפולטר שמאותחל בתחילה על כל מערך המוצרים
    SearchPriceRange(priceStart, priceEnd) {
        this.#helpFilter = this.#listFilter.filter(p => p.getPrice >= priceStart && p.getPrice <= priceEnd);
        this.#listFilter = this.#helpFilter;
        this.#helpFilter === undefined;
        return this.#listFilter;
    }

    //חיפוש לפי קטגוריה על המערך המפולטר שמאותחל בתחילה על כל מערך המוצרים
    SearchCategory(category) {
        this.#helpFilter = this.#listFilter.filter(p => p.getCategory === category);
        this.#listFilter = this.#helpFilter;
        this.#helpFilter === undefined;
        return this.#listFilter;
    }

    //חיפוש לפי מוצרים שנגמרו או נשאר מהם קצת על המערך המפולטר שמאותחל בתחילה על כל מערך המוצרים
    SearchAlmostOutOfStock() {
        this.#helpFilter = this.#listFilter.filter(p => p.getCount < 5);
        this.#listFilter = this.#helpFilter;
        this.#helpFilter === undefined;
        return this.#listFilter;
    }

    //הדפסת כל המוצרים שבחנות
    PrintAllProducts() {
        this.ShowProducts.innerHTML = '';
        this.#productList.forEach((item) => {
            this.PrintProductInShop(item);
        });
    }

    //הדפסת המוצרים שעמדו בתנאי החיפוש
    PrintAllProductsBySearch(list) {
        this.ShowProducts.innerHTML = '';
        list.forEach((item) => {
            this.PrintProductInShop(item);
        });
    }

    //הדפסת מוצר
    PrintProductInShop = (item) => {
        if (item != null) {
            const div = document.createElement('div');
            div.classList.add('product');
            div.classList.add('divProduct');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const span = document.createElement('span');
            span.innerHTML = item.getProductName;
            div3.append(span);
            const h5 = document.createElement('h5');
            h5.innerHTML = 'id:' + item.getId;
            div3.append(h5);
            const h6 = document.createElement('h6');
            h6.innerHTML = item.getPrice + '.00' + '₪';
            div3.append(h6);
            const h = document.createElement('h6');
            h.innerHTML = 'category' + item.getCategory;
            div3.append(h);
            div2.append(div3);
            const BigSpan = document.createElement('span');
            const span1 = document.createElement('span');
            span1.innerHTML = '-';
            const span2 = document.createElement('span');
            span1.onclick = () => {
                // if (item.getCount === 1)
                //     this.RemoveItem(item);
                if (item.getCount !== 0) {
                    item.setCount = item.getCount - 1;
                    span2.innerHTML = item.getCount;
                }
            }
            BigSpan.append(span1);
            span2.innerHTML = item.getCount;
            BigSpan.append(span2);
            const span3 = document.createElement('span');
            span3.innerHTML = '+';
            span3.onclick = () => {
                item.setCount = item.getCount + 1;
                span2.innerHTML = item.getCount;
            }
            BigSpan.append(span3);
            div2.append(BigSpan);
            const div4 = document.createElement('div');
            div.append(div2);
            div.append(div4);
            this.ShowProducts.append(div);
        }
    }
    //בסוף לא התייחסתי למחיקת מוצר שאין ממנו כדי שיוכלו להציג מוצר שאין ממנו במלאי
    // index;
    // /*מחיקת המוצר*/
    // RemoveItem = (item) => {
    //     this.index =  this.#productList.findIndex(p => p.getId === item.getId);
    //     let help_arr = [];
    //     for (let i = 0; i < this.index; i++) {
    //         help_arr.push(this.#productList[i]);
    //     }
    //     for (let i = this.index + 1; i < this.#productList.length; i++) {
    //         help_arr.push(this.#productList[i]);
    //     }
    //     this.#productList = help_arr;
    //     this.PrintAllProducts();
    // }
}

class Product {

    #productName;
    #category;
    #price;
    #count;
    #id;
    //פונקציות 
    //GET ו SET
    //למשתנים ה PRIVATE
    set setProductName(productName) {
        this.#productName = productName;
    }
    get getProductName() {
        return this.#productName;
    }
    set setCategory(category) {
        this.#category = category;
    }
    get getCategory() {
        return this.#category;
    }
    set setPrice(price) {
        this.#price = price;
    }
    get getPrice() {
        return this.#price;
    }
    set setCount(count) {
        this.#count = count;
    }
    get getCount() {
        return this.#count;
    }
    //אני יודעת שזה לא הגיוני לערוך קוד מזהה 
    //אבל בגלל שרצינו שהוא יהיה ייחודי צריך משתנה סטטי ולא הצלחנו לעשות
    //אז עשינו ככה אבל ב
    //CTOR 
    //הוא לא מקבל קוד
    set setId(id) {
        this.#id = id;
    }
    get getId() {
        return this.#id;
    }

    constructor(productName, category, price, count) {
        this.#productName = productName;
        this.#id = this.getId;
        this.#category = category;
        this.#price = price;
        this.#count = count;
    };
}

const productName = document.querySelector("#ProductName");
const categoryProduct = document.querySelector('#categoryProduct');
const priceProduct = document.querySelector('#priceProduct');
const countProduct = document.querySelector('#countProduct');
const btnShow = document.querySelector('#btnShow');
const BtnSearch = document.querySelector('#BtnSearch');
const btnAdd = document.querySelector('#btnAdd');
const nameProductSearch = document.querySelector('#nameProduct');
const IdSearch = document.querySelector('#IdSearch');
const FromSearch = document.querySelector('#From');
const Tosearch = document.querySelector('#To');
const CategorySearch = document.querySelector('#CategorySearch');
const priceRangeSearch = document.querySelector('#priceRange');
const categorySearch = document.querySelector('#category');
const outOfStockSearch = document.querySelector('#outOfStock');
const btnDelete = document.querySelector('#btnDelete');
const btnUpdate = document.querySelector('#btnUpdate');

//בשביל ה ID 
//לא הצלחנו בצורה אחרת
id = 4258;
//אתחול חנות
let s = new Store();
p = new Product('Milk', 2, 4, 2);
p.setId = id++;
p1 = new Product('dress', 3, 230, 30);
p1.setId = id++;
p2 = new Product('chocolate', 2, 7, 280);
p2.setId = id++;
p3 = new Product('Bread', 2, 4, 250);
p3.setId = id++;
s.AddProduct(p);
s.AddProduct(p1);
s.AddProduct(p2);
s.AddProduct(p3);

//בלחיצה על חיפוש
//עובד גם בצורה של חיפוש כפול
//כי עשיתי מערך של חיפוש
//וכל פונקציה שהפעלנו עשינו על המערך חיפוש
BtnSearch.onclick = () => {
    if (nameProductSearch.checked)
        s.PrintAllProductsBySearch(s.SearchNameProduct(NameSearch.value));
    if (priceRangeSearch.checked)
        s.PrintAllProductsBySearch(s.SearchPriceRange(parseInt(FromSearch.value), parseInt(Tosearch.value)));
    if (categorySearch.checked)
        s.PrintAllProductsBySearch(s.SearchCategory(parseInt(CategorySearch.value)));
    if (outOfStockSearch.checked)
        s.PrintAllProductsBySearch(s.SearchAlmostOutOfStock());
}

//בלחיצה על עדכון
btnUpdate.onclick = () => {
    Id = document.querySelector('#id');
    const p = s.SearchIdProduct(Id.value);
    p[0].setCount = countProduct.value;
    p[0].setPrice = priceProduct.value;
    p[0].setCategory = categoryProduct.value;
    p[0].setProductName = productName.value;
    s.PrintAllProducts();
}

//בלחיצה על מחיקת מוצר
btnDelete.onclick = () => {
    Id = document.querySelector('#idDelete');
    s.DeleteProduct(parseInt(Id.value));
}

//בלחיצה על הצגת המוצרים
btnShow.onclick = () => {
    s.PrintAllProducts();
}

//בלחיצה על הוספת מוצר
btnAdd.onclick = () => {
    p = new Product(productName.value, categoryProduct.value, priceProduct.value, countProduct.value);
    s.AddProduct(p);
    s.PrintAllProducts();
}
