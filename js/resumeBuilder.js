


var formattedName = HTMLheaderName.replace("%data%", "Sudheer");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// object of work with job as array of works objects.
var work = {
	"jobs" : [
		{
			"employer" : "Fiverr",
			"title" : "Web Developer",
			"Location" : "Home",
			"dates" : 2015,
			"description" : "Started my freelancing career in this year!"	
		},
		{
			"employer" : "TestEmployer",
			"title" : "test Developer",
			"Location" : "Home1",
			"dates" : 2016,
			"description" : "Already started my freelancing career in this year!"
		}
	]
}


// object of projects with project as array of project objects.

var projects = {
	"project" : [
		{
			"title" : "Web Developer",
			"dates" : 2015,
			"description" : "Started my freelancing career in this year!",
			"images" : "url('http://spacecenter.org/wp-content/uploads/2013/04/Apollo-Soyuz-BG-2000x2000.jpg')"
		},
		{
			"title" : "Web Developer",
			"dates" : 2016,
			"description" : "Started my freelancing career in this year!",
			"images" : "url('https://c1.staticflickr.com/1/414/19752043426_166097bd18_b.jpg')"
		}
	]
}

// object of bio objects and arrays inside.

var bio = {
	"name" : "Sudheer",
	"role" : "Web Developer",
	"welcomeMessage" : "Hello Udacity!",
	"Contacts" : {
		"mobile" : "99999999",
		"email" : "test@testmail.com",
		"github" : "github.io/sud",
		"twitter" : "twitter.com/sud",
		"Location" : "Hyderabad"
	},
	"skills" : ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
}

// object of educations with schools as array of school objects.

var education = {
	"schools": [{
		"citasdfies": "Manufdsguru",
		"majasdfors": ["Diploma in Electrical"],
		"minofdsrs": "others",
		"grasdfdyears": 2014
	}, 
	{
		"cities": "Manuaasdfguru",
		"majors": ["Diploma in Electrical", "college dropout"],
		"minors": "othsdfers",
		"gradyears": 201334
	}],

	"online courses": [{
		"courses": ["CS50", "Udacity", "Udemy", "Learn Python the Hard way etc.,"]
	}]
}


// adding bio to the resume

if(bio.skills) {

	// appending skill section to the header of the resume.
	$("#header").append(HTMLskillsStart);

	// replacing the %data% strings with the skills that i have in bio object and setting it equal to the formattedSkill.
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

	// appending the skills to the skills id.
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

// finding jobs array in work object.
for (jobs in work){
$("#workExperience").append(HTMLworkStart);  
    if (work.hasOwnProperty(jobs)) {
    	// checking through the jobs array to find properties and keys for respective jobs as objects.
    	for(var i = 0; i < jobs.length; i++) { 
			var formattedTitle = HTMLworkTitle.replace("%data%", work[jobs][i].title);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work[jobs][i].employer);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			
    	}
        
    }
}
