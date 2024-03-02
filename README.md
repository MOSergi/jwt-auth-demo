# JWT BASIC AUTH DEMO

## idea

### The idea behind this is create a demo of jwt functionallity.

The process is simple, when user succesfully loged in, API creates a token
and send it to the client in a http only cookie.

Then, we need to put a middleware in our protected routes to check if token is valid. If token is not valid or is expired, we send an error.

In the client, when we need to fetch data from a protected route, we need to send this token from cookies. That is simple, only will send creedentials in the http request. For example, in Axios library, the only step we need to do is add to our request the config param "withCredentials : true". This will automatically place the cookie in our request.