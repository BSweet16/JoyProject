$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

var myApp = angular.module("myApp", []);

	myApp.config(function($interpolateProvider) {
	    $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
	});

myApp.controller("appController", ["$scope", function($scope) {

    $scope.dataLoaded = false;

    $scope.mentors = [
    {"title":"Founder","website":"http://www.linkedin.com/pub/drew-curtis/18/285/32b","firstname":"Drew", "lastname":" Curtis","company":"Fark.com","website_text":"Founder, Fark.com","image":"/assets/img/mentors/curtis.jpg.pagespeed.ic.VTQQMUw6pQ.jpg"},
    {"title":"CEO","website":"http://www.linkedin.com/in/nager","firstname":"Marc", "lastname":" Nager","company":"Startup Weekend","website_text":"CEO, StartupWeekend","image":"/assets/img/mentors/nager.jpg"},
    {"title":"Founder","website":"http://www.linkedin.com/in/nihalmehta","firstname":"Nihal", "lastname":" Mehta","company":"LocalResponse. Partner, ENIAC Ventures","website_text":"CEO, LocalResponse | Partner, ENIAC Ventures","image":"/assets/img/mentors/mehta.jpg.pagespeed.ic.5rqx5N3oxH.jpg"},
    {"title":"Founder","website":"http://www.engr.uky.edu/alumni/hod/davis-l-marksbury/","firstname":"Davis", "lastname":" Marksbury","company":"Exstream Software (sold to HP)","website_text":"Founder, Exstream Software (sold to HP)","image":"/assets/img/mentors/marksbury.jpg.pagespeed.ic.Du_svn3ZEJ.jpg"},
    {"title":"Founder","website":"http://en.wikipedia.org/wiki/Lee_T._Todd,_Jr.","firstname":"Lee", "lastname":" Todd","company":"Databeam","website_text":"Founder, Databeam (sold to IBM) | Founder, Projectron (sold to Hughes Aircraft)","image":"/assets/img/mentors/todd.jpg"},
    {"title":"Founder","website":"http://www.badgirlventures.com/index.php?option\u003dcom_content\u0026view\u003darticle\u0026id\u003d26\u0026Itemid\u003d34","firstname":"Candace", "lastname":" Klein","company":"SoMoLend","website_text":"Founder, SoMoLend","image":"/assets/img/mentors/klein.jpg.pagespeed.ic.ye9E0wYzyp.jpg"},
    {"title":"President \u0026 Co-Founder","website":"http://www.linkedin.com/in/seanshadmand","firstname":"Sean", "lastname":" Shadmand","company":"Socialize, Inc","website_text":"President \u0026 Co-Founder, Socialize, Inc","image":"/assets/img/mentors/shadmand.jpg.pagespeed.ic.lJ67RD2ZI3.jpg"},
    {"title":"Founder \u0026 CEO","website":"http://www.linkedin.com/pub/bambi-francisco/0/79/2a2/","firstname":"Bambi", "lastname":" Francisco","company":"Vator.tv","website_text":"Founder \u0026 CEO, Vator.tv","image":"/assets/img/mentors/francisco.jpg"},
    {"title":"Founder","website":"http://www.linkedin.com/in/brendanlim","firstname":"Brendan", "lastname":" Lim","company":"Kicksend. YC Grad","website_text":"Founder, Kicksend | YC Grad","image":"/assets/img/mentors/lim.jpg.pagespeed.ic.Ld8nnIsq3_.jpg"},
    {"title":"Founder","website":"http://jat.uky.edu/lectures/excellence-in-pr/item/174-w-james-host.html","firstname":"Jim", "lastname":" Host","company":"Host Communications","website_text":"Founder, Host Communications (sold to IMG) | CEO, iHigh","image":"/assets/img/mentors/host.jpg"},
    {"title":"Co-Founder \u0026 former CEO","website":"http://www.linkedin.com/pub/sean-o-leary/8/452/ab8","firstname":"Sean", "lastname":" O\u0027Leary","company":"Genscape","website_text":"Co-Founder \u0026 former CEO, Genscape","image":"/assets/img/mentors/oleary2.jpg"},
    {"title":"CEO","website":"http://www.linkedin.com/pub/steven-huey/0/b0/580","firstname":"Steve", "lastname":" Huey","company":"Capture Higher Ed","website_text":"CEO, Capture Higher Ed","image":"/assets/img/mentors/huey.jpg"},
    {"title":"Partner","website":"http://www.linkedin.com/in/nickseguin","firstname":"Nick", "lastname":" Seguin","company":"Dynamit","website_text":"Board Member, Startup Weekend | Partner, Dynamit","image":"/assets/img/mentors/sequin.jpg"},
    {"title":"CEO","website":"http://www.linkedin.com/in/kentoyler","firstname":"Kent", "lastname":" Oyler","company":"OPM","website_text":"Co-founder, High Speed Access Corp. (IPO) | CEO, OPM Services","image":"/assets/img/mentors/oyler.jpg"},
    {"title":"Founder. Angel Investor","website":"http://www.linkedin.com/pub/ben-self/0/96a/460","firstname":"Ben", "lastname":" Self","company":"Blue State Digital","website_text":"Founder, Blue State Digital | Angel Investor","image":"/assets/img/mentors/self.jpg"},
    {"title":"CEO","website":"http://www.linkedin.com/pub/matthew-wiley/33/836/364","firstname":"Matt", "lastname":" Wiley","company":"uHAPS","website_text":"CEO, uHAPS | Angel Investor","image":"/assets/img/mentors/wiley.jpg"},
    {"title":"Director","website":"http://www.linkedin.com/in/elizabethrounsavall","firstname":"Elizabeth", "lastname":" Rounsavall","company":"Chrysalis Ventures","website_text":"Director, Chrysalis Ventures","image":"/assets/img/mentors/rounsavall.jpg"},
    {"title":"Mayor \u0026 Former CEO","website":"http://www.lexingtonky.gov/index.aspx?page\u003d305","firstname":"Jim", "lastname":" Gray","company":"Lexington, Gray Construction","website_text":"Former CEO, Gray Construction | Lexington Mayor","image":"/assets/img/mentors/gray.jpg.pagespeed.ic.H0NVQ0uzYu.jpg"},
    {"title":"CEO","website":"http://www.linkedin.com/in/vanness","firstname":"Sidney", "lastname":" VanNess","company":"On Call Central","website_text":"CEO, On Call Central","image":"/assets/img/mentors/vanness.jpg"},
    {"title":"Director","website":"http://www.linkedin.com/in/rickcoplin","firstname":"Rick", "lastname":" Coplin","company":"TechColumbus. Venture Accelerator","website_text":"Venture Acceleration. Director, TechColumbus","image":"/assets/img/mentors/coplin.jpg.pagespeed.ic.yfHkCqJJgx.jpg"},
    {"title":"CEO \u0026 Founder","website":"http://www.linkedin.com/in/drodio","firstname":"Daniel", "lastname":" Odio","company":"Socialize, Inc","website_text":"CEO \u0026 Co-Founder, Socialize, Inc","image":"/assets/img/mentors/odio.jpg.pagespeed.ic.T31MmWJ9ZO.jpg"},
    {"title":"Executive Director. Angel Investor","website":"http://www.linkedin.com/pub/george-ward/8/482/500","firstname":"George", "lastname":" Ward","company":"UK Coldstream","website_text":"Angel Investor | Executive Director at UK Coldstream","image":"/assets/img/mentors/ward.jpg"},
    {"title":"Owner","website":"http://www.linkedin.com/pub/alan-stein/1/143/813","firstname":"Alan", "lastname":" Stein","company":"Lexington Legends","website_text":"Angel Investor | Lexington Legends Owner","image":"/assets/img/mentors/stein.gif.pagespeed.ic.FcyAcZlsU2.png"},
    {"title":"Angel Investor. GM","website":"http://www.linkedin.com/pub/chris-young/1/94/499","firstname":"Chris", "lastname":" Young","company":"Overbrook Farms","website_text":"Angel Investor | GM, Overbrook Farms","image":"/assets/img/mentors/young.png"},
    {"title":"Angel Investor. Founder","website":"http://www.linkedin.com/pub/j-whitney-wallingford/16/3bb/7a6","firstname":"Whitney", "lastname":" Wallingford","company":"Wallingford Law","website_text":"Angel Investor | Founder, Wallingford Law","image":"/assets/img/mentors/wallingford.jpg"},
    {"title":"Senior Director","website":"http://www.linkedin.com/pub/sean-o-leary/6/977/556","firstname":"Sean", "lastname":" O\u0027Leary","company":"KSTC","website_text":"Senior Director, KSTC","image":"/assets/img/mentors/oleary.jpg"},
    {"title":"Associate Dean","website":"http://www.linkedin.com/pub/bruce-walcott/25/822/380","firstname":"Bruce", "lastname":" Walcott","company":"University of Kentucky","website_text":"Associate Dean, University of Kentucky","image":"/assets/img/mentors/walcott.jpg"},
    {"title":"Principal","website":"http://www.linkedin.com/in/kelleysloane","firstname":"Kelley", "lastname":" Sloane","company":"Sloane Marketing","website_text":"Principal, Sloane Marketing | Former VP Mktg, Exstream Software","image":"/assets/img/mentors/sloan.jpg"},
    {"title":"Angel Investor","website":"http://www.linkedin.com/pub/richard-c-rick-miller/b/128/b54","firstname":"Rick", "lastname":" Miller","company":"","website_text":"Angel Investor","image":"/assets/img/mentors/miller.jpg"},
    {"title":"Angel Investor","website":"http://www.linkedin.com/in/medicalnews","firstname":"Tom", "lastname":" McMahon","company":"","website_text":"Angel Investor","image":"/assets/img/mentors/mcmahon.jpg"},
    {"title":"ICC Director","website":"http://www.linkedin.com/pub/warren-nash/14/8b9/68b","firstname":"Warren", "lastname":" Nash","company":"Lexington","website_text":"Lexington ICC Director","image":"/assets/img/mentors/nash.jpg"},
    {"title":"Director","website":"http://www.linkedin.com/pub/dov-rosenberg/0/45/1b8","firstname":"Dov", "lastname":" Rosenberg","company":"Allos Ventures","website_text":"Director, Allos Ventures","image":"/assets/img/mentors/rosenberg.jpg"},
    {"title":"Co-Founder","website":"http://www.linkedin.com/in/vikchadha","firstname":"Vik", "lastname":" Chadha","company":"Backupify","website_text":"Co-Founder, Backupify","image":"/assets/img/mentors/chadha.jpg"},
    {"title":"CEO. Founder","website":"http://www.linkedin.com/pub/randall-stevens/0/363/232","firstname":"Randall", "lastname":" Stevens","company":"Punndit. Archvision","website_text":"CEO, Punndit. Founder, Archvision","image":"/assets/img/mentors/stevens.jpg"},
    {"title":"Senior VP","website":"http://www.linkedin.com/in/tedsmith","firstname":"Ted", "lastname":" Smith","company":"CNET","website_text":"Senior VP, CNET | Chief Economic Growth, Louisville Metro","image":"/assets/img/mentors/smith.jpg"},
    {"title":"Director of Sales \u0026 Marketing","website":"http://www.linkedin.com/pub/joe-dover/a/299/2b8","firstname":"Joe", "lastname":" Dover","company":"OPM","website_text":"Director of Sales \u0026 Marketing, OPM","image":"/assets/img/mentors/dover.jpg"},
    {"title":"President","website":"http://www.linkedin.com/pub/chuck-woods/50/92a/46a","firstname":"Chuck", "lastname":" Woods","company":"OPM","website_text":"President, OPM","image":"/assets/img/mentors/woods.jpg"},
    {"title":"Director","website":"http://www.linkedin.com/pub/gordon-garrett/2/209/267","firstname":"Gordon", "lastname":" Garrett","company":"KY Small Business Development Center","website_text":"Director, KY Small Business Development Center","image":"/assets/img/mentors/garrett.jpg"},
    {"title":"Attorney","website":"http://www.linkedin.com/in/kensagan","firstname":"Ken", "lastname":" Sagan","company":"Stites \u0026 Harbison","website_text":"Attorney, Stites \u0026 Harbison","image":"/assets/img/mentors/sagan.jpg"},
    {"title":"Owner","website":"http://www.linkedin.com/pub/bryce-anderson/5/90/6b","firstname":"Bryce", "lastname":" Anderson","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"/assets/img/mentors/anderson.jpg"},
    {"title":"Owner","website":"http://www.facebook.com/sizemore","firstname":"Jeremiah", "lastname":" Sizemore","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"/assets/img/mentors/sizemore.jpg"},
    {"title":"Project Manager","website":"http://www.linkedin.com/pub/keith-kurzendoerfer/3/aa4/127","firstname":"Keith", "lastname":" Kurzendoerfer","company":"APAX Software","website_text":"Project Manager, APAX Software","image":"/assets/img/mentors/kurzendoerfer.jpg"},
    {"title":"Owner","website":"http://www.linkedin.com/in/evanmorris","firstname":"Evan", "lastname":" Morris","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"/assets/img/mentors/morris.jpg"},
    {"title":"Wealth Manager","website":"http://www.linkedin.com/in/chadbischof","firstname":"Chad", "lastname":" Bischof","company":"Strong Tower Group","website_text":"Wealth Management, Strong Tower Group","image":"/assets/img/mentors/bischof.jpg"},
    {"title":"Founder. Owner","website":"http://www.linkedin.com/in/wayneyeager","firstname":"Wayne", "lastname":" Yeager","company":"Webalytics. Bailey Run Farm","website_text":"Founder, Webalytics | Owner at Bailey Run Farm","image":"/assets/img/mentors/yeager.jpg"},
    {"title":"President","website":"http://www.linkedin.com/in/jmclifton","firstname":"Jim", "lastname":" Clifton","company":"Therix Medical","website_text":"President, Therix Medical","image":"/assets/img/mentors/clifton.jpg"},
    {"title":"Member","website":"http://www.frostbrowntodd.com/professionals-506.html","firstname":"Bill", "lastname":" Strench","company":"Frost Brown Todd","website_text":"Member, Frost Brown Todd Attorneys","image":"/assets/img/mentors/strench.jpg"},
    {"title":"President","website":"http://www.linkedin.com/in/davedurand","firstname":"Dave", "lastname":" Durand","company":"Forest Giant","website_text":"President, Forest Giant","image":"/assets/img/mentors/durand.jpg"},
    {"title":"Founder","website":"http://morrisindustries.com/about/founder","firstname":"Nate", "lastname":" Morris","company":"Morris Industries","website_text":"Founder, Morris Industries | Co-Founder, Rubicon Global","image":"/assets/img/mentors/nateMorris.jpg"}, 
    {"title":"CEO","website":"http://www.linkedin.com/pub/fielding-rogers/0/960/a04","firstname":"Fielding", "lastname":" Rogers","company":"Ale-8-One Bottling Company","website_text":"CEO, Ale-8-One","image":"/assets/img/mentors/Fielding-Rogers.jpg"}, 
    {"title":"CEO","website":"https://www.linkedin.com/pub/billy-harper/10/983/575","firstname":"Billy", "lastname":" Harper","company":"Harper Industries","website_text":"CEO, Harper Industries","image":"/assets/img/mentors/billy_harper.jpg"}, 
    {"title":"CEO","website":"http://www.linkedin.com/in/brianpoe","firstname":"Brian", "lastname":" Poe","company":"Corrisoft","website_text":"CEO, Corrisoft","image":"/assets/img/mentors/brian_poe.jpg"},
    {"title":"CEO","website":"https://www.linkedin.com/pub/stephen-gray/0/a9/242/en","firstname":"Stephen", "lastname":" Gray","company":"Gray Construction","website_text":"CEO, Gray Construction","image":"/assets/img/mentors/stephen_gray.jpg"},
    {"title":"Wealth Management Advisor","website":"www.randy-collins.com","firstname":"Randy", "lastname": " Collins","company":"Northwestern Mutual","website_text":"Wealth Management Advisor, Northwestern Mutual","image":"/assets/img/mentors/randy.jpg"},
	{"title":"Financial Advisor","website":"http://christianschnabel.nm.com/","firstname":"Christian", "lastname": " Schnabel","company":"Northwestern Mutual","website_text":"Financial Advisor, Northwestern Mutual","image":"/assets/img/mentors/christian.jpg"}
    ];  

    $scope.dataLoaded = true;
}]);

$(document).ready(function() {

	


	$("a.more-button").click(function(event) {
		$(this).css('display', 'none');
		$('a.all-button').show(500);
	});
	// center images for text
	// if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // Check if mobile

	// 	$('.Portfolio .row').each(function() {
	// 		var h = $(this).height();
	// 		var img_kid = $(this).find('img');
	// 		var p_kid = $(this).find('.info');
	// 		var h_img = $(img_kid).height();
	// 		var img_mar = h/2 - (h_img/2);
	// 		var p_mar = h/2 - (p_kid/2);

	// 		$(img_kid).css('margin-top', img_mar);
	// 		$(p_kid).css('margin-top', p_mar);
	// 	});
	// }

	// if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // Check if mobile
	// 	$('.Services .row').each(function() {
	// 		var h = $(this).height();
			
	// 		var img_kid = $(this).find('img');
	// 		var p_kid = $(this).find('.info');
			
	// 		var h_img = $(img_kid).height();
	// 		var h_p = $(p_kid).height();
			
	// 		var img_mar = h/2 - (h_img/2);
	// 		var p_mar = h/2 - (h_p/2);

	// 		$(img_kid).css('margin-top', img_mar);
	// 		$(p_kid).css('margin-top', p_mar);
	// 	});
	// }

	//Hover over home-page buttons
	$("#left-content").hide();
	$("#mid-content").hide();
	$("#right-content").hide();
	$(".company-bio").hide();
	$(".ta-bio").hide();

	$("#top-div-left").hover(function() {
		$("#idea-img").hide();
		$("#left-content").show();
		},
		function() {
			$("#left-content").hide();
			$("#idea-img").show();
	});
	$("#top-div-mid").hover(function() {
		$("#involved-img").hide();
		$("#mid-content").show();
		},
		function() {
			$("#mid-content").hide();
			$("#involved-img").show();
	});
	$("#top-div-right").hover(function() {
		$("#code-img").hide();
		$("#right-content").show();
		},
		function() {
			$("#right-content").hide();
			$("#code-img").show();
	});

	//Hover over company portfolios
		$(".company-port").hover(function(e) {
			var time = 300;
			var pos = $(this).offset();
		    var edge = closestEdge(e.pageX, e.pageY, pos.left, pos.top, $(this).width(), $(this).height());

		    var bio = $(this).closest('div').find('.company-bio');
		    switch (edge) {
	            case "left":
	            	bio.show('slide', { direction: 'left' }, time);
	                break;
	            case "right":
	                bio.show('slide', { direction: 'right' }, time);
	                break;
	            case "top":
	                bio.show('slide', { direction: 'up' }, time);
	                break;
	            case "bottom":
	                bio.show('slide', { direction: 'down' }, time);
	                break;
		    }
		},
		function(e) {
			var time = 150;
			var pos = $(this).offset();
		    var edge = closestEdge(e.pageX, e.pageY, pos.left, pos.top, $(this).width(), $(this).height());

		    var bio = $(this).closest('div').find('.company-bio');
		    switch (edge) {
	            case "left":
	            	bio.hide('slide', { direction: 'left' }, time);
	                break;
	            case "right":
	                bio.hide('slide', { direction: 'right' }, time);
	                break;
	            case "top":
	                bio.hide('slide', { direction: 'up' }, time);
	                break;
	            case "bottom":
	                bio.hide('slide', { direction: 'down' }, time);
	                break;
		    }
		});
// hover over team alpha img
		$(".ta-port").hover(function(e) {
					var time = 300;
					var pos = $(this).offset();
				    var edge = closestEdge(e.pageX, e.pageY, pos.left, pos.top, $(this).width(), $(this).height());

				    var bio = $(this).closest('div').find('.ta-bio');
				    switch (edge) {
			            case "left":
			            	bio.show('slide', { direction: 'left' }, time);
			                break;
			            case "right":
			                bio.show('slide', { direction: 'right' }, time);
			                break;
			            case "top":
			                bio.show('slide', { direction: 'up' }, time);
			                break;
			            case "bottom":
			                bio.show('slide', { direction: 'down' }, time);
			                break;
				    }
				},
				function(e) {
					var time = 150;
					var pos = $(this).offset();
				    var edge = closestEdge(e.pageX, e.pageY, pos.left, pos.top, $(this).width(), $(this).height());

				    var bio = $(this).closest('div').find('.ta-bio');
				    switch (edge) {
			            case "left":
			            	bio.hide('slide', { direction: 'left' }, time);
			                break;
			            case "right":
			                bio.hide('slide', { direction: 'right' }, time);
			                break;
			            case "top":
			                bio.hide('slide', { direction: 'up' }, time);
			                break;
			            case "bottom":
			                bio.hide('slide', { direction: 'down' }, time);
			                break;
				    }
				});

	function closestEdge(x,y,l,t,w,h) {
			var r = l + w;
			var b = t + h;

	        var topEdgeDist = distMetric(y, t);
	        var bottomEdgeDist = distMetric(y, b);
	        var leftEdgeDist = distMetric(x, l);
	        var rightEdgeDist = distMetric(x, r);
	        var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
	        switch (min) {
	            case leftEdgeDist:
	                return "left";
	            case rightEdgeDist:
	                return "right";
	            case topEdgeDist:
	                return "top";
	            case bottomEdgeDist:
	                return "bottom";
	        }
	}
	    
	function distMetric(a, b) {
	    var diff = a - b;
	    return (diff * diff);
	}

	//make bg image full size
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#headerwrap").css("height", getWindowHeight()) - 50; //for navbar
		$("#headerwrap").css("width", getWindowWidth());
		$(window).resize(function() {
			$("#headerwrap").css("height", getWindowHeight())- 50; 
			$("#headerwrap").css("width", getWindowWidth());
		});
	}
});

var getWindowHeight = function() {
	var winHeight = $(window).height();
	return winHeight;
}

var getWindowWidth = function() {
	var winWidth = $(window).width();
	return winWidth;
}



$('#myCarousel').carousel({
  interval: 10000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }

 


});