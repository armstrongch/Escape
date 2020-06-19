var playerNum;
var playerCount;
var gameCode;
var configNumber;
var currentPlayer;

var players = [];
var escapeHatches = [];

function submitButton()
{
	numPlayersChange();
	gameCode = parseInt($('#gameCode').val());
	if ((Number.isNaN(gameCode)) || (gameCode < 100000) || (gameCode > 1000000))
	{
		generateGameCode();
		$('#warningText').html('All players must share the same four-digit game code.');
	}
	else
	{
		startGame();
	}
}

function startGame()
{
	createPlayersList();
	getConfigNumber();
	
	currentPlayer = players[configNumber];
	$('#setupDiv').addClass('invisible');
	$('#infoDiv').addClass('invisible');
	$('#gameDiv').removeClass('invisible');
	
	var playerDivHTML = "<p>You are \"" + currentPlayer.roleName + "\". <strong>Do not reveal your identity to anyone!</strong></p>";
	if (currentPlayer.team == "human")
	{
		playerDivHTML += "<p>You win the game if you escape (via an escape hatch) or if you are still alive after the 39th turn.</p>";
	}
	else
	{
		playerDivHTML += "<p>You win the game if there are no humans left on the ship after the 39th turn.</p>";
	}
	
	$('#playerInfoDiv').html(playerDivHTML);
	
	setupEscapeHatches();
}

function openEscapeHatch()
{
	var escapeHatchInputText = $('#escapeHatchInfoDiv').val();
	console.log(escapeHatchInputText);
	if (((escapeHatchInputText == "Open Escape Hatch #1") && (escapeHatches[0] == "green"))
	|| ((escapeHatchInputText == "Open Escape Hatch #2") && (escapeHatches[1] == "green"))
	|| ((escapeHatchInputText == "Open Escape Hatch #3") && (escapeHatches[2] == "green"))
	|| ((escapeHatchInputText == "Open Escape Hatch #4") && (escapeHatches[3] == "green")))
	{
		$('#escapeHatchResultP').html("You have successfully escaped! You win! No other player may escape using this escape hatch!");
	}
	else if (((escapeHatchInputText == "Open Escape Hatch #1") && (escapeHatches[0] == "red"))
	|| ((escapeHatchInputText == "Open Escape Hatch #2") && (escapeHatches[1] == "red"))
	|| ((escapeHatchInputText == "Open Escape Hatch #3") && (escapeHatches[2] == "red"))
	|| ((escapeHatchInputText == "Open Escape Hatch #4") && (escapeHatches[3] == "red")))
	{
		$('#escapeHatchResultP').html("This escape hatch is damaged! You'll have to find another one!");
	}
	else
	{
		$('#escapeHatchResultP').html("Invalid Entry!");
	}
}

function drawDangerCard()
{
	var dangerInfoString = "";
	var randomInt = Math.floor(Math.random()*5);
	if (randomInt == 0)
	{
		dangerInfoString = "Tell the other players: \"Silence in all sectors\".";
	}
	else if (randomInt < 3)
	{
		dangerInfoString = "Tell the other players: \"Noise in Sector [X, Y]\", where [X,Y] is the sector that you just moved into.";
	}
	else
	{
		dangerInfoString = "Tell the other players: \"Noise in Sector [X, Y]\", where [X,Y] is any sector that you want. Use this opportunity to lie, and confuse other players about where you actually are!";
	}
	$('#dangerInfo').html(dangerInfoString);
}

function hideDangerInfo()
{
	$('#dangerInfo').html("");
}