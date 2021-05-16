---
layout: post
title: What is GraphQL? 
---

In simple terms, a GraphQL API is a way of getting data from any data source. If you are familiar with REST, GraphQL is an alternative to REST APIs and provides a new way of asking for data. GraphQL provides a way to query an API and provides a server-side runtime for fulfilling those queries. The GraphQL spec provide a set of rules for defining what should happen when a GraphQL query or mutation is made. 


In technical terms, GraphQL is a query language for an API and provides a server-side runtime for fulfilling the query. GraphQL [specification](https://spec.graphql.org/) defines the set of rules for implementing a GraphQL API. 

Important distinction to note is that GraphQL doesn't define the query language of your database. Unlike SQL, you don't have a query such as `SELECT * from users` for your database. Instead, GraphQL defines how to ask for data from your API. So you would say, "give me first names of all users". Specifically, the syntax of a GraphQL query looks like this - 

```graphql
query getUsers{
    users {
        firstname
    }
}
```

So, the `QL` in GraphQL means a query language for your API, not database. 


A cool thing to note is that GraphQL can be used with and on top of any data sources such as REST APIs & database and it can be plugged anywhere, built in any language and fit on top of any database and tech stack, which means that you can use GraphQL on top of REST APIs and still get the benefits of GraphQL without having to tear down existing REST based architecture. 

GraphQL fits on both client and server side layers. You build a GraphQL API on the server side and then consume this GraphQL API on the client side by firing GraphQL queries. There are tools such as [Apollo](https://www.apollographql.com/docs/tutorial/introduction/) that provide full stack solutions to help build GraphQL API on the server and consume it on the client side. 


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


## TL;DR 
In plain words, GraphQL is a syntax for asking for data. The big difference between REST and GraphQL is that in addition to making the call to the api endpoint and passing desired parameters, we also need to provide exactly what fields we want to access.

In technical terms, GraphQL is a specification and provides a way for querying for data. The specification specifies what should happen when data is requested and mutated. GraphQL specifies a way to ask for data, and delivers exactly the data that was requested. Since it is a specification, GraphQL APIs can be created in language. GraphQL 


---

Further Reading - 
1. [What is GraphQL and why should you use it - Front End Happy Hour Podcast](https://frontendhappyhour.com/episodes/no-rest-with-quintessential-libations-graphql/)
2. [Common GraphQL misconceptions](https://dev.to/shrutikapoor08/what-is-graphql-the-misconceptions-57b9)
4. [Using GraphQL in an enterprise](https://www.youtube.com/watch?v=axQzCQ2Q4Rc)
3. [Moving from Redux to GraphQL](https://www.youtube.com/watch?v=HL7gZnrEy68)
5. [GraphQL & State Management](https://www.youtube.com/watch?v=7raJccyHh0Y)
