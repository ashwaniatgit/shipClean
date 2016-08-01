//chart controller
shipApp.controller('chartController', function ($scope, $location, $cookieStore, dataService, ppService) {
	// collect status of all projects
	var uname = $cookieStore.get('uname');
	var pass = $cookieStore.get('password');
	if(uname === 'admin' && pass === 'admin') {
		var prjWithStatus = []
		var projectProperties = function (prop) {
		  var pname = prop;
		  console.log($scope.projectList);
		  for(var i=0; i < $scope.projectList.length; i++)
		  {
		    if( pname == 'status')
		    {
		      prjWithStatus.push($scope.projectList[i][pname]);
		    }
		  }
		}
		projectProperties('status');


				

		//sidebar dropdown option select
		$scope.theme = ppService.projectProperties('theme', $scope.projectList);
		$scope.concernedState = ppService.projectProperties('concernedState', $scope.projectList);
		$scope.concernedPort = ppService.projectProperties('concernedPort', $scope.projectList);
		var selectedThemeStatus;
		//var selectedPortStatus = [];
		//var selectedStateStatus = [];
		var count;
			
		//dropdown selection has changed
		$scope.hasChanged = function (pws) {
			count = {};
			if(pws == undefined) {
				var selectedTheme = $scope.selectedTheme;
				selectedThemeStatus = [];
				for (var i = 0; i < $scope.projectList.length; i++) {

					if($scope.projectList[i].theme ===	 $scope.selectedTheme) {
						selectedThemeStatus.push($scope.projectList[i]['status']);
						console.log($scope.projectList[i]['status']);
					}
				}			
				selectedThemeStatus.forEach(function(el){
			    	count[el] = count[el] + 1 || 1
				});
				console.log('parameter  not found');		
			}
			else{
				pws.forEach(function(el){
			    count[el] = count[el] + 1 || 1
				});	
				console.log('parameter  found');							
			}

			// Sample options for dashboard bar chart
			$scope.chartOptions = {
			  chart: {
			  	type: 'bar'
			  },
			  title: {
			  	text: 'Project Status'
			  },
			  subtitle: {
			  	text: 'by its status level'
			  },
			  xAxis: {
			  	categories: ['IL1', 'IL2', 'IL3', 'IL4', 'IL5'],
			  },
			  yAxis: {
			  	min: 0,
			  	max: prjWithStatus.length,
			  title: {
			    text: 'Total Projects',
			    align: 'high'
			  },
			  labels: {
			    overflow: 'justify'
			  }
			  },
			  tooltip: {
			  	valueSuffix: ' projects'
			  },
			  plotOptions: {
			  	bar: {
			    	dataLabels: {
			        enabled: true
			    	}
			  	}
			  },
			  series: [{
			  	name: 'Projects',
			  	data: [count.IL1 || null, count.IL2 || null, count.IL3 || null, count.IL4 || null, count.IL5 || null]
			  }]

			};

			// Sample options for dashboard semi chart
			$scope.semiChart = {

			 chart: {
			    plotBackgroundColor: null,
			    plotBorderWidth: 0,
			    plotShadow: false
			 },
		     title: {
		        text: prjWithStatus.length + '<br> Projects',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		     },
		     tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		     },
		     plotOptions: {
		   		pie: {
		                dataLabels: {
		                    enabled: true,
		                    distance: -50,
		                    style: {
		                        fontWeight: 'bold',
		                        color: 'white',
		                        textShadow: '0px 1px 2px black'
		                    }
		         		},
		                startAngle: -90,
		                endAngle: 90,
		                center: ['50%', '75%']
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Total Projects',
		            innerSize: '50%',
		            data: [
		                ['IL1', count.IL1 || null],
		                ['IL2', count.IL2 || null],
		                ['IL3', count.IL3 || null],
		                ['IL4', count.IL4 || null],
		                ['IL5', count.IL5 || null]
		                
		            ]
		        }]
			};
			console.log(count);
		};
		//------
		$scope.hasChanged(prjWithStatus);
	}
	else {
		alert('Please login to access dashboard');
		$location.path('/');
	}
});