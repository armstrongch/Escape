function getAllPlayerConfigurations(playerCount)
{
	if (playerCount == 2)
	{
		return [[2,1],[1,2]];
	}
	else
	{
		var recursiveConfig = getAllPlayerConfigurations(playerCount-1);
		var allConfigurations = [];
		for(let i = 0; i < recursiveConfig.length; i++)
		{
			var recursiveConfigRow = recursiveConfig[i];
			for (let j = 0; j <= recursiveConfigRow.length; j++)
			{
				var spliced_RCR = recursiveConfigRow.slice();
				spliced_RCR.splice(j,0,playerCount);
				allConfigurations.push(spliced_RCR);
			}
		}
		return allConfigurations;
	}
}

function getConfigNumber()
{
	var allConfigurations = getAllPlayerConfigurations(playerCount);
	var configurationIndex = gameCode%allConfigurations.length;
	configNumber = allConfigurations[configurationIndex][playerNum-1] - 1;
}

function createPlayersList()
{
	players = [];
	
	var rand_HRN = generateRandomHumanRoleNames();
	var rand_ARN = generateRandomAlienRoleNames();
	
	for (let i = 1; i <= playerCount; i++)
	{
		if (i <= playerCount/2)
		{
			var humanRoleName = rand_HRN[i-1];
			players.push({team: "human", roleName: humanRoleName});
		}
		else
		{
			var alienRoleName = rand_ARN[i-1];
			players.push({team: "alien", roleName: alienRoleName});
		}
	}
}

function generateRandomAlienRoleNames()
{
	resetTakenStatuses();
	var randomAlienRoleNames = [];
	var alienRoleNameIndex = gameCode%alienRoleNames.length;
	
	while (randomAlienRoleNames.length < alienRoleNames.length)
	{
		
		while (alienRoles[alienRoleNames[alienRoleNameIndex]].Taken)
		{
			alienRoleNameIndex++;
			if (alienRoleNameIndex > alienRoleNames.length - 1)
			{
				alienRoleNameIndex = 0;
			}
		}
		alienRoles[alienRoleNames[alienRoleNameIndex]].Taken = true;
		randomAlienRoleNames.push(alienRoleNames[alienRoleNameIndex]);
		alienRoleNameIndex += gameCode%alienRoleNames.length;
		if (alienRoleNameIndex > alienRoleNames.length - 1)
		{
			alienRoleNameIndex -= alienRoleNames.length;
		}
	}
	return randomAlienRoleNames;
}

function generateRandomHumanRoleNames()
{
	resetTakenStatuses();
	var randomHumanRoleNames = [];
	var humanRoleNameIndex = gameCode%humanRoleNames.length;
	
	while (randomHumanRoleNames.length < humanRoleNames.length)
	{
		
		while (humanRoles[humanRoleNames[humanRoleNameIndex]].Taken)
		{
			humanRoleNameIndex++;
			if (humanRoleNameIndex > humanRoleNames.length - 1)
			{
				humanRoleNameIndex = 0;
			}
		}
		humanRoles[humanRoleNames[humanRoleNameIndex]].Taken = true;
		randomHumanRoleNames.push(humanRoleNames[humanRoleNameIndex]);
		humanRoleNameIndex += gameCode%humanRoleNames.length;
		if (humanRoleNameIndex > humanRoleNames.length - 1)
		{
			humanRoleNameIndex -= humanRoleNames.length;
		}
	}
	return randomHumanRoleNames;
}

function setupEscapeHatches()
{
	escapeHatches = [];
	var allConfigurations = getAllPlayerConfigurations(6);
	var configurationIndex = gameCode%allConfigurations.length;
	for (i = 0; i < 4; i++)
	{
		if (allConfigurations[configurationIndex][i] < 4)
		{
			escapeHatches.push("green");
		}
		else
		{
			escapeHatches.push("red");
		}
	}
}