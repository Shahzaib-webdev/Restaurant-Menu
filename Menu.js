const breakfastMenu = ['Pancake - 12$', 'Eggs Benedict - 23$', 'Oatmeal - 22$', 'Frittata - 17$'];
const mainCourseMenu = ['Steak - $', 'Pasta - $', 'Burger - $', 'Salmon - $'];
const dessertMenu = ['Cake - $', 'Ice Cream - $', 'Pudding - $', 'Fruit Salad - $'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// for main course

const mainCourseMenuItems = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p> `).join('');
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItems;


// for desert 

const dessertMenuItemsHtml = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p> `).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHtml;

