const groups = {
  A: [
    team("Mexico", 2, 0, 0, 3, 0, 0, 12),
    team("South Korea", 1, 0, 1, 2, 2, 0, 24),
    team("Czechia", 0, 1, 1, 2, 3, 0, 43),
    team("South Africa", 0, 1, 1, 1, 3, 0, 60),
  ],
  B: [
    team("Switzerland", 2, 1, 0, 7, 3, 0, 17),
    team("Canada", 1, 1, 1, 8, 3, 0, 31),
    team("Bosnia and Herzegovina", 1, 1, 1, 5, 6, 0, 62),
    team("Qatar", 0, 1, 2, 2, 10, 0, 61),
  ],
  C: [
    team("Brazil", 1, 1, 0, 4, 1, 0, 5),
    team("Morocco", 1, 1, 0, 2, 1, 0, 11),
    team("Scotland", 1, 0, 1, 1, 1, 0, 41),
    team("Haiti", 0, 0, 2, 0, 4, 0, 79),
  ],
  D: [
    team("United States", 2, 0, 0, 6, 1, 0, 14),
    team("Australia", 1, 0, 1, 2, 2, 0, 26),
    team("Paraguay", 1, 0, 1, 2, 4, 0, 37),
    team("Turkiye", 0, 0, 2, 0, 3, 0, 32),
  ],
  E: [
    team("Germany", 2, 0, 0, 9, 2, 0, 8),
    team("Ivory Coast", 1, 0, 1, 2, 2, 0, 30),
    team("Ecuador", 0, 1, 1, 0, 1, -2, 29),
    team("Curacao", 0, 1, 1, 1, 7, 0, 82),
  ],
  F: [
    team("Netherlands", 1, 1, 0, 7, 3, 0, 7),
    team("Japan", 1, 1, 0, 6, 2, 0, 16),
    team("Sweden", 1, 0, 1, 6, 6, -3, 36),
    team("Tunisia", 0, 0, 2, 1, 9, 0, 56),
  ],
  G: [
    team("Egypt", 1, 1, 0, 4, 2, 0, 27),
    team("Iran", 0, 2, 0, 3, 3, 0, 21),
    team("Belgium", 0, 2, 0, 2, 2, 0, 9),
    team("New Zealand", 0, 1, 1, 3, 5, 0, 85),
  ],
  H: [
    team("Spain", 1, 1, 0, 4, 0, 0, 3),
    team("Uruguay", 0, 2, 0, 3, 3, 0, 18),
    team("Cabo Verde", 0, 2, 0, 2, 2, -3, 64),
    team("Saudi Arabia", 0, 1, 1, 1, 5, 0, 58),
  ],
  I: [
    team("France", 2, 0, 0, 6, 1, 0, 2),
    team("Norway", 2, 0, 0, 7, 3, 0, 22),
    team("Senegal", 0, 0, 2, 3, 6, 0, 19),
    team("Iraq", 0, 0, 2, 1, 7, 0, 59),
  ],
  J: [
    team("Argentina", 2, 0, 0, 5, 0, 0, 1),
    team("Austria", 1, 0, 1, 3, 3, 0, 23),
    team("Algeria", 1, 0, 1, 2, 4, -1, 28),
    team("Jordan", 0, 0, 2, 2, 5, 0, 72),
  ],
  K: [
    team("Colombia", 2, 0, 0, 4, 1, 0, 10),
    team("Portugal", 1, 1, 0, 6, 1, 0, 6),
    team("DR Congo", 0, 1, 1, 1, 2, -2, 47),
    team("Uzbekistan", 0, 0, 2, 1, 8, 0, 57),
  ],
  L: [
    team("England", 1, 1, 0, 4, 2, 0, 4),
    team("Ghana", 1, 1, 0, 1, 0, 0, 65),
    team("Croatia", 1, 0, 1, 3, 4, -1, 13),
    team("Panama", 0, 0, 2, 0, 2, 0, 42),
  ],
};

const confirmedTeams = new Set([
  "Mexico",
  "Switzerland",
  "Canada",
  "United States",
  "Germany",
  "France",
  "Norway",
  "Argentina",
  "Colombia",
]);

