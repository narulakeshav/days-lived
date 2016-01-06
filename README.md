# Days Lived
A small script that determines how many days you've lived.

[Check how many days You've Lived]()

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
The `Date` Object is so flexible that it takes any input by the user such as `April 13, 1997` and `Apr 13, 1997` and `04/13/1997` or even `04-13-1997`. 
<br>
Then I substracted the current day with given day and get the time in days by multiplying it:
```
var diff = new Date().getTime() - new Date(dataByUser.value).getTime();
var diffInDays = diff / (1000 * 60 * 60 * 24);
```
1000 for milliseconds, 60 for seconds and minutes, and 24 for hours. This gives us the time lived in terms of days. Then just display it.
