const groups = {
  A: [
    team("Mexico", 3, 0, 0, 6, 0, 0, 12),
    team("South Africa", 1, 1, 1, 2, 3, 0, 60),
    team("South Korea", 1, 0, 2, 2, 3, 0, 24),
    team("Czechia", 0, 1, 2, 2, 6, 0, 43),
  ],
  B: [
    team("Switzerland", 2, 1, 0, 7, 3, 0, 17),
    team("Canada", 1, 1, 1, 8, 3, 0, 31),
    team("Bosnia and Herzegovina", 1, 1, 1, 5, 6, 0, 62),
    team("Qatar", 0, 1, 2, 2, 10, 0, 61),
  ],
  C: [
    team("Brazil", 2, 1, 0, 7, 1, 0, 5),
    team("Morocco", 2, 1, 0, 6, 3, 0, 11),
    team("Scotland", 1, 0, 2, 1, 4, 0, 41),
    team("Haiti", 0, 0, 3, 2, 8, 0, 79),
  ],
  D: [
    team("United States", 2, 0, 1, 8, 4, 0, 14),
    team("Australia", 1, 1, 1, 2, 2, 0, 26),
    team("Paraguay", 1, 1, 1, 2, 4, 0, 37),
    team("Turkiye", 1, 0, 2, 3, 5, 0, 32),
  ],
  E: [
    team("Germany", 2, 0, 1, 10, 4, 0, 8),
    team("Ivory Coast", 2, 0, 1, 4, 2, 0, 30),
    team("Ecuador", 1, 1, 1, 2, 2, 0, 29),
    team("Curacao", 0, 1, 2, 1, 9, 0, 82),
  ],
  F: [
    team("Netherlands", 2, 1, 0, 10, 4, 0, 7),
    team("Japan", 1, 2, 0, 7, 3, 0, 16),
    team("Sweden", 1, 1, 1, 7, 7, 0, 36),
    team("Tunisia", 0, 0, 3, 2, 12, 0, 56),
  ],
  G: [
    team("Belgium", 1, 2, 0, 7, 3, 0, 9),
    team("Egypt", 1, 2, 0, 5, 3, 0, 27),
    team("Iran", 0, 3, 0, 4, 4, 0, 21),
    team("New Zealand", 0, 1, 2, 4, 10, 0, 85),
  ],
  H: [
    team("Spain", 2, 1, 0, 5, 0, 0, 3),
    team("Cabo Verde", 0, 3, 0, 2, 2, 0, 64),
    team("Uruguay", 0, 2, 1, 3, 4, 0, 18),
    team("Saudi Arabia", 0, 1, 2, 1, 5, 0, 58),
  ],
  I: [
    team("France", 3, 0, 0, 10, 2, 0, 2),
    team("Norway", 2, 0, 1, 8, 7, 0, 22),
    team("Senegal", 1, 0, 2, 8, 6, 0, 19),
    team("Iraq", 0, 0, 3, 1, 12, 0, 59),
  ],
  J: [
    team("Argentina", 3, 0, 0, 8, 1, 0, 1),
    team("Austria", 1, 1, 1, 6, 6, 0, 23),
    team("Algeria", 1, 1, 1, 5, 7, 0, 28),
    team("Jordan", 0, 0, 3, 3, 8, 0, 72),
  ],
  K: [
    team("Colombia", 2, 1, 0, 4, 1, 0, 10),
    team("Portugal", 1, 2, 0, 6, 1, 0, 6),
    team("DR Congo", 1, 1, 1, 4, 3, 0, 47),
    team("Uzbekistan", 0, 0, 3, 2, 11, 0, 57),
  ],
  L: [
    team("England", 2, 1, 0, 6, 2, 0, 4),
    team("Croatia", 2, 0, 1, 5, 5, 0, 13),
    team("Ghana", 1, 1, 1, 2, 2, 0, 65),
    team("Panama", 0, 0, 3, 0, 4, 0, 42),
  ],
};

