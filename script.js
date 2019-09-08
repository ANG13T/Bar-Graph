
 
 var dataset = [50, 100, 200, 400, 320, 160];


 var svgWidth = 700, svgHeight = 450, barPadding = 10;
 var barWidth = (svgWidth / dataset.length);
 


 var svg = d3.select('svg')
     .attr("width", svgWidth)
     .attr("height", svgHeight);
     
 var barChart = svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("id", (d,i)=> 'rectangle' + i)
     .attr("y", function(d) {
          return svgHeight - d 
     })
     .attr("height", function(d) { 
         return d; 
     })
     .attr("width", barWidth - barPadding)
     .attr("transform", function (d, i) {
         var translate = [barWidth * i, 0]; 
         return "translate("+ translate +")";
     });

     var text = svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d) {
         return d + " people";
     })
     .attr("y", function(d, i) {
        return (svgHeight - d - 2);
     })
     .attr("x", function(d, i) {
         return barWidth * i;
     })
     .attr("fill", "white")
     .attr("id", "labels");


 
