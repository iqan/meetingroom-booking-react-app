# Meeting room Booking app in ReactJS

## API endpoints

### List of API endpoints, this app interacts to

- ***/users/register***: Register as new user
```
Method: POST
Body: { name:string, email:string }
Response: { success:boolean, message:string }
```

- ***/users/login***: Login as existing user
```
Method: POST
Body: { name:string, email:string }
Response: { success:boolean, message:string }
```

- ***/users/authenticate***: validate and get authentication token
```
Method: POST
Body: { name:string, email:string }
Response: { success:boolean, message:string, user:userInfo, token:string, expiresIn:timespan }
```

- ***/bookings***: Get all bookings
```
Method: GET
Response: { success:boolean, message:string, data:[] }
```

- ***/bookings/:id***: Get bookings by ID
```
Method: GET
Header: { Authorization: Bearer <JWT-TOKEN> }
Response: { success:boolean, message:string, data:[] }
```

- ***/bookings***: Create a booking
```
Method: POST
Body: { name:string, email:string, room:string, subject:string, start:string, end:string }
Header: { Authorization: Bearer <JWT-TOKEN> }
Response: { success:boolean, message:string, data:{} }
```

- ***/bookings/:id***: Update a booking
```
Method: PUT
Body: { name:string, email:string, room:string, subject:string, start:string, end:string }
Header: { Authorization: Bearer <JWT-TOKEN> }
Response: { success:boolean, message:string, data:{} }
```

- ***/bookings/:id***: Get bookings by ID
```
Method: DELETE
Header: { Authorization: Bearer <JWT-TOKEN> }
Response: { success:boolean, message:string }
```
