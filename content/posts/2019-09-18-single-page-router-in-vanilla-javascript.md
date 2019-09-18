---
template: post
title: Single Page Router in vanilla Javascript
slug: /single-page-router-in-vanilla-js
draft: true
date: 2018-08-02T07:04:43.857Z
description: 'How can you make one, intuitively.'
category: Javascript
tags:
  - Javascript
---
![router image](/media/creating-single-page-router.jpg "router image")

Together with the advancement of web technology, I saw that people prefer more to single page applications than multiple pages applications.  But there're still a lot of questions about using single page applications (from now on I will refer to SPA) everywhere,such as should we use SPAs in every of our web applications, and projects? Honestly, for me the answer is 'I don't know' . How do I know the likes and unlikes of every people, but out of everyone I like them. For some reasons, I love them. I saw people saying that they makes the application uglier, but I don't think so. The advantage of SPAs is that during the loading state (technically while the browser's request and server response are working) , we can make the clients not to feel bored by showing some cool UI effects and animations, skeleton structures and some awesome loading effects other than the spanning circle of the browser (and also the running dots in Firefox and IE).

### SPA or MPA

Nothing is perfect. Even though SPA seems great, it's not flawless. With single page applications, we can get responsive design and fast loading as it loaded most resources such as HTML, CSS, and some scripts  once throughout  it's lifespan. They don't update the whole page but only the required content by the help of modern web technologies such as AJAX(asynchronous javascript and XML) and HTML5. You now can choose many of many javascript frameworks for the better performance of your SPA(Vue,React,Angular,Mithril,...). We don't have build every response of query from server, only data is transmitted and your javascript functions will render it to the view. If your projects needs SEO optimization, SPA is not a good choice. And as another bad thing, a lot security issues can occur if you don't handle it specifically. SPA is good for social networks that don't need SEO optimization, and simple applications with small data.Other opinions such as depending  too much on javascript , browser history, and scalability can be solve with wits,skill and experience on coding.And maintainability can no longer be an issue as there are debugging tools for each frameworks, some frameworks even have really large community such as react and angular.

After a long and tedious lines, its time for what I really want to say.

When you want to build dead simple applications, requiring skill to master frameworks can sometimes be an issue. But it's not what I really want you to know, these skills can be useful, the issue it that we are linking all the codes from frameworks but don't use it. If you want to listen an event, you don't need to create an Observable (stream if it sounds wired) until you need the other functionalities that they offer. It sometimes can slow down the performance of your applications.

```javascript
Rx.Observable.fromEvent(button,'click')
    .subscribe(() => {
    console.log('Button has been clicked!')
})
```

It will be the same if you do this in vanilla javascript,

```javascript
button.addEventListener('click',() => {
    console.log('Buttton has been clicked!')
})
```

These frameworks are not there for that, they are for maintaining complex codes, complex ideas and large-scaled applications, don't misappropriate them.

### Routing

Routing or navigating is a non-trivial matter in single page applications. The code I will implement will be capable of routing with hash or hash-bang. For those who think that routing with hashes does not seems cool should dig deep about Web History API or routings frameworks and library. The reason I don't implement such a  cool routing is that it needs to be handle also from the server, maybe there're some people who dig into SPA not to touch the server side will not think that cool routing will not seems cool.

So let's start, first abstract the final version how can we manage the routes.

```javascript
let router = new Router({ outlet: '#router-outlet' })
let routes = {
    '/': `<p>This is home page</p>`,
    '/about': `<p>This is about page</p>`
}

router.forRoot(routes);
```

By splitting them into small parts. We know that,

Router has to be a class and its argument is an object where we can define router outlet, the place where our routes data will be rendered.

Prototype of Router, forRoot function accepts an object of routes in the interface of { path : template }

The good thing for our router is that as it works with hashes, changes of hashes in location object can be easily tracked so we can track it according to the changes we should update the template of the current route. 

Our router will work only when the forRoot function is called, it will take the routes that the function provide and navigate to each routes when the changes from hash of location is tracked. So we should define a function called navigate that takes the hash from the URL, and if there's no hash it could set '#/'.  We also should run it for the first time when the browser loaded the page for the first the first time.

```javascript
//create the Router class
class Router{
    constructor(config){
        this.outlet = config.outlet; //user defined router-outlet URL
    }
    forRoot(routes){
        this.routes = routes;
        window.addEventListener('hashchange',()=>{ // track the hashchange
            
        })
    }
}
```

The basic structure is done, we have to define what we have said, navigate function. Our navigate function in constructor will look like this,

```javascript
this.navigate = (routes) =>{
    if(!location.hash) location.hash = '#/'; //If there's no hash
    let path = location.hash,substr(1); // remove the hash
    //It's time to render
    if(routes[path]) document.getElementById(this.outlet).innerHTML == routes[path];
}
```

This navigate function will have to work in the hashchange event and also when the forRoot is called, so router will work for the first time after page loading. Let's put these pieces in place.

```javascript
class Router{
    constructor(config){
        this.outlet = config.outlet;
        this.navigate = (routes) =>{
            if(!location.hash) location.hash = '#/';
            let path = location.hash.substr(1);
            if(routes[path]) document.getElementById(this.outlet).innerHTML = routes[path];
        }
    }
    forRoot(routes){
        this.routes = routes;
        this.navigate(routes);
        window.addEventListener('hashchange',()=>{
            this.navigate(routes)
        })
    }
}
```

This router works fine, I  intended to ones who needs only a router engine, not two way data-binding, not directives and no reducers and state managements.

You can import templates using AJAX and then you can build a dead so simple SPA. I hope this article would be useful for those who do javascript. Thanks.
