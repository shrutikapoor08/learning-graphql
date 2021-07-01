 ---
layout: post
title: What is GraphQL? 
---


## What is GraphQL? 

In simple terms, its like when you go to a pizza place, and order a "Make your own" pizza - you pick the base, the sauce, the cheese, the toppings and when the pizza is done, you get exactly what you asked for. With REST, its like you pick a pizza from the predefined menu items. You may get the toppings you want, but you may also get other toppings (like tomatoes) you didn't ask for and sometimes, we will just have to manually pick the tomatoes out of it. 

In technical terms, a GraphQL is a query language - a syntax for querying for data from any data source - be it an API or database. GraphQL is an alternative to REST APIs and provides a new way of asking for data. GraphQL lets you specify what data fields you need, and delivers exactly those fields. GraphQL [specification](https://spec.graphql.org/) defines the set of rules for implementing a GraphQL API. 

Important point to note is that GraphQL isn't a query language for your database. Unlike SQL, you don't have a query such as `SELECT * from users` for your database. Instead, GraphQL syntax defines how to ask for data from your API. the syntax of a GraphQL query looks like this - 

```graphql
query getUsers{
    users {
        firstname
    }
}
```

So, the `QL` in GraphQL means a query language for your API, not database. 

A cool thing to note is that GraphQL can be used with any data source such as REST APIs & database. It can be plugged anywhere, built in any language and can be fit on top of any database and tech stack, which means that you can use GraphQL on top of REST APIs and still get the benefits of GraphQL without having to tear down existing REST based architecture. You can use GraphQL in a Java app, JavaScript app, Python, Django, NextJS

GraphQL fits on both client and server side layers. You build a GraphQL API on the server side and then consume this GraphQL API on the client side by firing GraphQL requests (queries, mutations, etc.). There are tools such as [Apollo](https://www.apollographql.com/docs/tutorial/introduction/) that provide full stack solutions to help build GraphQL API on the server and consume it on the client side. 


## REST vs GraphQL example: Making an API request

Let's say that we want to fetch a user's name. In a REST API, we have an endpoint that we can use to make a GET request. The endpoint may look like `/users/{id}/`. If we use a curl request to make a call and pass in `id` of a user, it will look like this - 


```javascript 
curl \
-H "Content-Type: application/json" \
https://www.example.com/api/users/123`
```

Let's look at how GraphQL request will look - 
1. The "GET" operation of REST is done by ["Query"](https://graphql.org/learn/queries/) in GraphQL. 

2. We don't have a separate endpoint for `users` in GraphQL. Every request is sent to `/graphql` endpoint.

3. In order to describe what data we are interested in, we pass the relevant parameters to "Query" operation and describe which Query we are interested in. A GraphQL API may support something like "getUsers" Query, which is a query we can use to get users. 

A curl request to a GraphQL API looks like -

```javascript
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ user(id:123 ) { name } } " }' \
https://www.example.com/graphql
```

[Try out sample GraphQL requests here](https://graphqlzero.almansi.me/api)

## REST vs GraphQL: Implementing the API

In REST world, we will have resource implementations for each of our operations, such as `GET /user/{id}` is mapped to `getUser(String id)`. `getUser` defines what data is passed if this endpoint is called. This resource implementation will also call any downstream operation if need be - other APIs or fetch directly from the database.

In GraphQL, when implementing a GraphQL API, we need to first the define the schema of the API. Schema is a complete description of what queries, mutations and parameters are allowed. A "GET" operation is done by "Query" in GraphQL. We can specify what arguments a query accepts in a Schema

`type Query {
	getUser(id: $String!)
}`

What we return from this `getUser` query is defined by a function called resolvers. Resolvers define what data should be returned when a field is called. Every query is mapped to a resolver. A resolver function can call any API or data sources. Our resolver can be written like this - 

```
getUser(args){
	const { id } = args;
	//fetch from database / API 
}
```


when a client fetches `getUser` query, they will get back data like this - 
```
{
	"data" : {
		"name": "Sample name"
	}
}
```


## GraphQL terminology
1. Query: Query is similar to GET in REST. When we want to fetch information from a GraphQL API, we use Query. 
2. Mutation: A mutation is used when we want to mutate the data on the server. A mutation is similar to PUT, POST, DELETE, PATCH in a REST API.
3. Schema: Schema is a complete representation of what operations a GraphQL API supports. 


## Major differences between REST and GraphQL 
| REST 				| GraphQL 			|
|------				|------------		|
|REST has multiple endpoints.  | GraphQL has one endpoint - /graphql|
|REST APIs support PUT, GET, POST, DELETE, PATCH  | GraphQL supports Query, Mutation, Subscription |
|REST endpoints are populated by resource implementations  | GraphQL fields are populated by resolvers |
| 200 , 400 , 500 level status codes | 200 level status codes |
| Often times, roundtrips need to be done in order to fetch complete data  |  You can fetch multiple fields therefore fetch all the data you need with one requestt|
| Shape of the data is determined by the server  |  Shape of the data is determined by the client calling the API.  |



##  When to use GraphQL vs REST

**When to use GraphQL**
1. When you have multiple downstream APIs
2. When you have extraneous data coming from downstream APIs
3. When you care about which fields are being used by which clients. With the help of GraphQL, you can have field level instrumentation. 
4. When you care about ensuring that all clients have the most up to date version of your API. With GraphQL, since there is one endpoint, all updates are given to everyone. 
5. When you want to build a UI-first API.
6. When you care about underfetching and overfetching. 

**When to use REST **
1. When you depend heavily on caching.
2. When you don't know a complete set of fields you may get from downstream APIs. With GraphQL, you need to know the schema upfront.
3. When you rely heavily on status codes of downstream APIs. Everything in GraphQL is a 200, so you will need to parse the response object or errors object. 


## Prereqs to learn GraphQL 
While I don't think there is necessarily any pre-reqs, it helps to know the following - 
1. Fundamentals of API development
2. REST APIs
3. HTTP 
4. A language of choice for implementing GraphQL API - JavaScript, Go, Java, Python etc. 

## Resources to learn GraphQL 
1. [GraphQL.org](https://graphql.org/)
2. [howtographql](https://www.howtographql.com/)
4. [GraphQL book by Eve Porcello](https://www.oreilly.com/library/view/learning-graphql/9781492030706/)
5. [Udemy course by Stephen Grider](https://www.udemy.com/course/graphql-with-react-course/)
6. [LearningGraphQL](https://learninggraphql.com/)



## TL;DR 
In plain words, GraphQL is a syntax for asking for data. The big difference between REST and GraphQL is that there is one endpoint only - `graphql`, and in addition to making the call to the API endpoint and passing desired parameters, we also need to provide exactly what fields we want to access.

In technical terms, GraphQL is a specification and provides a way for querying for data. The specification specifies what should happen when data is requested and mutated. GraphQL specifies a way to ask for data, and delivers exactly the data that was requested. Since it is a specification, GraphQL APIs can be created in language - JavaScript, Java, Go, Python. 


---

Other GraphQL resources I have published - 
1. [What is GraphQL and why should you use it - Front End Happy Hour Podcast](https://frontendhappyhour.com/episodes/no-rest-with-quintessential-libations-graphql/)
2. [Common GraphQL misconceptions](https://dev.to/shrutikapoor08/what-is-graphql-the-misconceptions-57b9)
4. [Using GraphQL in an enterprise](https://www.youtube.com/watch?v=axQzCQ2Q4Rc)
3. [Moving from Redux to GraphQL](https://www.youtube.com/watch?v=HL7gZnrEy68)
5. [GraphQL & State Management](https://www.youtube.com/watch?v=7raJccyHh0Y)
6. [GraphQL Hub](https://learninggraphql.com/)

