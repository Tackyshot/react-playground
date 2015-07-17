This app does two hings:
- 1) it allows you to build out your react components and bundle them
- 2) it allows you to simulate HTTP requests and retrieve data from a server
  - Note: This data is in no way dynamic and is meant for testing purposes only.

***Step 1)
``` npm install ```

***Step 2)
``` npm build ```

***Step 3)
- open a second terminal and then run :
  - ``` npm run ```
  
  
***To create a new route:
- you must create a JSON file and place it in ``` ./server/routes ```
- the JSON file must have the following parameters:
```
{
  "method": ["GET", "POST"],
  "path": "/",
  "data": {
    "fruit": [
      "banana",
      "apple",
      "kiwi",
      "pineapple",
      "pear"
    ]
  }
}

```

- method:
  - Type: `Array` (Required)
  - Tells the route configuration what types of requests to allow (GET, POST, PUT, UPDATE, DELETE)
  
- path:
  - Type: `String` (Required)
  - The actual api URL path that the resource responds to

- data:
  - Type: `Object` (Required)
  - This is the data that you want to be displayed when the route is accessed.
  

