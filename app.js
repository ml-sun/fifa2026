const groups = {
  A: [
    team("Mexico", 2, 0, 0, 3, 0),
    team("South Korea", 1, 0, 1, 2, 2),
    team("Czechia", 0, 1, 1, 2, 3),
    team("South Africa", 0, 1, 1, 1, 3),
  ],
  B: [
    team("Canada", 1, 1, 0, 7, 1),
    team("Switzerland", 1, 1, 0, 5, 2),
    team("Bosnia and Herzegovina", 0, 1, 1, 2, 5),
    team("Qatar", 0, 1, 1, 1, 7),
  ],
  C: [
    team("Brazil", 1, 1, 0, 4, 1),
    team("Morocco", 1, 1, 0, 2, 1),
    team("Scotland", 1, 0, 1, 1, 1),
    team("Haiti", 0, 0, 2, 0, 4),
  ],
  D: [
    team("United States", 2, 0, 0, 6, 1),
    team("Australia", 1, 0, 1, 2, 2),
    team("Paraguay", 1, 0, 1, 2, 4),
    team("Turkiye", 0, 0, 2, 0, 3),
  ],
  E: [
    team("Germany", 1, 0, 0, 7, 1),
    team("Ivory Coast", 1, 0, 0, 1, 0),
    team("Ecuador", 0, 0, 1, 0, 1),
    team("Curacao", 0, 0, 1, 1, 7),
  ],
  F: [
    team("Netherlands", 1, 1, 0, 7, 3),
    team("Sweden", 1, 0, 1, 6, 6),
    team("Japan", 0, 1, 0, 2, 2),
    team("Tunisia", 0, 0, 1, 1, 5),
  ],
  G: [
    team("Belgium", 0, 1, 0, 1, 1),
    team("Egypt", 0, 1, 0, 1, 1),
    team("Iran", 0, 1, 0, 2, 2),
    team("New Zealand", 0, 1, 0, 2, 2),
  ],
  H: [
    team("Uruguay", 0, 1, 0, 1, 1),
    team("Saudi Arabia", 0, 1, 0, 1, 1),
    team("Spain", 0, 1, 0, 0, 0),
    team("Cabo Verde", 0, 1, 0, 0, 0),
  ],
  I: [
    team("Norway", 1, 0, 0, 4, 1),
    team("France", 1, 0, 0, 3, 1),
    team("Senegal", 0, 0, 1, 1, 3),
    team("Iraq", 0, 0, 1, 1, 4),
  ],
  J: [
    team("Argentina", 1, 0, 0, 3, 0),
    team("Austria", 1, 0, 0, 3, 1),
    team("Jordan", 0, 0, 1, 1, 3),
    team("Algeria", 0, 0, 1, 0, 3),
  ],
  K: [
    team("Colombia", 1, 0, 0, 3, 1),
    team("Portugal", 0, 1, 0, 1, 1),
    team("DR Congo", 0, 1, 0, 1, 1),
    team("Uzbekistan", 0, 0, 1, 1, 3),
  ],
  L: [
    team("England", 1, 0, 0, 4, 2),
    team("Ghana", 1, 0, 0, 1, 0),
    team("Panama", 0, 0, 1, 0, 1),
    team("Croatia", 0, 0, 1, 2, 4),
  ],
};