const confirmedTeams = new Set([
  "Mexico",
  "South Africa",
  "Switzerland",
  "Canada",
  "Bosnia and Herzegovina",
  "Brazil",
  "Morocco",
  "United States",
  "Australia",
  "Paraguay",
  "Germany",
  "Ivory Coast",
  "Ecuador",
  "Netherlands",
  "Japan",
  "Sweden",
  "Belgium",
  "Egypt",
  "Spain",
  "Cabo Verde",
  "France",
  "Norway",
  "Senegal",
  "Argentina",
  "Austria",
  "Algeria",
  "Colombia",
  "Portugal",
  "DR Congo",
  "England",
  "Croatia",
  "Ghana",
]);

const qualificationNotes = {
  Mexico: "Clinched Group A, then beat Ecuador 2-0 to reach the Round of 16.",
  "South Africa": "Finished second in Group A and lost 1-0 to Canada in the Round of 32.",
  Switzerland: "Confirmed as Group B winner after beating Canada 2-1.",
  Canada: "Confirmed as Group B runner-up after finishing ahead of Bosnia and Herzegovina on goal difference.",
  "Bosnia and Herzegovina": "Qualified as 3B and plays the United States in the Round of 32.",
  Brazil: "Won Group C, beat Japan 2-1, and will face Norway in the Round of 16.",
  Morocco: "Finished second in Group C, beat the Netherlands on penalties, and will face Canada in the Round of 16.",
  Scotland: "Finished third in Group C but missed the eight-team third-place cutoff.",
  "United States": "Won Group D and plays Bosnia and Herzegovina in the Round of 32.",
  Australia: "Finished second in Group D and plays Egypt in the Round of 32.",
  Paraguay: "Qualified as 3D, eliminated Germany on penalties, and will face France in the Round of 16.",
  Germany: "Won Group E but was eliminated by Paraguay on penalties in the Round of 32.",
  "Ivory Coast": "Finished second in Group E and lost 2-1 to Norway in the Round of 32.",
  Ecuador: "Qualified as 3E and lost 2-0 to Mexico in the Round of 32.",
  Netherlands: "Won Group F but was eliminated by Morocco on penalties in the Round of 32.",
  Japan: "Finished second in Group F and lost 2-1 to Brazil in the Round of 32.",
  Sweden: "Qualified as 3F and lost 3-0 to France in the Round of 32.",
  Belgium: "Won Group G and plays Senegal in the Round of 32.",
  Egypt: "Finished second in Group G and plays Australia in the Round of 32.",
  Spain: "Won Group H and plays Austria in the Round of 32.",
  "Cabo Verde": "Finished second in Group H and plays Argentina in the Round of 32.",
  France: "Won Group I, beat Sweden 3-0, and will face Paraguay in the Round of 16.",
  Norway: "Finished second in Group I, beat Ivory Coast 2-1, and will face Brazil in the Round of 16.",
  Senegal: "Qualified as 3I and plays Belgium in the Round of 32.",
  Argentina: "Won Group J and plays Cabo Verde in the Round of 32.",
  Austria: "Finished second in Group J and plays Spain in the Round of 32.",
  Algeria: "Qualified as 3J and plays Switzerland in the Round of 32.",
  Colombia: "Won Group K and plays Ghana in the Round of 32.",
  Portugal: "Finished second in Group K and plays Croatia in the Round of 32.",
  "DR Congo": "Qualified as 3K and lost 2-1 to England in the Round of 32.",
  England: "Won Group L, beat DR Congo 2-1, and will face Mexico in the Round of 16.",
  Croatia: "Finished second in Group L and plays Portugal in the Round of 32.",
  Ghana: "Qualified as 3L and plays Colombia in the Round of 32.",
};

const thirdPlacePools = {
  74: ["A", "B", "C", "D", "F"],
  77: ["C", "D", "F", "G", "H"],
  79: ["C", "E", "F", "H", "I"],
  80: ["E", "H", "I", "J", "K"],
  81: ["B", "E", "F", "I", "J"],
  82: ["A", "E", "H", "I", "J"],
  85: ["E", "F", "G", "I", "J"],
  87: ["D", "E", "I", "J", "L"],
};

