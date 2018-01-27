$("div.Wrap").livequery("div#schedule", (element) => {
	// Hide results in the schedule
	$(element).livequery("div.Schedule", (schedList) => {
		$(schedList).livequery("div.MatchSchedule", (sched) => {
			$(sched).find("div.MatchRow-match div.MatchRow-status > span.MatchStatus--transparent").text("Obmitted");
		});
	});
}).livequery("div#match-details", (element) => {
	// Hide results on the match-page
	$(element).livequery("section.MatchOverview", (overview) => {
		$(overview).find("span.MatchStatus").text("Obmitted"); // removes any info about OT, etz.
		const scores = $(overview).find("div.TeamScore");
		scores.removeClass("TeamScore--winner"); // remove highlighting of the winner-side
		scores.find("svg").remove(); // remove the crone-icon
		scores.find("span.TeamScore-scoreValue").text("Ø"); // remove the result-scores
	}).livequery("section.MatchInfo", (info) => {
		const mapCount = $(info).find("div.MatchInfo-item:nth-child(3)");
		if (mapCount) {
			mapCount.text("Map Count: Obmitted");
		}
	}).livequery("div.Tabs", (mapTabs) => {
		const nav = $(mapTabs).find("nav.Tabs-bar");
		// Remove any names of the maps played
		const tabs = nav.find("a.Tabs-tab");
		tabs.each((index, tab) => {
			if (index > 0) {
				$(tab).text("Map "+(index));
			}
		});
		// Always add a fifth tab so that the map-count is unknown
		if (tabs.length < 6) {
			nav.append('<a class="Tabs-tab" href="#">Map 5</a>')
		}
	}).livequery("section.MatchRecap", (recap) => {
		// Remove all info-boxes.
		$(recap).find("div.GameInfo").remove();
		// Add info:
		$(recap).find("h1.MatchRecap-title").text((i, oldContent) => {
			return oldContent + " (Obmitted)";
		})
	}).livequery("div:has(.GameResult)", (results) => {
		// Remove the match-result below the player
		$(results).find("div.GameResult div.MatchStatus").text("Obmitted");
	});
});