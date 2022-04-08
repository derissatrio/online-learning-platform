# Installation
- npm i bcryptjs cors dotenv express jsonwebtoken pg sequelize cloudinary

# Link Deploy Heroku

# REST API

List of available endpoints (server for admin and user):

- `POST /admin/register` 
- `POST /admin/login`
- `POST /admin/courses`
- `GET /admin/courses`
- `GET /admin/courses/:id`
- `GET /admin/statistic`
- `PUT /admin/courses/:id`
- `DELETE /admin/courses/:id`
- `DELETE /admin/users/:id`

- `POST /users/register` 
- `POST /users/login`
- `GET /users/courses`
- `GET /users/courses/:id`
- `GET /users/categories`
- `GET /users/categories-populars`


## 1. POST /admin/register

Description:
*Create New Admin, but login account role of admin is required for add new admin*

Request:
- body

```json
{
  "email": "string (email format)",
  "password": "string"
}

```

- headers

```json
{
  "token": "string",
}

```

_Response (201 - Created)_

```json
{
  "message": "string",
  "email": "String
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Is Required!"
}
OR
{
  "message": "Email Has Been Taken!"
}
OR
{
  "message": "Password Is Required!"
}
OR
{
  "message": "Email cannot be null!"
}
OR
{
  "message": "Password cannot be null!"
}
```

&nbsp;

## 2. POST /admin/login

Description:
*Login account*

Request:
- body

```json
{
  "email": "string (email format)",
  "password": "string"
}

```

_Response (200 - OK)_

```json
{
  "access_token": "String",
  "role": "String"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Is Required!"
}
OR
{
  "message": "Password Is Required!"
}
OR
{
  "message": "Email cannot be null!"
}
OR
{
  "message": "Password cannot be null!"
}
```

&nbsp;

## 3. POST /admin/courses

Description:
*Add new course*

Request:
- body

```json
{
  "name": "Inkscape Master",
  "price": "free",
  "photoUrl": "./inkscape.jpg",
  "CategoryId": "1"
}

```

- headers

```json
{
  "token": "string",
}

```

_Response (201 - Created)_

```json
{
  "message": "New course has added!",
  "course": {
    "id": 28,
    "name": "Inkscape Master cloud",
    "price": 0,
    "photoUrl": "https://res.cloudinary.com/dohseq683/image/upload/v1649405618/izvlyjd7fej0ii0jj1il.jpg",
    "CategoryId": 1,
    "UserId": 5,
    "updatedAt": "2022-04-08T08:13:38.865Z",
    "createdAt": "2022-04-08T08:13:38.865Z"
  }
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name Is Required!"
}
OR
{
  "message": "Name cannot be null!"
},
OR
{
  "message": "Price Is Required!"
}
OR
{
  "message": "Price cannot be null!"
},
OR
{
  "message": "Photo URL Is Required!"
}
OR
{
  "message": "Photo URL cannot be null!"
}
```

&nbsp;

## 4. GET /admin/courses

Description:
*Get all courses*

request: 

- headers

