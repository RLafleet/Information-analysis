highscore = 0;

function parseHighScores(){
	$("#highscores").load("data.txt", function(responseText, statusText, xhr){
		highscore = responseText;
		$("#highscore").html(highscore);
	});
}

function recordHighScore(newscore){
	$.ajax({
		url:'http://localhost:8080',
		data: '{"hs":' + newscore + '}',
		type:'POST',
		success: function(data){
			return;
		},
		error: function(xhr, status, error){
			return;
		}
	});
}

function checkHighScore(s){
	if(s>highscore){
		highscore = s;
		recordHighScore(highscore);
		$("#highscore").html(highscore);
	}
}

$(document).ready(function(){
	parseHighScores();
});