const THIRD_PLACE_SLOT_MATCHES = {
  "1A": 79,
  "1B": 85,
  "1D": 81,
  "1E": 74,
  "1G": 82,
  "1I": 77,
  "1K": 87,
  "1L": 80,
};

const annexCProjection = getAnnexCProjection();
const thirdAssignments = annexCProjection.assignments;

const knockout = [
  {
    name: "Round of 32",
    matches: [
      match(73, "Jun 28", "Inglewood", seed("2", "A"), seed("2", "B"), result("away", "Canada 1, South Africa 0")),
      match(76, "Jun 29", "Houston", seed("1", "C"), seed("2", "F"), result("home", "Brazil 2, Japan 1")),
      match(74, "Jun 29", "Foxborough", seed("1", "E"), thirdSeed(74), result("away", "Paraguay advances 4-3 on penalties")),
      match(75, "Jun 29", "Guadalupe", seed("1", "F"), seed("2", "C"), result("away", "Morocco advances 3-2 on penalties")),
      match(78, "Jun 30", "Arlington", seed("2", "E"), seed("2", "I"), result("away", "Norway 2, Ivory Coast 1")),
      match(77, "Jun 30", "East Rutherford", seed("1", "I"), thirdSeed(77), result("home", "France 3, Sweden 0")),
      match(79, "Jun 30", "Mexico City", seed("1", "A"), thirdSeed(79), result("home", "Mexico 2, Ecuador 0")),
      match(80, "Jul 1", "Atlanta", seed("1", "L"), thirdSeed(80), result("home", "England 2, DR Congo 1")),
      match(82, "Jul 1", "Seattle", seed("1", "G"), thirdSeed(82), null, "Live: Senegal led Belgium 1-0 after a 25th-minute Diarra goal"),
      match(81, "Jul 1", "Santa Clara", seed("1", "D"), thirdSeed(81), null, "Upcoming: 8 p.m. ET on July 1"),
      match(84, "Jul 2", "Inglewood", seed("1", "H"), seed("2", "J")),
      match(83, "Jul 2", "Toronto", seed("2", "K"), seed("2", "L")),
      match(85, "Jul 2", "Vancouver", seed("1", "B"), thirdSeed(85)),
      match(88, "Jul 3", "Arlington", seed("2", "D"), seed("2", "G")),
      match(86, "Jul 3", "Miami Gardens", seed("1", "J"), seed("2", "H")),
      match(87, "Jul 3", "Kansas City", seed("1", "K"), thirdSeed(87)),
    ],
  },
  {
    name: "Round of 16",
    matches: [
      futureMatch(90, "Jul 4", "Houston", 73, 75),
      futureMatch(89, "Jul 4", "Philadelphia", 74, 77),
      futureMatch(91, "Jul 5", "East Rutherford", 76, 78),
      futureMatch(92, "Jul 5", "Mexico City", 79, 80),
      futureMatch(93, "Jul 6", "Arlington", 83, 84),
      futureMatch(94, "Jul 6", "Seattle", 81, 82),
      futureMatch(95, "Jul 7", "Atlanta", 86, 88),
      futureMatch(96, "Jul 7", "Vancouver", 85, 87),
    ],
  },
  {
    name: "Round of 8",
    matches: [
      futureMatch(97, "Jul 9", "Foxborough", 89, 90),
      futureMatch(98, "Jul 10", "Inglewood", 93, 94),
      futureMatch(99, "Jul 11", "Miami Gardens", 91, 92),
      futureMatch(100, "Jul 11", "Kansas City", 95, 96),
    ],
  },
  {
    name: "Round of 4",
    matches: [
      futureMatch(101, "Jul 14", "Arlington", 97, 98),
      futureMatch(102, "Jul 15", "Atlanta", 99, 100),
    ],
  },
  {
    name: "Round of 2",
    matches: [
      futureMatch(104, "Jul 19", "East Rutherford", 101, 102, "Final"),
    ],
  },
];

