// class YBCard {

//     constructor(id, title, description, image) {
//         this.idCard = id;
//         this.titre = title;
//         this.description = description;
//         this.image = image;
//     }

//     initCard() {
//         this.updateDom();
//         this.activateListeners();
//     }

//     updateDom() {
//         var cardDom = document.getElementById(this.idCard);
//         if(cardDom.hasChildNodes()){
//             var cardDomImage = cardDom.getElementsByClassName('card-image')[0];
//             cardDomImage.src = this.image;

//             var cardDomTitle = cardDom.getElementsByClassName('card-title')[0];
//             cardDomTitle.innerHTML = this.titre;

//             var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0];
//             cardDomDesc.innerHTML = this.description;
//         }
//     }

//     activateListeners() {
//         var cardDom = document.getElementById(this.idCard);
//         cardDom.addEventListener("mouseover", function(event) {
//             var cardDomTitle = cardDom.getElementsByClassName('card-title')[0];
//             var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0];
//             var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0];
//             var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
//             cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
//         }, false);

//         cardDom.addEventListener("mouseout", function(event) {
//             var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0];
//             cardDomMiddle.style.height = 50 + "px";
//         }, false);
//     }
// }

// var card1 = new YBCard("card1", "Фітнес", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.<br/><br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// card1.initCard();

// var card2 = new YBCard("card2", "Title card 2", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.<br/><br/> totam rem aperiam, eaque ipsa quae ab illo inventore.", "https://images.unsplash.com/photo-1558118385-34a216752d40?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
// card2.initCard();

// var card3 = new YBCard("card3", "Title card 3", "Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.<br/><br/> totam rem aperiam, eaque ipsa quae ab illo inventore.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.", "https://images.unsplash.com/photo-1557821055-a3915cdd5432?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
// card3.initCard();

// var card4 = new YBCard("card4", "Title card 4", "Example description for card 4.", "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
// card4.initCard();

// var card5 = new YBCard("card5", "Title card 5", "Example description for card 5.", "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
// card5.initCard();

// var card6 = new YBCard("card6", "Title card 6", "Example description for card 6.", "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
// card6.initCard();
