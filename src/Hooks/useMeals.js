import React from 'react';
import breakfast1 from '../images/breakfast/breakfast1.png';
import breakfast2 from '../images/breakfast/breakfast2.png';
import breakfast3 from '../images/breakfast/breakfast3.png';
import breakfast4 from '../images/breakfast/breakfast4.png';
import breakfast5 from '../images/breakfast/breakfast5.png';
import breakfast6 from '../images/breakfast/breakfast6.png';
import lunch1 from '../images/lunch/lunch1.png';
import lunch2 from '../images/lunch/lunch2.png';
import lunch3 from '../images/lunch/lunch3.png';
import lunch4 from '../images/lunch/lunch4.png';
import lunch5 from '../images/lunch/lunch5.png';
import lunch6 from '../images/lunch/lunch6.png';
import dinner1 from '../images/dinner/dinner1.png';
import dinner2 from '../images/dinner/dinner2.png';
import dinner3 from '../images/dinner/dinner3.png';
import dinner4 from '../images/dinner/dinner4.png';
import dinner5 from '../images/dinner/dinner5.png';
import dinner6 from '../images/dinner/dinner6.png';
const useMeals = () => {
//     const data = [
//         {id:1,chategory:'breakfast',mealName:'Bagel and cream cheese',img:breakfast1,mealInfo:'How We dream about out future',price:6.99},
//         {id:2,chategory:'breakfast',mealName:'Breakfast sandwich',img:breakfast2,mealInfo:'How We dream about out future',price:9.99},
//         {id:3,chategory:'breakfast',mealName:'Baked Chiken',img:breakfast3,mealInfo:'How We dream about out future',price:6.99},
//         {id:4,chategory:'breakfast',mealName:'Eggs Benedict',img:breakfast4,mealInfo:'How We dream about out future',price:8.99},
//         {id:5,chategory:'breakfast',mealName:'Toast Croissant Fried egg',img:breakfast5,mealInfo:'How We dream about out future',price:19.99},
//         {id:6,chategory:'breakfast',mealName:'Full Breakfast Fried Egg Toast Brunch',img:breakfast6,mealInfo:'How We dream about out future',price:3.99},
//         {id:7,chategory:'lunch',mealName:'Healthy Meal Plan',img:lunch1,mealInfo:'How We dream about out future',price:23.99},
//         {id:8,chategory:'lunch',mealName:'Fried Chicken Bento',img:lunch2,mealInfo:'How We dream about out future',price:9.99},
//         {id:9,chategory:'lunch',mealName:'Tarragon-Rubbed-Salmon',img:lunch3,mealInfo:'How We dream about out future',price:6.99},
//         {id:10,chategory:'lunch',mealName:'Indian Lunch',img:lunch4,mealInfo:'How We dream about out future',price:8.99},
//         {id:11,chategory:'lunch',mealName:'Beef Steak',img:lunch5,mealInfo:'How We dream about out future',price:15.99},
//         {id:12,chategory:'lunch',mealName:'Honey-Soy-Glazed Salmon with Peppers',img:lunch6,mealInfo:'How We dream about out future',price:7.99},
//         {id:13,chategory:'dinner',mealName:'Salmon with Grapefruit and Lentil Salad',img:dinner1,mealInfo:'How We dream about out future',price:9.99},
//         {id:14,chategory:'dinner',mealName:'Lemony Salmon Piccata',img:dinner2,mealInfo:'How We dream about out future',price:10.99},
//         {id:15,chategory:'dinner',mealName:'Pork Tenderloin with Quinoa Pilaf',img:dinner3,mealInfo:'How We dream about out future',price:6.99},
//         {id:16,chategory:'dinner',mealName:'French fries with cheese',img:dinner4,mealInfo:'How We dream about out future',price:8.99},
//         {id:17,chategory:'dinner',mealName:'Garlic Butter Baked Salmon',img:dinner5,mealInfo:'How We dream about out future',price:6.99},
//         {id:18,chategory:'dinner',mealName:'Baked Chiken',img:dinner6,mealInfo:'How We dream about out future',price:9.99}
//     ]
//     return [data];
// };
const data = [
    {id:1,chategory:'breakfast',mealName:'Bagel and cream cheese',img:'https://i.ibb.co/WgMsQsR/breakfast1.png',mealInfo:'How We dream about out future',price:6.99},
    {id:2,chategory:'breakfast',mealName:'Breakfast sandwich',img:'https://i.ibb.co/92F73gG/breakfast2.png',mealInfo:'How We dream about out future',price:9.99},
    {id:3,chategory:'breakfast',mealName:'Baked Chiken',img:'https://i.ibb.co/Bwyzk3R/breakfast3.png',mealInfo:'How We dream about out future',price:6.99},
    {id:4,chategory:'breakfast',mealName:'Eggs Benedict',img:'https://i.ibb.co/5RWb4st/breakfast4.png',mealInfo:'How We dream about out future',price:8.99},
    {id:5,chategory:'breakfast',mealName:'Toast Croissant Fried egg',img:'https://i.ibb.co/4W54Sz5/breakfast5.png',mealInfo:'How We dream about out future',price:19.99},
    {id:6,chategory:'breakfast',mealName:'Full Breakfast Fried Egg Toast Brunch',img:'https://i.ibb.co/wyZWFmW/breakfast6.png',mealInfo:'How We dream about out future',price:3.99},
    {id:7,chategory:'lunch',mealName:'Healthy Meal Plan',img:'https://i.ibb.co/2gqQSK9/lunch1.png',mealInfo:'How We dream about out future',price:23.99},
    {id:8,chategory:'lunch',mealName:'Fried Chicken Bento',img:'https://i.ibb.co/KKgpLrf/lunch2.png',mealInfo:'How We dream about out future',price:9.99},
    {id:9,chategory:'lunch',mealName:'Tarragon-Rubbed-Salmon',img:'https://i.ibb.co/hmygjnc/lunch3.png',mealInfo:'How We dream about out future',price:6.99},
    {id:10,chategory:'lunch',mealName:'Indian Lunch',img:'https://i.ibb.co/LRnBW7f/lunch4.png',mealInfo:'How We dream about out future',price:8.99},
    {id:11,chategory:'lunch',mealName:'Beef Steak',img:'https://i.ibb.co/FxMZsZs/lunch5.png',mealInfo:'How We dream about out future',price:15.99},
    {id:12,chategory:'lunch',mealName:'Honey-Soy-Glazed Salmon with Peppers',img:'https://i.ibb.co/9Z1WXRy/lunch6.png',mealInfo:'How We dream about out future',price:7.99},
    {id:13,chategory:'dinner',mealName:'Salmon with Grapefruit and Lentil Salad',img:'https://i.ibb.co/yYCCn6q/dinner1.png',mealInfo:'How We dream about out future',price:9.99},
    {id:14,chategory:'dinner',mealName:'Lemony Salmon Piccata',img:'https://i.ibb.co/BrdSSqg/dinner2.png',mealInfo:'How We dream about out future',price:10.99},
    {id:15,chategory:'dinner',mealName:'Pork Tenderloin with Quinoa Pilaf',img:'https://i.ibb.co/16KdKfF/dinner3.png',mealInfo:'How We dream about out future',price:6.99},
    {id:16,chategory:'dinner',mealName:'French fries with cheese',img:'https://i.ibb.co/8MCvRz7/dinner4.png',mealInfo:'How We dream about out future',price:8.99},
    {id:17,chategory:'dinner',mealName:'Garlic Butter Baked Salmon',img:'https://i.ibb.co/cx5jTVj/dinner5.png',mealInfo:'How We dream about out future',price:6.99},
    {id:18,chategory:'dinner',mealName:'Baked Chiken',img:'https://i.ibb.co/xXkwqLs/dinner6.png',mealInfo:'How We dream about out future',price:9.99}
]
return [data];
};
export default useMeals;