// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window

// // const example = () => {
// //   return 'example';
// // };

// // window.example = example;
// $('#myModal').modal('toogle')

// const url = './data/lol/lol.json'
// fetch(url).then(response => {
//   if (response.status !== 200) {
//     console.log('Error al cargar el url' + response.status)
//     return;
//   }
//   response.json()
//     .then(data => getData(data))
//     .then(data => {
//       const searchInput = document.getElementById('search')

//       searchInput.addEventListener('keyup', () => {
//         console.log(searchInput.value)
//       })

//     })
// }).catch(err => console.log('Fetch error' + err))

// // para async


const proccesData = (data) => {
  const array = [];
  for (const key in data) {
    array.push({
      name: data[key].name,
      title: data[key].title,
      rol: data[key].tags[0],
      rol2: data[key].tags[1],
      image: data[key].splash,
      logo: data[key].img
    })
    // printData(objData)
  }
  // printModal(data)
  // console.log(data);
  return array;
}



// const printModal = (data) => {
//   const champs = document.getElementsByClassName('champs');
//   const paraModal = document.getElementById('para-modal');
//   for (let i = 0; i < champs.length; i++) {
//     champs[i].addEventListener('click', () => {
//       let paData = event.target.id;
//       console.log(paData)
//       // console.log(data)
//       for (key in data) {
//         if (paData == key) {
//           let dataModal = data[key]
//           // console.log(dataModal);
//           let name = dataModal.name
//           let title = dataModal.title
//           let rol = dataModal.tags[0]
//           let rol2 = dataModal.tags[1]
//           let image = dataModal.splash
//           let miModal = ` <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
//           <div class="modal-dialog modal-xl">
//             <img src="${image}" alt="${name}" width="100%;">
//             </div>
//           </div>`;
//           paraModal.innerHTML = miModal
//           printModal()
//         }
//       }
//     })
//   }
//   // console.log(champs[0].id)
//   // console.log(data)
// }

// const filterData = (array) => {
// //   // array.forEach(element => {
// //   //   console.log(element.name);
// //   // });
// //   array.filter(element => {
// //     element = element.name
// //     element = element.toLowerCase()
// //     for(let i = 0 ; i<element.length; i++){
// //       if(element[i] == letras){
// //         console.log(element);
// //       }
// //     }
// //     // element == 'A' ? console.log(element) : console.log('error');
// //     //  console.log(element)
// //   })
// }


const fetchData = () => fetch('./data/lol/lol.json')
.then(resp => resp.json())
.then(json => proccesData(json.data));

window.fetchData = fetchData