const qualificationNotes = {
  Mexico: "Already clinched Group A. The projected 1A spot is secure.",
  "South Korea": "Projected 2A. A draw against South Africa secures advancement; a loss can open the door for Czechia or South Africa on tiebreakers.",
  Canada: "Projected 1B. Needs to finish ahead of Switzerland on points or tiebreakers after the final Group B matchday.",
  Switzerland: "Projected 2B. Needs to stay top two in Group B; goal difference gives a cushion over Bosnia and Qatar.",
  Brazil: "Projected 1C. Needs to hold off Morocco on points or tiebreakers over the remaining Group C fixtures.",
  Morocco: "Projected 2C. Needs to remain ahead of Scotland, or pass Brazil, after the final Group C matchday.",
  Scotland: "Projected 3C. Needs to finish third in Group C and stay among the eight best third-place teams.",
  "United States": "Already clinched a top-two Group D finish and is projected as 1D after two wins.",
  Australia: "Projected 2D. Needs to finish ahead of Paraguay on points or tiebreakers after the final Group D match.",
  Paraguay: "Projected 3D. Needs to remain third in Group D and stay inside the best third-place table.",
  Germany: "Projected 1E. Needs to avoid being passed by Ivory Coast on points or tiebreakers.",
  "Ivory Coast": "Projected 2E. Needs to stay ahead of Ecuador and Curacao, or pass Germany, in Group E.",
  Netherlands: "Projected 1F. Needs to protect first place from Sweden and Japan through points or tiebreakers.",
  Sweden: "Projected 2F. Needs to stay top two in Group F; Japan can still challenge with matches in hand.",
  Japan: "Projected 3F. Needs to finish third or better in Group F and keep a strong third-place profile.",
  Belgium: "Projected 1G. Needs to separate from a level Group G table through points or tiebreakers.",
  Egypt: "Projected 2G. Needs to remain top two in Group G as all four teams are still tightly packed.",
  Iran: "Projected 3G. Needs to finish third in Group G and remain among the best third-place teams.",
  Uruguay: "Projected 1H. Needs to finish ahead of Saudi Arabia, Spain, and Cabo Verde on points or tiebreakers.",
  "Saudi Arabia": "Projected 2H. Needs to stay top two in Group H; the group is currently level after one match.",
  Spain: "Projected 3H. Needs to finish third or better in Group H and stay inside the best third-place cutoff.",
  Norway: "Projected 1I. Needs to hold first place over France on points or tiebreakers.",
  France: "Projected 2I. Needs to stay top two in Group I, with Senegal and Iraq chasing from zero points.",
  Argentina: "Projected 1J. Needs to preserve first place over Austria on points or tiebreakers.",
  Austria: "Projected 2J. Needs to stay top two in Group J, or overtake Argentina for first.",
  Colombia: "Projected 1K. Needs to hold Group K first place over Portugal and DR Congo.",
  Portugal: "Projected 2K. Needs to stay top two in Group K; DR Congo is level on points and goal difference.",
  "DR Congo": "Projected 3K. Needs to finish third or better in Group K and remain among the best third-place teams.",
  England: "Projected 1L. Needs to hold first place over Ghana on points or tiebreakers.",
  Ghana: "Projected 2L. Needs to stay top two in Group L, with Panama and Croatia still able to climb.",
};

const thirdAssignments = {
  74: "F",
  77: "H",
  79: "C",
  80: "K",
  81: "B",
  82: "A",
  85: "G",
  87: "D",
};

const knockout = [
  {
    name: "Round of 32",
    matches: [
      match(73, "Jun 28", "Inglewood", seed("2", "A"), seed("2", "B")),
      match(76, "Jun 29", "Houston", seed("1", "C"), seed("2", "F")),
      match(74, "Jun 29", "Foxborough", seed("1", "E"), seed("3", "F")),
      match(75, "Jun 29", "Guadalupe", seed("1", "F"), seed("2", "C")),
      match(78, "Jun 30", "Arlington", seed("2", "E"), seed("2", "I")),
      match(77, "Jun 30", "East Rutherford", seed("1", "I"), seed("3", "H")),
      match(79, "Jun 30", "Mexico City", seed("1", "A"), seed("3", "C")),
      match(80, "Jul 1", "Atlanta", seed("1", "L"), seed("3", "K")),
      match(82, "Jul 1", "Seattle", seed("1", "G"), seed("3", "A")),
      match(81, "Jul 1", "Santa Clara", seed("1", "D"), seed("3", "B")),
      match(84, "Jul 2", "Inglewood", seed("1", "H"), seed("2", "J")),
      match(83, "Jul 2", "Toronto", seed("2", "K"), seed("2", "L")),
      match(85, "Jul 2", "Vancouver", seed("1", "B"), seed("3", "G")),
      match(88, "Jul 3", "Arlington", seed("2", "D"), seed("2", "G")),
      match(86, "Jul 3", "Miami Gardens", seed("1", "J"), seed("2", "H")),
      match(87, "Jul 3", "Kansas City", seed("1", "K"), seed("3", "D")),
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
      futureMatch(103, "Jul 18", "Miami Gardens", 101, 102, "Third place", "loser"),
      futureMatch(104, "Jul 19", "East Rutherford", 101, 102, "Final"),
    ],
  },
];

