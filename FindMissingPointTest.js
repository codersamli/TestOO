function reinit()
{
 missingPoints=[];
}


function compareDate(dataPoint,expectDate)
{
       equal(dataPoint.x.getTime(),expectDate.getTime())
 }

module( "Group 5 minutes interval" );

test("????5??",function()
     {
          options.MissingDataPointInterval=300*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,5,0),"y":45.62},{"x":new Date(2014,1,1,0,15,0),"y":45.63} ]
        
        fillDataPoint(dataPoints) ;
        
        compareDate(dataPoints[2],new Date(2014,1,1,0,10,0));
        compareDate(dataPoints[3],new Date(2014,1,1,0,15,0))
        
        reinit();
     }
);

test("??5????",function()
     {
         options.MissingDataPointInterval=300*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,5,5),"y":45.62}]
        
        fillDataPoint(dataPoints) ;
        
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,5,0));
        compareDate(dataPoints[2],new Date(2014,1,1,0,5,5));    
         
           reinit();
     });

test("??Missing???",function()
     {
         options.MissingDataPointInterval=300*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,15,5),"y":45.62}]
        
        fillDataPoint(dataPoints) ;
        
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,5,0));
        compareDate(dataPoints[2],new Date(2014,1,1,0,10,0)); 
        compareDate(dataPoints[3],new Date(2014,1,1,0,15,0))
        compareDate(dataPoints[4],new Date(2014,1,1,0,15,5));
         
        reinit();
     });

 test("???Missing???",function()
     {
          options.MissingDataPointInterval=300*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,10,0),"y":45.62},{"x":new Date(2014,1,1,0,20,0),"y":45.62}]
        
        fillDataPoint(dataPoints) ;
       
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,5,0));
        compareDate(dataPoints[2],new Date(2014,1,1,0,10,0)); 
        compareDate(dataPoints[3],new Date(2014,1,1,0,15,0))
        compareDate(dataPoints[4],new Date(2014,1,1,0,20,0));
         
        reinit();
     });


module( "Group 10 minutes interval" ); 
         
test("????10??",function()
     {
        options.MissingDataPointInterval=600*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,10,0),"y":45.62} ]
        
        fillDataPoint(dataPoints) ;
        
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,5,0))
        compareDate(dataPoints[2],new Date(2014,1,1,0,10,0))
         
        reinit();
     }
);
         
test("????10??111",function()
     {
        options.MissingDataPointInterval=600*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,20,0),"y":45.62} ]
        
        fillDataPoint(dataPoints) ;
        
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,5,0))
        compareDate(dataPoints[2],new Date(2014,1,1,0,10,0))
        compareDate(dataPoints[3],new Date(2014,1,1,0,15,0))
        compareDate(dataPoints[4],new Date(2014,1,1,0,20,0))
        
        reinit();
     }
);

         
test("??5??????10??",function()
     {
        options.MissingDataPointInterval=600*1000;
         
        var dataPoints = [ {"x":new Date(2014,1,1,0,0,0),"y":45.62},{"x":new Date(2014,1,1,0,8,0),"y":45.62} ]
        
        fillDataPoint(dataPoints) ;
        
        equal(dataPoints.length,2);
        compareDate(dataPoints[0],new Date(2014,1,1,0,0,0));
        compareDate(dataPoints[1],new Date(2014,1,1,0,8,0))

        
        reinit();
     }
);
