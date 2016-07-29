shipApp.factory('ppService', function () {
	var factory = {};
	factory.projectProperties = function (prop, projectList) {
	  	var propArr = [];
	  	var pname = prop;
	  	for(var i=0; i < projectList.length; i++)
	  	{
		   	if(propArr.indexOf(projectList[i][pname] ) === -1 )
		    { 
		      propArr.push(projectList[i][pname]);
		    }
	  	}
		return propArr;
	};
	return factory;

});