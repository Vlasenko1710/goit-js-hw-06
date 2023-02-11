const totalLiItems = document.querySelectorAll('li.item');

console.log('Number of categories:', totalLiItems.length);
totalLiItems.forEach((element) =>
{
console.log('Category:', element.firstElementChild.textContent);
console.log('Elements:', element.lastElementChild.children.length)});