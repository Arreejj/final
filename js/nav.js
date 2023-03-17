const createNav= ()=>{
let nav=document.querySelector('.navbar');

nav.innerHTML = `
<div class="nav-div">

<img src ="img/logo.png" class="brand-logo" alt="logo is here">

<!-- 2nd container of items and include another container -->

<div class="nav-items">

 
    <div class="search"> 

<input type="text" class="search-box" placeholder="search for a product">

 <button class="search-btn"> search</button>

    </div>
    <a href="#"><img src="img/cart.png" alt="cart's icon"></a>

    <a href="#"><img src="img/user.png" alt="user's icon"></a>

    <a href="#"><img src="img/heart.png" alt="wishlist's icon"></a>

</div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a> </li>
    <li class="link-item"><a href="#" class="link">women</a> </li>
    <li class="link-item"><a href="#" class="link">Men</a> </li>
    <li class="link-item"><a href="#" class="link">Home accessories</a> </li> 
    </ul>

`;
createNav();


















}