const qualificationNotes = {
  Mexico: "Already clinched Group A. The projected 1A spot is secure.",
  "South Korea": "Projected 2A. A draw against South Africa secures advancement; a loss can open the door for Czechia or South Africa on tiebreakers.",
  Switzerland: "Confirmed as Group B winner after beating Canada 2-1.",
  Canada: "Confirmed as Group B runner-up after finishing ahead of Bosnia and Herzegovina on goal difference.",
  "Bosnia and Herzegovina": "Projected 3B. Beat Qatar 3-1 to reach four points and is currently in the third-place qualification mix.",
  Brazil: "Projected 1C. Needs to hold off Morocco on points or tiebreakers over the remaining Group C fixtures.",
  Morocco: "Projected 2C. Needs to remain ahead of Scotland, or pass Brazil, after the final Group C matchday.",
  Scotland: "Projected 3C. Needs to finish third in Group C and stay among the eight best third-place teams.",
  "United States": "Already clinched a top-two Group D finish and is projected as 1D after two wins.",
  Australia: "Projected 2D. Needs to finish ahead of Paraguay on points or tiebreakers after the final Group D match.",
  Paraguay: "Projected 3D. Needs to remain third in Group D and stay inside the best third-place table.",
  Germany: "Clinched Group E after beating Ivory Coast and Ecuador-Curacao ended level.",
  "Ivory Coast": "Projected 2E. Needs to stay ahead of Ecuador and Curacao, or pass Germany, in Group E.",
  Netherlands: "Projected 1F. Needs to stay ahead of Japan on points or tiebreakers on the final Group F day.",
  Japan: "Projected 2F. Needs to stay top two in Group F; Sweden can still overtake Japan directly.",
  Sweden: "Projected 3F. Currently leads the third-place table and needs to stay in the top eight third-place teams.",
  Egypt: "Projected 1G. Needs to protect first place from Iran, Belgium, and New Zealand on the final Group G day.",
  Iran: "Projected 2G. Needs to stay top two in Group G; Egypt and Belgium remain close.",
  Belgium: "Projected 3G. Needs to finish third or better in Group G and remain among the best third-place teams.",
  Spain: "Projected 1H. Needs to protect first place from Uruguay and Cabo Verde on the final Group H day.",
  Uruguay: "Projected 2H. Needs to stay top two in Group H; Cabo Verde is level on points.",
  "Cabo Verde": "Projected 3H. Needs to finish third or better in Group H and remain among the best third-place teams.",
  France: "Projected 1I. Already through; a draw against Norway likely keeps first on current goal difference.",
  Norway: "Projected 2I. Already through; a win over France would win Group I.",
  Argentina: "Projected 1J. Already through and leads Group J after beating Austria.",
  Austria: "Projected 2J. Needs to stay top two in Group J, or overtake Argentina for first.",
  Algeria: "Projected 3J. Needs to finish third or better in Group J and stay inside the best third-place cutoff.",
  Colombia: "Projected 1K. Needs to hold Group K first place over Portugal and DR Congo.",
  Portugal: "Projected 2K. Needs to beat Colombia to win Group K; otherwise it must protect second place.",
  England: "Projected 1L. Needs to hold first place over Ghana on points or tiebreakers.",
  Ghana: "Projected 2L. Needs to stay top two in Group L, with Croatia still able to climb.",
  Croatia: "Projected 3L. Needs to finish third or better in Group L and stay inside the best third-place cutoff.",
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
      match(73, "Jun 28", "Inglewood", seed("2", "A"), seed("2", "B")),
      match(76, "Jun 29", "Houston", seed("1", "C"), seed("2", "F")),
      match(74, "Jun 29", "Foxborough", seed("1", "E"), thirdSeed(74)),
      match(75, "Jun 29", "Guadalupe", seed("1", "F"), seed("2", "C")),
      match(78, "Jun 30", "Arlington", seed("2", "E"), seed("2", "I")),
      match(77, "Jun 30", "East Rutherford", seed("1", "I"), thirdSeed(77)),
      match(79, "Jun 30", "Mexico City", seed("1", "A"), thirdSeed(79)),
      match(80, "Jul 1", "Atlanta", seed("1", "L"), thirdSeed(80)),
      match(82, "Jul 1", "Seattle", seed("1", "G"), thirdSeed(82)),
      match(81, "Jul 1", "Santa Clara", seed("1", "D"), thirdSeed(81)),
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

function match(id, date, location, home, away) {
  return { id, date, location, home, away };
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
    return projectedWinner(entry.match);
  }

  return projectedLoser(entry.match);
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

function projectedWinner(matchId) {
  const fixture = getFixtureById(matchId);
  const sides = [entrantFor(fixture.home, fixture), entrantFor(fixture.away, fixture)];
  return sides[0].fifaRank <= sides[1].fifaRank ? sides[0] : sides[1];
}

function projectedLoser(matchId) {
  const fixture = getFixtureById(matchId);
  const sides = [entrantFor(fixture.home, fixture), entrantFor(fixture.away, fixture)];
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
  return `
    <section class="round" aria-label="${round.name}">
      <h3>${round.name}</h3>
      <div class="round-matches">
        ${round.matches.map((fixture, index) => renderMatch(fixture, index, span, roundIndex)).join("")}
      </div>
    </section>
  `;
}

function renderMatch(fixture, index, span, roundIndex) {
  const sides = [entrantFor(fixture.home, fixture), entrantFor(fixture.away, fixture)];
  const slotStart = index * span + 1;
  const showProjection = roundIndex > 0;
  return `
    <article class="match" style="--slot-start: ${slotStart}; --slot-span: ${span};">
      <div class="match-head">
        <span>${fixture.label || `Match ${fixture.id}`}</span>
        <span>${fixture.date} | ${fixture.location}</span>
      </div>
      ${showProjection ? `<div class="match-subtitle">${probabilityLine(sides)}</div>` : ""}
      ${sides.map(renderTeamRow).join("")}
    </article>
  `;
}

function renderTeamRow(item) {
  const isThird = item.seed.startsWith("3");
  const isFuture = !item.group;
  const baseNote = qualificationNotes[item.name] || "This slot is decided by the prior knockout result.";
  const note = isThird ? `${baseNote} ${thirdPlaceSlotOptions(item)}` : baseNote;
  return `
    <button class="team-row ${isFuture ? "future-row" : ""} ${item.confirmed ? "confirmed-row" : ""}" type="button" aria-label="${item.name}: ${note}">
      <span class="seed ${isThird ? "third-seed" : ""} ${isFuture ? "future-seed" : ""} ${item.confirmed ? "confirmed-seed" : ""}">${item.seed}</span>
      <span>
        <span class="team-name">${item.name} <span class="rank-chip">${rankLabel(item)}</span>${item.confirmed ? ' <span class="bracket-chip">Confirmed</span>' : ""}</span>
        <span class="team-meta">${roundRole(item)}${item.confirmed ? " | confirmed" : ""}</span>
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
    ${renderThirdSection("Projected in", projected)}
    ${renderThirdSection("Other possible third-place teams", possible)}
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
        <span class="team-meta">3${item.group} | ${item.projectedIn ? "projected in" : "possible"}${item.confirmed ? " | confirmed" : ""}</span>
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