function team(name, wins, draws, losses, gf, ga, tcs = 0, fifaRank = null) {
  return {
    name,
    wins,
    draws,
    losses,
    gf,
    ga,
    gd: gf - ga,
    pts: wins * 3 + draws,
    tcs,
    fifaRank,
  };
}

function seed(place, group) {
  return { type: "seed", place, group };
}

function thirdSeed(matchId) {
  return seed("3", thirdAssignments[matchId]);
}

function match(id, date, location, home, away, matchResult = null, status = "") {
  return { id, date, location, home, away, result: matchResult, status };
}

function futureMatch(id, date, location, homeMatch, awayMatch, label = "", result = "winner") {
  return {
    id,
    date,
    location,
    label,
    home: { type: result, match: homeMatch },
    away: { type: result, match: awayMatch },
  };
}

function result(winner, summary) {
  return { winner, summary };
}

function getAnnexCProjection() {
  const qualifiedGroups = thirdPlacedTeams()
    .slice(0, 8)
    .map((item) => item.group)
    .sort()
    .join("");

  const optionEntry = Object.entries(ANNEX_C_MAPPING).find(([, slots]) => {
    const slotGroups = slots.map((slot) => slot.slice(1)).sort().join("");
    return slotGroups === qualifiedGroups;
  });

  if (!optionEntry) {
    throw new Error(`No Annex C option for third-place groups ${qualifiedGroups}`);
  }

  const [option, slots] = optionEntry;
  const assignments = {};
  ANNEX_C_SLOT_ORDER.forEach((slot, index) => {
    assignments[THIRD_PLACE_SLOT_MATCHES[slot]] = slots[index].slice(1);
  });

  return { option: Number(option), qualifiedGroups, assignments };
}

function teamFor(seedData, matchId) {
  const index = Number(seedData.place) - 1;
  const source = groups[seedData.group][index];
  return {
    ...source,
    seed: `${seedData.place}${seedData.group}`,
    group: seedData.group,
    confirmed: confirmedTeams.has(source.name),
    eligibleGroups: seedData.place === "3" ? thirdPlacePools[matchId] : null,
  };
}

function entrantFor(entry, fixture) {
  if (entry.type === "seed") {
    return teamFor(entry, fixture.id);
  }

  if (entry.type === "winner") {
    return winnerFor(entry.match);
  }

  return loserFor(entry.match);
}

function recordLine(item) {
  if (item.pts === null) {
    return "TBD";
  }
  const gd = item.gd > 0 ? `+${item.gd}` : String(item.gd);
  return `${item.pts} pts, ${gd} GD`;
}

function rankLabel(item) {
  return item.fifaRank ? `#${item.fifaRank}` : "";
}

function matchProbability(teamA, teamB) {
  if (!teamA.fifaRank || !teamB.fifaRank) {
    return 50;
  }

  const exponent = (teamA.fifaRank - teamB.fifaRank) / 40;
  return Math.round((1 / (1 + Math.pow(10, exponent))) * 100);
}

function probabilityLine(sides) {
  if (sides.length !== 2) {
    return "";
  }

  const first = matchProbability(sides[0], sides[1]);
  return `${sides[0].name} ${first}% | ${sides[1].name} ${100 - first}%`;
}

function getFixtureById(matchId) {
  for (const round of knockout) {
    const found = round.matches.find((fixture) => fixture.id === matchId);
    if (found) {
      return found;
    }
  }
  throw new Error(`Unknown match ${matchId}`);
}

function sidesForFixture(fixture) {
  return [entrantFor(fixture.home, fixture), entrantFor(fixture.away, fixture)];
}

function winnerFor(matchId) {
  const fixture = getFixtureById(matchId);
  const sides = sidesForFixture(fixture);
  if (fixture.result) {
    const winner = fixture.result.winner === "home" ? sides[0] : sides[1];
    return { ...winner, knockoutConfirmed: true, fromMatch: matchId };
  }
  return sides[0].fifaRank <= sides[1].fifaRank ? sides[0] : sides[1];
}

