---
template: post
title: Performance of your javascript code
slug: /performance-of-your-js-code/
draft: false
date: '2018-08-19'
description: 'Performance API, a forgotten one, is actually very useful.'
socialImage: /media/testing-performance-js.jpg
category: Javascript
tags:
  - Javascript
---
Sometimes you probably might wonder how fast your web application can proceed, or your javascript code can work. Or possibly a user of your application (generally a customer) might want to complain about the speed of your work and this is an important factor in representing your project in front of your app's consumers and sponsors. They wonder the most when your app is matter in working with source that needs speed, especially I mean the most to frameworks and projects that are intended to the customers who need the fastness than the others. Together with the advancement of technology, you can now test the performance with the help of browsers' extensions and developer tools like benchmarks. They work of course well, but as a proficient javascript developer, you should know that you can do the same with originally provided APIs.

### With Date Object

Testing the performance is all about dealing with time. The great thing is that almost every programming language has a date class, with the help of it we can handle the counting of time easier. So, let me write a few code representing the calculation of performance together with date object. Don't forget that you are facing with computer processing that can perform a lot even in a short time. They really are super fast, therefore, you can't count it's working rate per time with seconds, if so the error percent will be huge and your test can't be accurate. Date object has a method called `getTime()` that can return the number of milliseconds since 1 January 1970 00:00:00, and that might really be useful in our testing. (To have more accurateness, milliseconds in not sufficient enough to perform the test. High resolution time could be measured using the `performance API` that we'll cover later in the next part of this article.)

I just want to show you also can just do that way, and I also intended to the runtime scripts that will not be supported by the performance API. For the browsers used scripts, I want you to prefer the performance API that results in high resolution time and it's the highly recommended `API` supported for performance testing.

```js
let startTime, endTime, timeTaken

startTime = new Date().getTime()
setTimeOut(() => {
    console.log('nothing')
    endTime = new Date().getTime()
    timeTaken = endTime - startTime
}, 1000)

console.log(`It took about ${timeTaken} milliseconds`)
```

### With performance API

Can you see that I mentioned _"about "_ in the last line of code, that means that the way we did earlier results in an inaccurate value of time, because milliseconds were not enough to measure that great rate of work. What we need to do so is to find high resolution time, and in that way it might be really good. That's important because if you don't know the precise performance of your application, you also can't optimize it in a really good way.

How can you get the high resolution time? That's the easy one. You can get it by calling the now method of the performance object. And we can use it in the same way we did earlier.

```javascript
let perf = window.performance
let time = perf.now()
```

But from here, I'm not doing the same as the performance object also provided other useful ways to do so and we will use them, we should use them.

You can use `performance.mark` to mark with tags like marking start time and end time, but the `mark` methods will result not the same as the `getTime` method, it's more precise and it's what we are saying, High Resolution Time. And you can measure the time taken between two marked tags by the method `performance.measure`. After measuring, the API will store you measured data in the Entries array of the performance API. The `performance.measure` method takes three parameters, the first is the name of your data in which your measured entries will be stored, the next two are the former start tag and the latter end tag you've been marked.

 In a few lines of code, I can show how to do so.

```javascript
performance.mark('startTime')

setTimeOut(() => {
    console.log('nothing')
    performance.mark('endTime')
    performance.measure('timeTaken', 'startTime', 'endTime')
    
    let measures = performance.getEntriesByName("mySetTimeout")
    let measure = measures[0]
    console.log("setTimeout milliseconds:", measure.duration)
    
    performance.clearMarks()
    performance.clearMeasures()
}, 1000)
```

The method measure results in an object with the elements:

```json
{   
    "name": "Name of the Entry",
    "entryType": "Type of the Entry",
    "startTime": "starting time",
    "duration": "time taken"
}
```

Therefore, to get the time taken you have to call the entry duration. Don't forget the last lines that cleared the cached entries, if not, these entries will appear and mess your code up next time you measure. You'll see the duration is pretty precise than the `getTime` method, and that's may be the reason why we should use the performance API. In fact, Date object is not created for the performance testing but the performance object is.
