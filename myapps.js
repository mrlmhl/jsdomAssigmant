// 1-header classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding özellikleri ekleyiniz ve text hizalamasını center olarak ayarlayınız.

const header = document.querySelector("header")
header.style.backgroundColor="brown"
header.style.color ="white"
header.style.padding= "25px 25px"
header.style.textAlign="center"




//2- title id sine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Ve "Javascript Dom Assignment 1" metnini textContent özelliği ile ekleyiniz.

document.getElementById("title")
title.textContent = "Javascript Dom Assignment1"







//3- nav-item classına sahip olan elementi querySelector() metodu ile yakalayınız. Flexbox(center olsun) özelliği ekleyiniz ve elementler arasına gap özelliği ile boşluk ekleyiniz. List style özelliğini kaldırınız.
const navItem=document.querySelector(".nav-item")
navItem.style.display="flex"
navItem.style.justifyContent="center"
navItem.style.gap="30px"
navItem.style.listStyle="none"



//4- username ve password idsine sahip olan inputları querySelector() metodu ile yakalayınız. İnputların value attributelarını kullanarak Username inputuna "Anthony" yazınız, password inputuna "123456" yazınız. Ayrıca password inputuna yazılan değerin görülmesini sağlayın. Ve inputların disabled özelliğini aktif ediniz. (Not: html de input type=password olduğunda bildiğiniz üzere yazılan değerler saklanıyor. Bu özelliği js ile değiştirmeniz lazım.)
const username = document.querySelector("#username")
const password = document.querySelector("#password")
username.value="Meral"
password.value="123456"
password.type="text"
password.disabled =true




//5- btn classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding, border-radius özellikleri ekleyiniz. Cursor pointer olsun ve border özelliği none olsun. Ayrıca button elementinin metni "Giriş Yap" metni olsun.
 
const btn= document.querySelector(".btn")
btn.style.backgroundColor="brown"
btn.style.color="white"
btn.style.padding="15px 15px"
btn.style.borderRadius="30%"
btn.style.border="none"
btn.style.cursor="pointer"
btn.textContent="Giriş Yap"



//6- projects idsine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Yakaladığınız bu element üzerinden bu elementin first childi olan h3 elementine ulaşıp metnini "Js Dom Projects" olarak değiştiriniz.

const projects=document.getElementById("#projects")

const h3=document.querySelector("h3")
h3.textContent="JS DOM PROJECTS"
h3.style.backgroundColor="brown "
h3.style.color="white"









//7- const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]; Verilen myProjects arrayindeki elemanları bir önceki adımda yakaladığınız projects idsine sahip olan elementin last childi olan ul elementine innerHTML özelliğini kullanarak tek tek li elementleri içerisinde child olarak ekleyiniz.

// const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]; 


const ul=document.querySelector("#projects ul")
ul.innerHTML +=` 
<li>Hello world</li>
<li>Guess Number</li>
<li>Checkout Page</li>
<li>Gelir-Gider Projesi </li>
<li>Api Projesi</li>   `

ul.style.color ="brown"