function loserFor(matchId) {
  const fixture = getFixtureById(matchId);
  const sides = sidesForFixture(fixture);
  if (fixture.result) {
    return fixture.result.winner === "home" ? sides[1] : sides[0];
  }
  return sides[0].fifaRank > sides[1].fifaRank ? sides[0] : sides[1];
}

function roundRole(item) {
  if (!item.group) {
    return "Advances from prior knockout match";
  }
  if (item.seed.startsWith("1")) {
    return `Group ${item.group} winner`;
  }
  if (item.seed.startsWith("2")) {
    return `Group ${item.group} runner-up`;
  }
  if (item.eligibleGroups) {
    return `Group ${item.group} third place | slot: ${item.eligibleGroups.join("/")}`;
  }
  return `Group ${item.group} third place`;
}

function renderBracket() {
  const bracket = document.querySelector("#bracket");
  bracket.innerHTML = knockout.map(renderRound).join("");
}

function renderRound(round, roundIndex) {
  const span = 2 ** roundIndex;
  const matches = bracketOrderedMatches(roundIndex);
  return `
    <section class="round round-${roundIndex}" aria-label="${round.name}">
      <h3>${round.name}</h3>
      <div class="round-matches">
        ${matches.map((fixture, index) => renderMatch(fixture, index, span, roundIndex)).join("")}
      </div>
    </section>
  `;
}

function bracketOrderedMatches(roundIndex) {
  const fixturesById = new Map();
  const roundById = new Map();
  knockout.forEach((round, index) => {
    round.matches.forEach((fixture) => {
      fixturesById.set(fixture.id, fixture);
      roundById.set(fixture.id, index);
    });
  });

  const ordered = [];
  const seen = new Set();

  function visit(fixture) {
    if (!fixture || seen.has(fixture.id)) {
      return;
    }

    const fixtureRoundIndex = roundById.get(fixture.id);
    if (fixtureRoundIndex === roundIndex) {
      ordered.push(fixture);
      seen.add(fixture.id);
      return;
    }

    [fixture.home, fixture.away].forEach((entry) => {
      if (entry.type === "winner" || entry.type === "loser") {
        visit(fixturesById.get(entry.match));
      }
    });
  }

  knockout[knockout.length - 1].matches.forEach(visit);

  knockout[roundIndex].matches.forEach((fixture) => {
    if (!seen.has(fixture.id)) {
      ordered.push(fixture);
    }
  });

  return ordered;
}

function renderMatch(fixture, index, span, roundIndex) {
  const sides = sidesForFixture(fixture);
  const slotStart = index * span + 1;
  const showProjection = roundIndex > 0;
  const subtitle = fixture.result?.summary || fixture.status || (showProjection ? probabilityLine(sides) : "");
  return `
    <article class="match ${fixture.result ? "played-match" : ""}" style="--slot-start: ${slotStart}; --slot-span: ${span};">
      <div class="match-head">
        <span>${fixture.label || `Match ${fixture.id}`}</span>
        <span>${fixture.date} | ${fixture.location}</span>
      </div>
      ${subtitle ? `<div class="match-subtitle">${subtitle}</div>` : ""}
      ${sides.map((side) => renderTeamRow(side, roundIndex)).join("")}
    </article>
  `;
}

function renderTeamRow(item, roundIndex) {
  const isThird = item.seed.startsWith("3");
  const isFuture = !item.group;
  const isConfirmed = (roundIndex === 0 && item.confirmed) || item.knockoutConfirmed;
  const baseNote = qualificationNotes[item.name] || "This slot is decided by the prior knockout result.";
  const note = isThird ? `${baseNote} ${thirdPlaceSlotOptions(item)}` : baseNote;
  return `
    <button class="team-row ${isFuture ? "future-row" : ""} ${isConfirmed ? "confirmed-row" : ""}" type="button" aria-label="${item.name}: ${note}">
      <span class="seed ${isThird ? "third-seed" : ""} ${isFuture ? "future-seed" : ""} ${isConfirmed ? "confirmed-seed" : ""}">${item.seed}</span>
      <span>
        <span class="team-name">${item.name} <span class="rank-chip">${rankLabel(item)}</span>${isConfirmed ? ' <span class="bracket-chip">Confirmed</span>' : ""}</span>
        <span class="team-meta">${roundRole(item)}${isConfirmed ? " | confirmed" : ""}</span>
      </span>
      <span class="record">${recordLine(item)}</span>
      <span class="tooltip" role="tooltip">${note}</span>
    </button>
  `;
}

