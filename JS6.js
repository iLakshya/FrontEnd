const apparel = [
    {
    Name: "Jeans",
    Category: "clothes",
    Brand: "Levi",
    Actual_price: 2209,
    Discount: 10
    },
    {
    Name: "Silk Saree",
    Category: "clothes",
    Brand: "Soch",
    Actual_price: 6560,
    Discount: 33
    },
    {
    Name: "T-shirts",
    Category: "clothes",
    Brand: "Westworld",
    Actual_price: 850,
    Discount: 0
    },
    {
    Name: "Dhothi",
    Category: "clothes",
    Brand: "MCR",
    Actual_price: 1570,
    Discount: 2
    },
    {
    Name: "Crocs",
    Category: "shoes",
    Brand: "Killer",
    Actual_price: 2797,
    Discount: 30
    },
    {
    Name: "90s Runner",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 4999,
    Discount: 50
    },
    {
    Name: "Men's Boots",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 3999,
    Discount: 50
    },
    {
    Name: "Diamond Ring",
    Category: "jewellery",
    Brand: "Bluestone",
    Actual_price: 14800,
    Discount: 0
    },
    {
    Name: "Gold earring",
    Category: "jewellery",
    Brand: "Tanishq",
    Actual_price: 21529,
    Discount: 6
    },
    {
    Name: "Choker",
    Category: "accessories",
    Brand: "Womanista",
    Actual_price: 129,
    Discount: 0
    },
    {
    Name: "Watch",
    Category: "accessories",
    Brand: "Sonic",
    Actual_price: 2534,
    Discount: 2
    }
]

// Question 1
let list = [];
for(i=0;i<apparel.length;i++){
    list.push(apparel[i].Name);
}
console.log(list);

// Question 2
let itemsecond = [];
let remaining = [];
for(item in apparel[1])
{
    if(item == 'Name' || item =='Actual_price')
    {
        itemsecond.push(apparel[1][item]);
    }
    else
    {
        remaining.push(apparel[1][item]);
    }
}
console.log(itemsecond);
console.log(remaining);

// Question 3

let apparelnew = [];
for(item in apparel)
{
    let modified = {
        'Name':apparel[item].Name,
        'Category':apparel[item].Category,
        'Brand':apparel[item].Brand,
        'Actual_price':apparel[item].Actual_price,
        'Discount':apparel[item].Discount,
        'Selling_price':apparel[item].Actual_price*((1-(apparel[item].Discount)/100))
    };
    apparel2.push(modified);
}
console.log(apparelnew);

// Question 4

console.log(item = apparel.filter(item => item.Brand.indexOf('Levi') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Soch') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Westworld') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Puma') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('MCR') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Killer') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Bluestone') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Tanishq') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Womanista') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Sonic') !== -1));

// Question 5
console.log(item = apparel.filter(item => item.Category.indexOf('accessories') !== -1));
console.log(item = apparel.filter(item => item.Category.indexOf('jewellery') !== -1));
console.log(item = apparel.filter(item => item.Category.indexOf('shoes') !== -1));
console.log(item = apparel.filter(item => item.Category.indexOf('clothes') !== -1));

// Question 6


let apparelABC = [];
function event(brand, discountpercent){
    discountpercent = 5;
    for(item in apparel){
        let defaultSP = {'Selling_Price':apparel[item].Actual_price*((1-(apparel[item].Discount)))};
        apparelABC.push(defaultSP);
    }
    if(Actual_price>4000){
        let newSP = {'New Selling Price': apparel[item].Actual_price*((1-(apparel[item].Discount + 2)))};
        apparelABC.push(newSP);
    }
}
