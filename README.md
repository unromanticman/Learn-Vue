# Learn Vue
This is the basic core exercise of Vue.


### Introduction to Vue
learn:
```
    Createing Vue Apps、el、Data、Templates、Components、Virtual DOM、Directives
    
    Make front-end code quicker to write — loading Vue in one line, mustache templates,
    built-in directives, and re-usable components make Vue easy to read and easy to write
    
    Make front-end code easier to modify and fix — using readable mustache templates, 
    using built-in heavily-tested directives, and consolidating repetitive code into 
    components make Vue code less error-prone and easier to fix when errors do occur
    
    Make front-end apps fast and responsive — Vue’s use of a Virtual DOM makes site updates 
    happen only when they need to and incredibly fast when they do
```

### Vue Data
learn:
```
    data - used for storing known dynamic values
    computed - used for computing dynamic values based on known dynamic values 
               can additionally specify a setter by specifying get and set functions 
               the setter will update other dynamic values when the computed value changes
    watch - used for performing functionality when a specified dynamic value changes
    methods - used for storing instance methods to be used throughout the app
```

### Vue Forms
learn:
```
    Form fields can be bound to Vue data using the v-model directive — 
    how v-model is used depends on the type of field it is being added to

    Form event handlers can be added using v-on:submit and v-on:reset

    Modifiers can be used to add functionality to directives — 
    most importantly preventing page reload on form submission using
    v-on:submit.prevent and cleaning up form field values using 
    .number and .trim

    Form validation can be implemented by setting the value of the disabled
    attribute on a <button> to the value of a computed property using v-bind
```


### Styling Elements with Vue
learn:
```
    style - dynamically add inline styles using v-bind:style with a style object or an 
    array of style objects. 
    class - dynamically add classes using v-bind:class with a class object or an array 
    of class objects and class name strings.
```

