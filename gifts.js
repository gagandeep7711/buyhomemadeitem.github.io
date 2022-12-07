let products = 
[
    {
        'id': 0,
        'name': 'Happy Birthday Mini Scrapbook',
        'description': 'Product Dimensions ‏ : ‎ 15.24 x 15.24 x 2.54 cm; 400 Grams
Date First Available ‏ : ‎ 10 January 2021
ASIN ‏ : ‎ B08KPD1MZ6
Item model number ‏ : ‎ MINISLBD01
Country of Origin ‏ : ‎ India
Item Weight ‏ : ‎ 400 g
Item Dimensions LxWxH ‏ : ‎ 15.2 x 15.2 x 2.5 Centimeters
Net Quantity ‏ : ‎ 1.00 count
Best Sellers Rank: #11,182 in Office Products (See Top 100 in Office Products)
#421 in Greeting Cards
Customer Reviews: 4.0 out of 5 stars    2 ratings',
        'price': 59.99,
        'pic': 'images/20/blue.jfif',
        'qty_in_stock':100
    },
    {
        'id': 1,
        'name': ' Birthday Wooden Box Greeting Card',
        'description': 'Colour	Multicolor
Target Audience	Boys,Girls,Mens,Women
Pattern	Solid
Occasion	Birthday
Brand	Wenzel',
        'price': 49.99,
        'pic': 'images/20/cap.jpg',
        'qty_in_stock': 133
    },
    {
        'id': 2,
        'name': 'Black Jersey',
        'description': 'Manchester United Extra Jersey, black, sponsored by Chevrolet',
        'price': 54.99,
        'pic': 'images/20/red.jpg',
        'qty_in_stock': 544
    },
    {
        'id': 3,
        'name': 'Blue Jacket',
        'description': 'Blue Jacket for cold and raniy weather',
        'price': 129.99,
        'pic': 'images/20/white.jpg',
        'qty_in_stock': 14
    },
    {
        'id': 4,
        'name': 'Snapback Cap',
        'description': 'Manchester United New Era Snapback Cap- Adult',
        'price': 24.99,
        'pic': 'images/20/yellow.jfif',
        'qty_in_stock': 655
    },
    {
        'id': 5,
        'name': 'Champion Flag',
        'description': 'Manchester United Champions League Flag',
        'price': 24.99,
        'pic': 'images/20/white.jpg',
        'qty_in_stock': 321
    }
 ]
 const duplicateproduct=products;
 cart.addEventListener('click', cart1);
 reset.addEventListener('click', myfuction2);
 function cart1()
 {
    alert("fuct1");
 }
 function myfuction2()
 {
    document.getElementById("cart2").innerHTML =0;
    console.log(duplicateproduct)
    console.log(products)
    products=duplicateproduct;
 }
 function myfunction(idd)
 {
    let res = products.find((item) => {
        return item.id == idd;
    });
    res.qty_in_stock=res.qty_in_stock-1;
    console.log(res.qty_in_stock);
    var number_of_product=document.getElementById("cart");
    k=Number(number_of_product.querySelector("div span").innerHTML);
    k=k+1;
    document.getElementById("cart2").innerHTML=k;
 }

 function getname(idd)
 { 
    let res = products.find((item) => {
        return item.id == idd;
    });
    return res.name;
 }
 function getimage(idd)
 { 
    let res = products.find((item) => {
        return item.id == idd;
    });
    return res.pic;
 }
  function getdescribtion(idd)
 { 
    let res = products.find((item) => {
        return item.id == idd;
    });
    return res.description;
 } 
 function getprice(idd)
 { 
    let res = products.find((item) => {
        return item.id == idd;
    });
    return res.price;
 }
  function getqty(idd)
 { 
    let res = products.find((item) => {
        return item.id == idd;
    });
    return res.qty_in_stock;
 }

 