function team(name, wins, draws, losses, gf, ga) {
  return {
    name,
    wins,
    draws,
    losses,
    gf,
    ga,
    gd: gf - ga,
    pts: wins * 3 + draws,
  };
}

function seed(place, group) {
  return { type: "seed", place, group };
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

function teamFor(seedData) {
  const index = Number(seedData.place) - 1;
  const source = groups[seedData.group][index];
  return { ...source, seed: `${seedData.place}${seedData.group}`, group: seedData.group };
}

function entrantFor(entry) {
  if (entry.type === "seed") {
    return teamFor(entry);
  }

  const prefix = entry.type === "loser" ? "Loser" : "Winner";
  const shortPrefix = entry.type === "loser" ? "L" : "W";
  return {
    name: `${prefix} Match ${entry.match}`,
    seed: `${shortPrefix}${entry.match}`,
    group: "",
    pts: null,
    gd: null,
  };
}

function recordLine(item) {
  if (item.pts === null) {
    return "TBD";
  }
  const gd = item.gd > 0 ? `+${item.gd}` : String(item.gd);
  return `${item.pts} pts, ${gd} GD`;
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
  return `Group ${item.group} third place`;
}

function renderBracket() {
  const bracket = document.querySelector("#bracket");
  bracket.innerHTML = knockout.map(renderRound).join("");
}

function renderRound(round) {
  return `
    <section class="round" aria-label="${round.name}">
      <h3>${round.name}</h3>
      <div class="round-matches">
        ${round.matches.map(renderMatch).join("")}
      </div>
    </section>
  `;
}

function renderMatch(fixture) {
  const sides = [entrantFor(fixture.home), entrantFor(fixture.away)];
  return `
    <article class="match">
      <div class="match-head">
        <span>${fixture.label || `Match ${fixture.id}`}</span>
        <span>${fixture.date} | ${fixture.location}</span>
      </div>
      ${sides.map(renderTeamRow).join("")}
    </article>
  `;
}

function renderTeamRow(item) {
  const isThird = item.seed.startsWith("3");
  const isFuture = item.seed.startsWith("W");
  const note = qualificationNotes[item.name] || "This slot is decided by the prior knockout result.";
  return `
    <button class="team-row ${isFuture ? "future-row" : ""}" type="button" aria-label="${item.name}: ${note}">
      <span class="seed ${isThird ? "third-seed" : ""} ${isFuture ? "future-seed" : ""}">${item.seed}</span>
      <span>
        <span class="team-name">${item.name}</span>
        <span class="team-meta">${roundRole(item)}</span>
      </span>
      <span class="record">${recordLine(item)}</span>
      <span class="tooltip" role="tooltip">${note}</span>
    </button>
  `;
}

function thirdPlacedTeams() {
  return Object.entries(groups)
    .map(([group, rows]) => ({ ...rows[2], group }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.group.localeCompare(b.group));
}

function renderThirdList() {
  const assignments = new Set(Object.values(thirdAssignments));
  const list = document.querySelector("#thirdList");
  list.innerHTML = thirdPlacedTeams()
    .map((item, index) => {
      const qualified = assignments.has(item.group);
      return `
        <article class="third-card ${qualified ? "" : "out"}">
          <span class="rank">${index + 1}</span>
          <span>
            <strong>${item.name}</strong>
            <span class="team-meta">3${item.group} | ${qualified ? "projected in" : "currently out"}</span>
          </span>
          <span class="record">${recordLine(item)}</span>
        </article>
      `;
    })
    .join("");
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
  const className = index < 2 ? "qualify" : index === 2 && thirdQualifies ? "third" : "";
  const gd = row.gd > 0 ? `+${row.gd}` : row.gd;
  return `
    <tr class="${className}">
      <td>${row.name}</td>
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