```json
{
  "token": "string",
}

```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Full Stack JavaScript Immersive",
    "price": 800000,
    "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
    "UserId": 1,
    "CategoryId": 2,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  {
    "id": 2,
    "name": "Back End JavaScript Immersive",
    "price": 500000,
    "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
    "UserId": 1,
    "CategoryId": 2,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  {
    "id": 6,
    "name": "Adobe Photoshop Master",
    "price": 250000,
    "photoUrl": "https://img.freepik.com/free-vector/graphic-designer-workspace-concept_1284-18695.jpg?t=st=1649340048~exp=1649340648~hmac=63aa571f287eb9832e5fd6afb30a4401e60676a989e058353bf1ccc5fbdff1ea&w=740",
    "UserId": 1,
    "CategoryId": 1,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  ...
]

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

&nbsp;

## 5. GET /admin/courses/:id

Description:
*Get detail course for role admin*

request: 

- headers

```json
{
  "token": "string",
}

```

- params

```json
{
  "id": "integer",
}

```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Full Stack JavaScript Immersive",
  "price": 800000,
  "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
  "UserId": 1,
  "CategoryId": 2,
  "createdAt": "2022-04-07T14:10:05.193Z",
  "updatedAt": "2022-04-07T14:10:05.193Z"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

&nbsp;

## 6. GET /admin/statistic

Description:
*Get simple statistic*

Request:
- body

```json
{
  "email": "string (email format)",
  "password": "string"
}

```

- headers

```json
{
  "token": "string",
}

```

_Response (201 - Created)_

```json
{
  "message": "string",
  "email": "String
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Is Required!"
}
OR
{
  "message": "Email Has Been Taken!"
}
OR
{
  "message": "Password Is Required!"
}
OR
{
  "message": "Email cannot be null!"
}
OR
{
  "message": "Password cannot be null!"
}
```

&nbsp;

## 7. PUT /admin/courses/:id

Description:
*Edit course by id*

Request:
- body

```json
{
  "name": "Inkscape Master Edit",
  "price": "free",
  "photoUrl": "./inkscape.jpg",
  "CategoryId": "1"
}

```

- headers

```json
{
  "token": "string",
}

```

_Response (200 - OK)_

```json
{
  "message": "Course has been edited!"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name Is Required!"
}
OR
{
  "message": "Name cannot be null!"
},
OR
{
  "message": "Price Is Required!"
}
OR
{
  "message": "Price cannot be null!"
},
OR
{
  "message": "Photo URL Is Required!"
}
OR
{
  "message": "Photo URL cannot be null!"
}
```

&nbsp;

## 8. DELETE /admin/courses/:id

Description:
*Remove course for role admin*

request: 

- headers

```json
{
  "token": "string",
}

```

- params

```json
{
  "id": "integer",
}

```

_Response (200 - OK)_

```json
{
  "message": "Course has been deleted!"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Course not found!"
}

```

&nbsp;

## 9. DELETE /admin/users/:id 

Description:
*Soft delete user for role admin*

request: 

- headers

```json
{
  "token": "string",
}

```

- params

```json
{
  "id": "integer",
}

```

_Response (200 - OK)_

```json
{
  "message": "Users has been deleted!"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Let sign in first"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "User not found!"
}

```

&nbsp;





## 10. POST /users/register

Description:
*Create new user*

Request:
- body

```json
{
  "email": "string (email format)",
  "password": "string"
}

```

_Response (201 - Created)_

```json
{
  "message": "string",
  "email": "String
}

```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Is Required!"
}
OR
{
  "message": "Email Has Been Taken!"
}
OR
{
  "message": "Password Is Required!"
}
OR
{
  "message": "Email cannot be null!"
}
OR
{
  "message": "Password cannot be null!"
}
```

&nbsp;


## 11. POST /users/login

Description:
*Login User*

Request:
- body

```json
{
  "email": "string (email format)",
  "password": "string"
}

```

_Response (201 - Created)_

```json
{
  "access_token": "string",
  "role": "String
}

```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Is Required!"
}
OR
{
  "message": "Email Has Been Taken!"
}
OR
{
  "message": "Password Is Required!"
}
OR
{
  "message": "Email cannot be null!"
}
OR
{
  "message": "Password cannot be null!"
}
```

&nbsp;

## 12. GET /users/courses

Description:
*Get all courses*

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Full Stack JavaScript Immersive",
    "price": 800000,
    "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
    "UserId": 1,
    "CategoryId": 2,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  {
    "id": 2,
    "name": "Back End JavaScript Immersive",
    "price": 500000,
    "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
    "UserId": 1,
    "CategoryId": 2,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  {
    "id": 6,
    "name": "Adobe Photoshop Master",
    "price": 250000,
    "photoUrl": "https://img.freepik.com/free-vector/graphic-designer-workspace-concept_1284-18695.jpg?t=st=1649340048~exp=1649340648~hmac=63aa571f287eb9832e5fd6afb30a4401e60676a989e058353bf1ccc5fbdff1ea&w=740",
    "UserId": 1,
    "CategoryId": 1,
    "createdAt": "2022-04-07T14:10:05.193Z",
    "updatedAt": "2022-04-07T14:10:05.193Z"
  },
  ...
]

```

&nbsp;

## 13. GET /users/courses/:id

Description:
*Get detail course for role users*

request:

- params

```json
{
  "id": "integer",
}

```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Full Stack JavaScript Immersive",
  "price": 800000,
  "photoUrl": "https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1649339967~exp=1649340567~hmac=4090a3f8bb38d0dbfe24880a9b533601fa5a713e52857380e0dece5d79243d32&w=740",
  "UserId": 1,
  "CategoryId": 2,
  "createdAt": "2022-04-07T14:10:05.193Z",
  "updatedAt": "2022-04-07T14:10:05.193Z"
}

```

&nbsp;

## 14. GET /users/categories

Description:
*Get all categories*

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Design",
    "rating": 30,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 3,
    "name": "Marketing",
    "rating": 34,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 4,
    "name": "Business",
    "rating": 78,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 5,
    "name": "Photography",
    "rating": 50,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 2,
    "name": "Development",
    "rating": 99,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T17:28:20.900Z"
  }
]

```

&nbsp;

## 15. GET /users/categories-populars

Description:
*Get categories populars*

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Design",
    "rating": 90,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 3,
    "name": "Marketing",
    "rating": 85,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
  {
    "id": 4,
    "name": "Business",
    "rating": 78,
    "createdAt": "2022-04-07T14:10:05.183Z",
    "updatedAt": "2022-04-07T14:10:05.183Z"
  },
]

```

&nbsp;