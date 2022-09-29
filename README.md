# NODEJS REST API BACKEND

### INTRODUCTIONS

This backend application is an API application to fetch the data of posts, single post and comments in each post from JSONPlaceholder. The packages that I used during development are Axios, Express and Express Async Handler. The main reason I used this packages is because:

- Axios have the capability to serialize data as JSON automatically and make it as a data, while using fetch, we have to make the actual response and call the json() method on the response.
- Express makes us easy to develop the fullstack app or the API-Only, using either TypeScript or JavaScript. We can use other framework such as NestJS, Koa, or anything else, but since it is more easy to use.
- Express Async Handler is the middleware that used to handle the exceptions and passing them to error handlers. It same as try catch block but we have to pust next() argument when we deal the error.

### CHALLENGES

The challenges that I faced was to call the JSONPlaceholder API using fetch, before decided to used Axios. To be general, fetch is mostly used on calling the data from the from and change it as a body, that I assumed as bodyData.

Then before I decided to used Express Async Handler, I applied try catch block, and it works as I expected but still in the controllers, I have to put next() after the catch block and the code itself is quite noisy. 

In the API folder, contain a JSONPlaceholder API url file. Even though it contains only one or two lines, I guess I can enhance a bit to make the request go smooth.

And at the mean time, in the controller, the files structure is quite bugging me because Express don't provide us the file structure. So, for this assessment, I tried my best to provide the best practice using MVC methods. 