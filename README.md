# Days Lived
A small script that determines how many days you've lived.

[Check how many days You've Lived](http://narulakeshav.github.io/days-lived)

![Screenshot](http://goo.gl/72hMgs)

# How it Works
I capture the input the user types by calling the 
```
var dateByUser = document.getElementById("time");
```
Plan is to use `getTime()` so I could get the time in milliseconds and then convert that to days. In order convert the date the user inputs into milliseconds, I could do:
```
new Date(dataByUser.value).getTime();
```
The `Date` Object is so flexible that it takes any date format such as `April 13, 1997` and `Apr 13, 97` and `04/13/1997` or even `04-13-1997`. 


Then I substracted the current day with given day and get the time in days by multiplying it:
```
var diff = new Date().getTime() - new Date(dataByUser.value).getTime();
var diffInDays = diff / (1000 * 60 * 60 * 24);
```
1000 for milliseconds, 60 for seconds and minutes, and 24 for hours. This gives us the time lived in terms of days. Then just display it.

# Why I made This
I wanted to work and understand how the `Date` object worked in JavaScript. Since I'm learning JavaScript, I want to build projects that will help me understand the concepts, even if they aren't the most creative or complicated/cool. JavaScript is hard for me, I'm struggling, but this project has helped me understand how it works.
