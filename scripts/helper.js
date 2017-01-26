var skills = '<div class="col-md-3"><img src="./images/%data%.png" alt="my skills" class="img-responsive img-rounded"></div>';

var skills_array = ["1", "2", "3", "4"];

var skills_new = "";

for(var i=1; i < skills_array.length; i++){
	skills_new = skills.replace("%data%", skills_array[i]);
	$(".skills-section-images").append(skills_new);
}