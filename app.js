let myHuskies = [
  {
    name: "Alpha",
    myImg: "images/husky1.jpg",
    myClicks: 0
  },
  {
    name: "Bravo",
    myImg: "images/husky2.jpg",
    myClicks: 0
  },
  {
    name: "Charlie",
    myImg: "images/husky3.jpg",
    myClicks: 0
  },
  {
    name: "Delta",
    myImg: "images/husky4.jpg",
    myClicks: 0
  },
  {
    name: "Echo",
    myImg: "images/husky5.jpg",
    myClicks: 0
  }
];

const myName = document.querySelector('.dogName');
const myCount = document.querySelector('.numClicks');
const myList = document.querySelector('.myList');
const myPicture = document.querySelector('.myImg');
let myId = 0; //Will store ID of cat so I can increment counter

for (let i = 0; i < 5; i++) {
  myList.children[i].textContent = myHuskies[i].name; //put names on list

  myList.children[i].addEventListener('click', (event) => {
    if (event.target.nodeName === "LI") {
      myId = i; //Store ID so click on image can be called

      myPicture.src = myHuskies[i].myImg; //Change image
      myName.textContent = myHuskies[i].name; //Change name in HTML
      //update display of clicks
      myCount.textContent = `Number of clicks for this Husky: ${myHuskies[i].myClicks}`;
    }
  });
}

myPicture.addEventListener('click', () => {
  myHuskies[myId].myClicks++; //Increment Clicks
  //update display of clicks
  myCount.textContent = `Number of clicks for this Husky: ${myHuskies[myId].myClicks}`;
});
