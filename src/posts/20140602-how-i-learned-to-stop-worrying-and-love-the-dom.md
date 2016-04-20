title: How I Learned to Stop Worrying and Love the DOM

+++


# How I Learned to Stop Worrying and Love the DOM

JavaScript wasn't always an easy language to build with. Slow rendering engines and inconsistent DOM implementations made large, complex apps unthinkable. But over the years browsers have gotten faster, XMLHTTPRequest has become the norm, and jQuery has smoothed out the rough edges of dealing with the DOM. Still, when building a web app of any reasonable size, organization is essential. Assuming your project scope doesn't include maintaining and documenting a DIY framework, it's time to start looking at the major contenders in front end JS ecosystem: Backbone.js, AngularJS, and Ember.js. Which is the best fit for your project?

### The Frameworks

Each of these frameworks focus on solving a real-world problems. Those problems, and their solutions, shape the opinions, trade-offs, and design decisions you'll have to work with when building your app.

#### Backbone

While jQuery makes it easy to work the the DOM, Backbone makes it easy to work with data (in fact, the two work well together). By pulling your data into models with key-value binding and custom events, organizing those models into collections, and exposing them in views, Backbone provides the basic structure for a data-driven web app. But, as the name implies, Backbone is a building block. You're going to write a lot of boilerplate code for things like data binding (bring-your-own templating engine) , dealing with complex business logic (there are no controllers), and managing application state. That said, Backbone is simple to learn, quick to load, works well with other JS libraries, and is well documented. If you're adding functionality to an existing app, or building part of a larger app, Backbone may be just what you're looking for.

#### Angular

Angular is what HTML would've been, had it been designed for web apps instead of static documents. By extending the vocabulary of standard HTML to include two-way data binding and reusable, custom tags and attributes, Angular excels at simplifying complex UI interactions and organizing large, repetitive web apps. This focus on the UI leaves room for improvement when dealing with data models and application state. Directives, one of Angular's biggests strengths, manage their data through a passed-in scope. While this makes them flexible, it means there's no persistent data model throughout your app. No model relationships, no shared single-source-of-truth, and no tight integration with an API. Another issue to watch out for is scale. Angular uses dirty checking to manage the DOM (when the data changes, it re-renders everything bound in the templates). This allows you to bind to primitives instead of functions, which on a small scale makes rendering fast. If you have to start binding to functions or dealing with large data sets (Angular has a 2,000 object binding limit), things slow dramatically. If your application is more UI centric then data centric, Angular is a good fit. Setup is simple and quick, and Angular can handle entire applications or just portions of a page. With only a few, albiet uncommon, concepts to learn, youll be up and running without much trouble. There's a lot of interest in Angular at the moment, so finding help should be easy.

#### Ember

Ember shines when building ambitious web apps. It's the full front-end kit: single-source-of-truth, relatable models; business logic in controllers; UI logic in views; two-way binding in templates; a best in class router to maintain state; reusable components; and Ember Data for tight API integration. It's designed to take on the bigger problems of bigger applications, and solves a lot of them for you out of the box. All those features come with a steep learning curve, and getting started can be more difficult than with Backbone and Angular. Ember is overkill on smaller apps, and isn't well suited for only dealing with an existing application. Sometimes the complexity trade-off makes sense, sometimes not. It depends on the project. Keep an eye on rendering performance. Ember uses Handlebars (it's built-in) for templating, and binds everything with getter and setter functions. This gets around the dirty checking limitations of Angular, but can be slow to render. Precompiling your templates on the server will make your templates snappier, and the upcoming HTMLbars variant of Handlebars should solve the problem completely. Ember relies heavily on convention over configuration and active code generation to nudge your design decisions in the right direction. If you're building a web app from scratch and need to deal with both a heavy UI and complex data logic, Ember is the way to go. The documentation is excellent these days, and with the ember-cli project, the build tools are quickly becoming top-notch as well.

### The API

Last but not least is your API. The closest thing we have to a real standard at the moment is a RESTful JSON API. I urge you to take a look at http://jsonapi.org, and to try to follow their lead as closely as reasonably possible. It'll save you, and everyone else using your API, a ton of both time and headaches. There's nothing quite like building an amazing front-end web app only to have to comprimise your code to accommodate a poorly designed API.

### Where to Go From Here

Now go try out these framworks for yourself: \- <http://backbonejs.org> \- <https://angularjs.org> \- <http://emberjs.com> \- <http://jsonapi.org>
