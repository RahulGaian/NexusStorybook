
// // var index2 = 0;
// var html;
// // function changePlatformMenu(i) {
// //   renderPlatformMenu(i);
// // }

// function renderPlatformMenu(index = 0) {

//   const menu = [
//     {
//       name: "SaaSifying Digital Transformation",
//       image: "../public/images/home/77.png",
//       description:
//         "Our advanced SaaS tools enable lightning-speed digital transformation through low-code and XaaS phygital transformation. Streamline operations, enhance customer experiences, and create new value in weeks. Our platform is agile, innovative, cost-effective, and scalable to meet market needs.",
//     },
//     {
//       name: "Phygital Transformation",
//       image: "../public/images/home/78.png",
//       description:
//         "Nexus Connect achieves convergence between physical and digital worlds through Phygital Transformation. Its SaaS tools - Pascal Intelligence, BoltzmannBot, Monet, Vinci, and HolaVerse - empower businesses to streamline operations, enhance customer experiences, and drive phygital innovation. By combining human and machine capabilities, Nexus Connect transforms operations, creates new revenue streams, and unlocks new possibilities.",
//     },
//     {
//       name: "Accountable Transformation",
//       image: "../public/images/home/79.png",
//       description:
//         "Nexus Connect provides businesses with a suite of SaaS tools for accountable, responsible, and monetizable digital transformation. These tools measure effectiveness, enhance digital capabilities, and enable businesses to improve customer experiences and achieve measurable outcomes such as increased revenue and reduced costs.",
//     },
//     {
//       name: "SaaS Factory",
//       image: "../public/images/home/80.png",
//       description:
//         "Nexus Connect is a SaaS factory that enables scalable digital transformation with cutting-edge tools. With constantly improving services, Nexus Connect delivers flexible, cost-effective, and reliable solutions compared to traditional software deployment models.",
//     },
//     {
//       name: "Inter-org Digital Transformation",
//       image: "../public/images/home/81.png",
//       description:
//         "Nexus Connect enables digital transformation between organizations through API integrations, streamlining operations and reducing manual interventions. Its secure platform and API-first approach provide greater agility, scalability, and efficiency, accelerating digital transformation journeys and achieving better business outcomes.",
//     },
//   ];




//   const listItems = menu
//     .map((item, i) => {
//       return `
//       <div className="accordion-item">
//       <div className="d-flex justfy-between mr-8">
//        <li id="collapseOne0${i}" onClick="removeInterval(${i})" className="accordion-button ${i != 0 ? ' collapsed ' : ''}" type="button" data-delayed-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="true" aria-controls="collapseOne" className="text-lg ${index == i ? " text-royal-purple-600" : ""} "> ${item.name}
//         </li>
//         <img
//          id="collapseOne00${i}"
//          className="display-icons"
//         src="../public/images/Landing_logos/select_icon.svg"
//         alt="select dropdown"
//         />
//          </div>
//       <div   id="collapseOne${i}" className="accordion-collapse collapse ${i == 0 ? ' show ' : ''}" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//          <div style='margin-top:0px' className="accordion-body default-font">
//            ${menu[i]['description']}
//         </div>
//     </div> 
//   </div>`;
//     })
//     .join("");





//   html = `
//   <aside
  
//   data-aos-duration="10000"
//   className="aside-width lg:col-span-2 border-royal-gray-300 rounded-3xl"
//   >
//   <ul className="platform-features " id="accordionExample">
//      ${listItems}
//   </ul> 
//   </aside>
// `;

//   return (<h1>hello</h1>);
// }

// var flag = false;
// var index4 = 0;
// var setinterval;
// function animationAccordian() {
//   setinterval = setInterval(
//     () => {
//       // renderPlatformMenu();

//       // toggleClass(1);

//       index4 = (index4 + 1) % 5;
//       let descClassName = 'collapseOne0' + index4;
//       flag = true;
//       if (document.getElementById(descClassName)) {
//         document.getElementById(descClassName).click();
//       }
//       flag = false;
//     }, 5000)
// }
// animationAccordian();






// function removeInterval(i) {


//   // setTimeout(() => {
//   tggleIcon(i);
//   // },100);



//   if (!flag) {
//     clearInterval(setinterval);
//   }
// }


// function tggleIcon(i) {
//   removeIcon();
//   let liClassName = 'collapseOne00' + i;
//   let descClassName = 'collapseOne0' + i;
//   const ele = document.getElementById(descClassName);
//   const ele2 = document.getElementById(liClassName);
//   if (!ele.classList.contains('collapsed')) {
//     ele2.classList.add('rotate-icon');
//   }
//   else {
//     ele2.classList.remove('rotate-icon');

//   }
// }

// function removeIcon() {
//   for (let i = 0; i < 5; i++) {
//     let liClassName = 'collapseOne00' + i;
//     let descClassName = 'collapseOne0' + i;
//     const ele = document.getElementById(descClassName);
//     const ele2 = document.getElementById(liClassName);
//     if (!ele.classList.contains('collapsed')) {
//       ele2.classList.add('rotate-icon');
//     }
//     else {
//       ele2.classList.remove('rotate-icon');
//     }

//   }
// }


// renderPlatformMenu();



// function removeclasses() {

//   for (let i = 0; i < 5; i++) {
//     let liClassName = 'collapseOne0' + i;
//     let descClassName = 'collapseOne' + i;
//     const ele = document.getElementById(descClassName);
//     const ele2 = document.getElementById(liClassName);
//     if (ele.classList.contains('show')) {
//       ele.classList.remove('show');
//       ele2.classList.add('collapsed');
//     }

//   }


// }


// function toggleClass(i) {
//   i = index4;
//   removeclasses();
//   let liClassName = 'collapseOne0' + i;
//   let descClassName = 'collapseOne' + i;
//   const ele = document.getElementById(descClassName);
//   const ele2 = document.getElementById(liClassName);



//   if (ele.classList.contains('show')) {
//     ele.classList.remove('show');
//     ele2.classList.add('collapsed');
//   }
//   else {
//     ele.classList.add('show');
//     ele2.classList.remove('collapsed');
//   }

// }




// var widerScreenWidth = window.matchMedia("(max-width: 501px)");


// var toggleInterval = false

// window.addEventListener('resize', function (event) {

//   if (widerScreenWidth.matches) {
//     clearInterval(setinterval);
//     renderPlatformMenu(1);
//     setTimeout(() => {
//       tggleIcon(0);
//     },);
//     toggleInterval = true
//   }
//   else if (toggleInterval) {
//     // renderPlatformMenu();
//     animationAccordian();
//     toggleInterval = false;
//     // ////console.log( document.getElementsByClassName('display-icons'));
//     var elements = document.getElementsByClassName("display-icons");
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].classList.add('display-icon');
//     }

//   }


// }, true);



// (function () {
//   if (widerScreenWidth.matches) {
//     clearInterval(setinterval);
//     renderPlatformMenu(1);
//     toggleInterval = true
//     tggleIcon(0);

//   }
//   else {
//     var elements = document.getElementsByClassName("display-icons");
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].classList.add('display-icon');
//     }
//   }
// })()






// export default renderPlatformMenu;