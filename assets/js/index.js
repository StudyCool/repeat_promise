'use strict';

fetch('./user.json')
    .then(response => response.json())
    .then(appendUserItemToList)
    .catch(console.error);

function  createUserItem(user) {
    const userItemContainer = document.createElement('div');
    userItemContainer.classList.add('imageContainer');
    const userFullNameElem = document.createElement('h3');
    userFullNameElem.classList.add('fullName');
    userFullNameElem.innerText = `${users.name} ${users.surname} `;

userItemContainer.appendChild(userFullNameElem);
 //   userItemContainer.appendChild()

    return userItemContainer;
}

function createUserImgContainer(){

    users.forEach(users.picturePath =>
    userImgElem.src = `${users.picturePath}`;
    userImgElem.alt = 'user Profile';

)



}

function appendUserItemToList(user) {
document.getElementById('userList').appendChild(createUserItem(users))
    document.getElementsByClassName('imageContainer').appendChild(createUserImgContainer(users))
}