function thirdPlaceSlotOptions(item) {
  if (!item.eligibleGroups) {
    return thirdPlaceAlternatives(item);
  }

  const currentTeams = item.eligibleGroups
    .map((group) => {
      const candidate = groups[group]?.[2];
      return candidate ? `${candidate.name} (3${group})` : `3${group}`;
    })
    .join(", ");
  return `Eligible slot groups: ${item.eligibleGroups.join("/")}. Current teams in those groups: ${currentTeams}.`;
}

function thirdPlaceAlternatives(item) {
  const alternatives = thirdPlacedTeams()
    .filter((teamData) => teamData.group !== item.group)
    .map((teamData) => `${teamData.name} (3${teamData.group})`)
    .join(", ");
  return `Other current third-place candidates: ${alternatives}.`;
}

function thirdPlacedTeams() {
  return Object.entries(groups)
    .map(([group, rows]) => ({ ...rows[2], group, confirmed: confirmedTeams.has(rows[2].name) }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || b.tcs - a.tcs || a.group.localeCompare(b.group));
}

function renderThirdList() {
  const assignments = new Set(Object.values(thirdAssignments));
  const list = document.querySelector("#thirdList");
  const teams = thirdPlacedTeams().map((item, index) => ({
    ...item,
    rank: index + 1,
    projectedIn: assignments.has(item.group),
  }));
  const projected = teams.filter((item) => item.projectedIn);
  const possible = teams.filter((item) => !item.projectedIn);
  list.innerHTML = `
    ${renderThirdSection("Qualified third-place teams", projected)}
    ${renderThirdSection("Outside cutoff", possible)}
  `;
}

function renderThirdSection(title, teams) {
  return `
    <section class="third-section">
      <h3>${title}</h3>
      ${teams.map(renderThirdCard).join("")}
    </section>
  `;
}

function renderThirdCard(item) {
  return `
    <article class="third-card ${item.projectedIn ? "" : "possible"} ${item.confirmed ? "confirmed-card" : ""}">
      <span class="rank">${item.rank}</span>
      <span>
        <strong>${item.name}</strong>
        <span class="team-meta">3${item.group} | ${item.projectedIn ? "qualified" : "outside cutoff"}${item.confirmed ? " | confirmed" : ""}</span>
      </span>
      <span class="record">${recordLine(item)}</span>
    </article>
  `;
}

function renderStandings() {
  const standings = document.querySelector("#standings");
  const projectedThirds = new Set(Object.values(thirdAssignments));
  standings.innerHTML = Object.entries(groups)
    .map(([group, rows]) => `
      <article class="group-table">
        <h3>Group ${group}</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((row, index) => renderStandingRow(row, index, projectedThirds.has(group))).join("")}
          </tbody>
        </table>
      </article>
    `)
    .join("");
}

function renderStandingRow(row, index, thirdQualifies) {
  const className = [
    index < 2 ? "qualify" : "",
    index === 2 && thirdQualifies ? "third" : "",
    confirmedTeams.has(row.name) ? "confirmed" : "",
  ].filter(Boolean).join(" ");
  const gd = row.gd > 0 ? `+${row.gd}` : row.gd;
  return `
    <tr class="${className}">
      <td>${row.name}${confirmedTeams.has(row.name) ? ' <span class="status-chip">Confirmed</span>' : ""}</td>
      <td>${row.wins}</td>
      <td>${row.draws}</td>
      <td>${row.losses}</td>
      <td>${gd}</td>
      <td>${row.pts}</td>
    </tr>
  `;
}

renderBracket();
renderThirdList();
renderStandings();
