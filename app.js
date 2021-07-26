let products = [{
  productName: 'Shoes',
  image: `<img src="shoes.jpg" alt="shoes" width="173" height="120" class = "imageClass">`,
  isLiked: false,
  tag: "footwear",
  price: " RS:1000"
},
{
  productName: "Brown Shoes",
  image: `<img src="shoes1.png" alt="Brown Shoes" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "footwear",
  price: "RS:2000"
},
{
  productName: "Purple Shoes",
  image: `<img src="shoes2.jpg" alt="Purple Shoes" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "footwear",
  price: "RS:2300"
},
{
  productName: "Stylish Shoes",
  image: `<img src="shoes3.jpg" alt="stylish Shoes" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "footwear",
  price: "RS:2300"
},
{
  productName: "Shirt",
  image: `<img src="cloth.jpg" alt="shirt" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "clothes",
  price: "RS: 1500"
},
{
  productName: "Stylish Shirt",
  image: `<img src="cloth 1.jpg" alt=" shirt" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "clothes",
  price: "RS: 2000"
},
{
  productName: "Simple Shirt",
  image: `<img src="cloth2.jpg" alt="shirt" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "clothes",
  price: "RS: 2400"
},
{
  productName: " White Shirt",
  image: `<img src="cloth3.png" alt="shirt" width="173" height="210" class = "imageClass">`,
  isLiked: true,
  tag: "clothes",
  price: "RS: 2500"
},
{
  productName: "juicer Machine",
  image: `<img src="electronic.jpg" alt="juicer machine" width="173" height="200" class = "imageClass">`,
  isLiked: false,
  tag: "electronics",
  price: "RS: 2500"
},
{
  productName: "Iron",
  image: `<img src="electronic3.jpg" alt="iron" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "RS: 1000"
},
{
  productName: "Microwave Oven",
  image: `<img src="electronic1.jpg" alt="oven" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "RS: 2000"
},
{
  productName: "Kettle",
  image: `<img src="electronic2.png" alt="kettle" width="173" height="200" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "RS: 2000"
},
];

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let classLength = document.getElementsByClassName("productName").length;
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j <= classLength; j++) {
    document.getElementsByClassName("productName")[j].innerHTML = products[i + j].productName;
    document.getElementsByClassName("price")[j].innerHTML = products[i + j].price;
    document.getElementsByClassName("imageDiv")[j].innerHTML = products[i + j].image;

  }
}