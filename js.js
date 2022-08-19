const obidaElement = document.querySelector("#obida");
const viloyat = document.querySelector("#viloyat");
const button = document.querySelector("#button");
const div = document.querySelector(".div");
const divElement = document.querySelector("#divs");
const inputElement = document.querySelectorAll("input");



const DATA = [


  {


    name: "Mir Madarasa",
    img: "https://xs.uz/upload/post/2021/11/05/d29cfa08afdd7955c2019074f917339b1105.jpg",
    regions: "Fargona",
    nom1: 0,
    nom1: 10,


  },
  {



    name: "Registon",
    img: "https://tse4.mm.bing.net/th?id=OIP.NX15lKZJ3D8km3o225jsmAHaFj&pid=Api",
    regions: "Samarqand",
    nom1: 20,


  },
  {


    name: "Ichan qala",
    img: "https://avatars.mds.yandex.net/i?id=b55eb8fd4a59c2dd4f37524cfde376cb-5232282-images-thumbs&n=13",
    regions: "Xiva",
    nom1: 30,


  },
  {


    name: "Arka",
    img: "https://forum.awd.ru/gallery/images/upload/c6f/da0/c6fda07da7effe5972318970f476a2ab.jpg",
    regions: "Buxoro",
    nom1: 40,


  },
  {


    name: "Mulla qirgiz",
    img: "https://img-fotki.yandex.ru/get/17918/50083820.5f1/0_122d0d_5a43a94d_orig",
    regions: "Namanagan",
    nom1: 50,


  },
];






const regionss = [];
const names = [];
const img = [];
const number = [];






for (let item of DATA) {
  number.push(item.nom1);
  regionss.push(item.regions);
  names.push(item.name);
  img.push(item.img);
  console.log(item);
}






const inputElementTwos = document.querySelector("#inputElementTwos");
number.forEach((element) => {
  let ption = document.createElement("option");
  inputElementTwos.appendChild(ption);
  ption.setAttribute("value", element);
  ption.textContent = element;
});





regionss.forEach((Element) => {
  let option = document.createElement("option");
  viloyat.appendChild(option);
  option.setAttribute("value", Element);
  option.textContent = Element;
});






viloyat.addEventListener("change", (event) => {
  while (obidaElement.options.length > 0) {
    obidaElement.options.remove(0);
  }





  DATA.forEach((item) => {
    if (event.target.value == item.regions) {
      let option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      obidaElement.appendChild(option);
    }
  });
});





button.addEventListener("click", (event) => {



  div.textContent = "";






  DATA.forEach((item) => {
    if (item.name == obidaElement.value) {


      let h2 = document.createElement("h2");
      let ing = document.createElement("img");



      h2.textContent = obidaElement.value;
      ing.src = item.img;



      div.appendChild(h2);
      div.appendChild(ing);
    }
  });
});
let res;





for (let i = 0; i < inputElement.length; i++) {
  inputElement[i].addEventListener("input", (event) => {
    if (inputElementOne.value !== "" && inputElementTwo.value !== "") {
      res = inputElementOne.value * inputElementTwo.value;
      divElement.textContent = res;
    }
  });
}





const divElements = document.querySelector("#divss");
const inputElements = document.querySelectorAll("input");
let ress;






for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("input", (event) => {
    if (inputElementOnes.value !== "" && inputElementTwos.value !== "") {
      ress = inputElementOnes.value * inputElementTwos.value;
      divElements.textContent = ress;
    }
  });
}









const two = document.querySelector(".two");
const one = document.querySelector(".one");





button.addEventListener("click", (event) => {
  two.classList.add("three");
  one.classList.add("four");
});
    console.log(event);
    console.log(res);
