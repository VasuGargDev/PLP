# PLP
## Product-Listing-Page with JS HTML CSS
### Using FakeStoreAPI

[FakeStoreAPI](https://fakestoreapi.com) is a free online REST API that you can use whenever you need Pseudo-real data for
your e-commerce or shopping website without running any server-side code.
It's awesome for teaching purposes, sample codes, tests and etc.

You can visit in detail docs in [FakeStoreAPI](https://fakestoreapi.com) for more information.

## Why?

When I wanted to design a shopping website prototype and needed fake data, I had to
use lorem ipsum data or create a JSON file from the base. I didn't find any online free web service
to return semi-real shop data instead of lorem ipsum data.
so I decided to create this simple web service with NodeJs(express) and MongoDB as a database.

## Resource
- Products https://fakestoreapi.com/products


## How to
you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

### Get all products

```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```
