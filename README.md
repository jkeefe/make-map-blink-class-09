#Using an API for reals

##The API

We'll be using the forecast.io API to plot on a chart the forecast temperatures for the entire day ... and maybe some other data, too.

First, get a forecast.io key at https://developer.forecast.io/

Test it out and make sure it works, by putting this in your browser. The latitude/longitude is for NYC:

	https://api.forecast.io/forecast/YOUR_API_KEY_HERE/40.7056,-73.978

Does the data come back?

If you'd like a more readable version, you can use Chrome along with the JSONView extension, [available here] (https://chrome.google.com/webstore/detail/chklaanhfefbnpoihckbnefhakgolnmc).

##Setting up your project

I've set up some folders and some blank documents to work with. You can get them all by downloading and unzipping this repository using the "Download Zip" button on the right -->

- Unzip the download
- Go into the folder `make-map-blink-class-09-master`
- Now go into the folder `weather-project`. This is where we will be working.

##Preparing the web page (with HTML)

This should be very familiar, as it's almost exactly what we did in Class 6, when we made the Highcharts together. Here we go:

- Open the blank file `index.html` in your favorite text editor. Remember that if you are using Apple's "TextEdit," you have to make it plain text using Format -> Make Plain Text in the menu bar.

It's blank! Let's change that.

- For the first line, declare it an html file with this: `<!DOCTYPE html>`
- Almost all html commands have an open tag and a close tag, like `<strong>` (open) and `</strong>` (close)
- Type in the open and close tags for "html" (remember, most html tags come in pairs):

	<html>
	</html>
	
OK, now we need two more sections *between* those two tags: head and body:

	<html>
	
	<head>
	</head>
	
	<body>
	</body>
	
	</html>

Now, let's just test this out. Put 'Hello, world!' between the body tags.

	<body>
	Hello, world!
	</body>
	
Drag the whole index.html into a browser window.

If you see `Hello, world!` you're good!

Like before, we have to add a `div` called "container" where the chart will get drawn. So add this below your "Hello, world":

	<body>
	Hello, world!
	<div id="container"></div>
	</body>


Also like before, we have to make sure the web page loads in the two files containing the Highcharts and jQuery libraries. So add these lines between the `head` tags:
	
	<script src="js/jquery-1.6.4.min.js" type="text/javascript"></script>
	<script src="js/highcharts.js" type="text/javascript"></script>

We're going to load in one more bit to our page: Your program! We'll write that in the file `myproject.js`. It's blank now, but let's plan ahead and add that into the page now on the very next line:

	<script src="js/myproject.js" type="text/javascript"></script>
	
OK that's set.

##Writing the data-fetching code (with JavaScript)

Last time, we put the JavaScript between two `script` tags on the html page. But it's actually better to have that code in a separate file. We'll put our program in `myproject.js` which is in the `js` folder along with your html page.

Open the blank file `myproject.js`

First, let's define a varialbe called "url" to store the forecast.io url. The first line of your program should be the following line, with your API key in place of YOUR\_API\_KEY\_HERE:

	var url = "https://api.forecast.io/forecast/YOUR_API_KEY_HERE/40.7056,-73.978";

Don't forget the semicolon at the end!

Next, we're going to use a bit of cryptic code that basically goes and gets the data from the URL and stores the data as "weather." The cool thing about this code is that nothing happens until the data comes back, which is good -- because it could take a couple of seconds.

Paste this into your code:

	$.ajax({
	  dataType: "jsonp",
	  url: url,
	  success: function(weather){
	  
	       // this is where we draw the chart!
	  
	  }
	});

##Using the Console

How are we doing? Let's find out! Add a line to your code right below the chart comment to output the data to the "console":

	       // this is where we draw the chart!
		   console.log(weather);

Go back to your browser with the "Hello, world." page and open the "console." Where it is depends on your browser. Here are some places to look:

- Chrome: View -> Developer -> JavaScript Console
- Firefox: Tools -> Developer -> Toggle Tools then click on "Console"
- Safari: Preferences ... -> Advanced -> Show Develop in menu bar. Then: Develop -> Show Web Inspector

There's the console!

Reload that page, and you should see something appear in the console. It should be the weather data, tho you may have to click arrows to see it all.

##Extracting the temperatures

Ok, back to `myproject.js`.

We are going to pull the temperatures out of the data and put them into an array. That's a collection of numbers surrounded by [brackets] like this: 

	[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	
You may remember, that's how Highcharts likes it's data.

Right under where you had `console.log(weather);` we'll make a blank array called temps:

	var temps = [];
	
Great. Now we need a little bit of code that yanks each of the temperatures out of the weather data and "pushes" them into the array. The temperatures are actually nested in the data a few levels down. So they're at weather.hourly.data. This will get them all and make them one array: 

	  weather.hourly.data.forEach(function(hour, i){

		  temps.push(hour.temperature);

	  });

Great. Almost there.

##Building the chart

We need the base Highcharts code, so ...

- Go to the [Highcharts Demo Page](http://www.highcharts.com/demo)
- You'll be looking at the Basic Line chart
- Click "View options"
- Copy the code in the popup box

Now go to your `myproject.js` file and pase that code right below the `});` that comes after `temps.push(hour.temperature);`

(To be continued)
