# Development

### Link to Deployed Website
If you used the stencil code, this is `https://elatedlion787.github.io/development-project/`

### Goal and Value of the Application
The goal of the application was to create an e-commerce based resturant website that allows users to navigate the resturant's offerings through filters (based on Vegetarian-Friendliness and the type of dish) and sorting features (Sorting by Price). The user can also add items to a cart and see their total. I also created this project in order to refine my React skills.

### Usability Principles Considered
Some of the usability principles I considered were learnability/memorability. I utilized a very simple interface, with a green-filter section and a card-based system that was very intutive. In order to separate products, I considered the visual hierarchy of product displays and used the "card" based display system that separates cards with a shadow around the card. I also bolded the names of the products in order to have the information stand out.

### Organization of Components
There are three large components: The FilterBar component, The Aggregator component and the ThaiItem component.
The FilterBar component is made up of the various filters/sorting options.
The Aggregator component is made up of a CartItem component, where each CartItem represents each individual item on the "tab".
The ThaiItem component is a component that makes up the item card. This displays the respective food along with its qualities (price, vegetarian friendly) and its quantity. There are also buttons to add/remove the item from the cart.

### How Data is Passed Down Through Components
Data is passed down through components via props.

The FilterBar component receives the filtering and sorting functions (which update the state for our filter and sortTypes) via props.
The Aggregator component receives the food data, the cart, a function to clear the cart and a cartTotal value via props. The Aggregator sends individual food information and quantity information to the CartItem component via props. 

The ThaiItem component receives information on each food, the cart (to get its quantity) and an onclick function to remove/add from the aggregator via props. The component then creates a card for the respective food item.


### How the User Triggers State Changes
The user can trigger state changes the following ways: Adding an item to the cart, Selecting a Filter, Selecting a Sort Mechanism, Removing an Item from the cart or clearing the cart. The list of data is a state variable, so changes to the data changes sate


## Note: Weird Bug 
Initially, and only on the first click, if the user does not apply any filters and clicks Price Low-High, the products will actually filter High-Low. However, if the user then clicks on Price High-Low and Price Low-High again, this error will be fixed