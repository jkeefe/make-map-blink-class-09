var url = "https://api.forecast.io/forecast/YOUR_API_KEY_HERE/40.7056,-73.978";

$.ajax({
  dataType: "jsonp",
  url: url,
  success: function(weather){

	// console.log(weather.hourly.data);
	
	var temps = [];
	var chanceOfRain = [];
	
	  weather.hourly.data.forEach(function(hour, i){

		  // console.log(hour.temperature);
		  
		  temps.push(hour.temperature);
		  chanceOfRain.push(hour.precipProbability);
		
	  });
	  
	  console.log(temps);
	  
	  $(function () {
	      $('#container').highcharts({
	          title: {
	              text: 'New York Hourly Temps',
	              x: -20 //center
	          },
	          subtitle: {
	              text: 'Source: forecast.io',
	              x: -20
	          },
	          xAxis: {
				  title: {
					  text: "Hours from now"
				  }
	          },
	          yAxis: {
	              title: {
	                  text: 'Temperature (F)'
	              },
	              plotLines: [{
	                  value: 0,
	                  width: 1,
	                  color: '#808080'
	              }]
	          },
	          tooltip: {
	              valueSuffix: ' F'
	          },
	          legend: {
				  enabled: false,
	              layout: 'vertical',
	              align: 'right',
	              verticalAlign: 'middle',
	              borderWidth: 0
	          },
	          series: [{
				  name: "New York",
				  data: temps
	          }]
	      });
	  });
	  
	  $(function () {
	      $('#container-rain').highcharts({
	          title: {
	              text: 'Chance of Precipitation',
	              x: -20 //center
	          },
	          subtitle: {
	              text: 'Source: forecast.io',
	              x: -20
	          },
	          xAxis: {
				  title: {
					  text: "Hours from now"
				  }
	          },
	          yAxis: {
				  max: 1,
				  min: 0,
	              title: {
	                  text: 'Chance of Precip'
	              },
	              plotLines: [{
	                  value: 0,
	                  width: 1,
	                  color: '#808080'
	              }]
	          },
	          tooltip: {
	              formatter: function () {
	                  return this.y * 100 + '%';
	              }
	          },
	          legend: {
				  enabled: false,
	              layout: 'vertical',
	              align: 'right',
	              verticalAlign: 'middle',
	              borderWidth: 0
	          },
	          series: [{
				  name: "New York",
				  data: chanceOfRain
	          }]
	      });
	  });

	
  }

});