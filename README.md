# PLP
## Product-Listing-Page with JS HTML CSS
### Using FakeStoreAPI

[FakeStoreAPI](https://fakestoreapi.com) is a free online API that I have used to get dummy product data for my product listing page.

Visit in detail docs in [FakeStoreAPI](https://fakestoreapi.com) for more information.

## Why?
As part of an assignment I had to design a PRODUCT LISTING PAGE and needed fake data.

## JSON Source
Products https://fakestoreapi.com/products

## How?
I have fetched all products data with fetchAPI method

### Syntax to get all products from API
```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
