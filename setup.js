function loadBody()
{
	generateGameCode();
}

function generateGameCode()
{
	$('#gameCode').val(100000 + Math.floor(Math.random()*899999));
}

function gameCodeChange()
{
	gameCode = parseInt($('#gameCode').val());
	if ((Number.isNaN(gameCode)) || (gameCode < 100000) || (gameCode > 1000000))
	{
		generateGameCode();
		gameCode = $('#gameCode').val();
		$('#warningText').html('All players must share the same four-digit game code.');
	}
	else
	{
		$('#warningText').html('');
	}
}

function numPlayersChange()
{
	playerCount = parseInt($('#numPlayers').val());
	if (Number.isNaN(playerCount))
	{
		playerCount = 2;
		$('#numPlayers').val(2);
	}
	
	if (playerCount < 2)
	{
		$('#numPlayers').val(2);
	}
	else if (playerCount > 8)
	{
		$('#numPlayers').val(8);
	}
	$('#currentPlayerNum').attr("max", playerCount);
	currentPlayerChange();
}

function currentPlayerChange()
{
	playerNum = parseInt($('#currentPlayerNum').val());
	if (Number.isNaN(playerNum))
	{
		playerNum = 1;
		$('#currentPlayerNum').val(1);
	}
	
	if (playerNum < 1)
	{
		$('#currentPlayerNum').val(1);
	}
	else if (playerNum > $('#currentPlayerNum').attr("max"))
	{
		$('#currentPlayerNum').val($('#currentPlayerNum').attr("max"));
	}
}