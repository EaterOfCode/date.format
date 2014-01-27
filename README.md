date.format
===========

MySQL like date formatting in JavaScript  



How does it work?
==

Simple! just include [this script](https://raw.github.com/EaterOfCode/date.format/master/date.format.js) in your page with a script tag
```html
    <script src='js/date.format.js'></script>
```
and then go wild with JavaScript
```html
<script>
    console.log((new Date()).format('Welcome to the year %Y! Humans are now 20%% robots,'
                                    +'but today on %W %e %m we will change that!'));
</script>
```
date.format.js understands all MySQL formats except `%D`


Table of available specifiers
==

Specifier|Description
--------|----
`%a`|Abbreviated weekday name (Sun..Sat)
`%b`|Abbreviated month name (Jan..Dec)
`%c`|Month, numeric (0..12)
`%d`|Day of the month, numeric (00..31)
`%e`|Day of the month, numeric (0..31)
`%f`|Microseconds (000000..999999)
`%H`|Hour (00..23)
`%h`|Hour (01..12)
`%I`|Hour (01..12)
`%i`|Minutes, numeric (00..59)
`%j`|Day of year (001..366)
`%k`|Hour (0..23)
`%l`|Hour (1..12)
`%M`|Month name (January..December)
`%m`|Month, numeric (00..12)
`%p`|AM or PM
`%r`|Time, 12-hour (`%h:%i:%s %p`)
`%S`|Seconds (00..59)
`%s`|Seconds (00..59)
`%T`|Time, 24-hour (`%H:%i:%s`)
`%U`|Week (00..53), where Sunday is the first day of the week
`%u`|Week (00..53), where Monday is the first day of the week
`%V`|Week (01..53), where Sunday is the first day of the week; used with %X
`%v`|Week (01..53), where Monday is the first day of the week; used with %x
`%W`|Weekday name (Sunday..Saturday)
`%w`|day of the week (0=Sunday..6=Saturday)
`%X`|Year for the week where Sunday is the first day of the week, numeric, four digits; used with %V
`%x`|Year for the week, where Monday is the first day of the week, numeric, four digits; used with %v
`%Y`|Year, numeric, four digits
`%y`|Year, numeric (two digits)
`%%`|A literal “%” character

(This table is straight from [MySQL Manual](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-format))

API
==

date.format.js exposes the following objects

`dateFormatter`  
+ `days` -> zero indexed array with names for the week days  
+ `months` -> zero indexed array with names for the months  
+ `getWeek(date,day)` -> gets the week number of the given date, day represents the first day of the week (0=sunday, ... 6=saturday) monday is default  
+ `suffixer(str,len)` -> puts zeroes before the given string untill the lenght is eqaul to len  
+ `format(date,str)` -> formats the given date with the given string  
  
`(new Date()).format`-> formats the date with the given string

Translation
==

translating is simple, for example here is how date.format.js can be translated to dutch
```html
<script src='js/date.format.js'></script>
<script>
    dateFormatter.months = [
      "Januari",
      "Februari",
      "Maart",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Augustus",
      "September",
      "Oktober",
      "November",
      "December"
    ];
    dateFormatter.days = [
      "Zondag", // start this array with sunday!
      "Maandag",
      "Dinsdag",
      "Woensdag",
      "Donderdag",
      "Vrijdag",
      "Zaterdag"
    ];
    // will produce 'Dinsdag 20 Februari 1996'
    console.log((new Date('1996-02-20')).format('%W %e %m %Y'));
<script>
```        
Credits
==

[dblock](https://github.com/dblock/) for his [getWeek](https://gist.github.com/dblock/1081513) script
