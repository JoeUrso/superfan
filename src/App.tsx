import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AwardIcon,
  BookmarkIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CrownIcon,
  LoaderPinwheel,
  MapPinIcon,
  MessageSquareIcon,
  SearchIcon,
  SettingsIcon,
  TrophyIcon,
  UploadIcon,
} from "lucide-react";
import { useState } from "react";
import friend1 from "./assets/403019_avatar_male_man_person_user_icon.png";
import cole from "./assets/cole.png";
import game1 from "./assets/game 1.jpeg";
import game2 from "./assets/game 2.jpg";
import game3 from "./assets/game 3.webp";
import game4 from "./assets/game 4.webp";
import game5 from "./assets/game 5.jpeg";
import game6 from "./assets/game 6.jpeg";
import judge from "./assets/judge.png";
import oriolesLogo from "./assets/mlb-baltimore-orioles-logo-480x480.png";
import redSoxLogo from "./assets/mlb-boston-red-sox-logo-480x480.png";
import dodgersLogo from "./assets/mlb-los-angeles-dodgers-logo.png";
import metsLogo from "./assets/mlb-new-york-mets-logo-480x480.png";
import yankeesLogo from "./assets/mlb-new-york-yankees-logo-480x480.png";
import philliesLogo from "./assets/mlb-philadelphia-phillies-logo-480x480.png";
import rizzo from "./assets/rizzo.png";
import soto from "./assets/soto.webp";
import stanton from "./assets/staton.png";
import backgroundImage from "./assets/yankee_stadium.jpg";

function StatCard({ icon: Icon, title, value }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors h-full flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-white" />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center">
        <div className="text-4xl font-bold text-white">{value}</div>
      </CardContent>
    </Card>
  );
}

function StatsSection() {
  const [selectedTeam, setSelectedTeam] = useState("home");

  const teams = {
    home: {
      name: "Home Team",
      logo: yankeesLogo,
      offensive: {
        runs: 5,
        hits: 10,
        doubles: 2,
        triples: 1,
        homeRuns: 1,
        rbi: 5,
        walks: 3,
        strikeouts: 7,
        stolenBases: 2,
        avg: ".286",
        obp: ".350",
        slg: ".500",
        ops: ".850",
        totalBases: 17,
        sacFlies: 1,
        hitByPitch: 1,
        groundIntoDP: 1,
      },
      defensive: {
        inningsPitched: "9.0",
        hits: 8,
        runs: 3,
        earnedRuns: 3,
        walks: 2,
        strikeouts: 7,
        homeRunsAllowed: 1,
        battersFaced: 35,
        era: "3.00",
        whip: "1.11",
        strikeoutsPer9: "7.00",
        hitsPer9: "8.00",
        strikeoutToWalkRatio: "3.50",
        pitchCount: 120,
        firstPitchStrikes: 22,
        groundOuts: 10,
        flyOuts: 8,
      },
    },
    away: {
      name: "Away Team",
      logo: dodgersLogo,
      offensive: {
        runs: 3,
        hits: 8,
        doubles: 1,
        triples: 0,
        homeRuns: 1,
        rbi: 3,
        walks: 2,
        strikeouts: 9,
        stolenBases: 1,
        avg: ".250",
        obp: ".320",
        slg: ".420",
        ops: ".740",
        totalBases: 12,
        sacFlies: 0,
        hitByPitch: 0,
        groundIntoDP: 2,
      },
      defensive: {
        inningsPitched: "8.0",
        hits: 10,
        runs: 5,
        earnedRuns: 5,
        walks: 3,
        strikeouts: 6,
        homeRunsAllowed: 1,
        battersFaced: 37,
        era: "5.63",
        whip: "1.63",
        strikeoutsPer9: "6.75",
        hitsPer9: "11.25",
        strikeoutToWalkRatio: "2.00",
        pitchCount: 135,
        firstPitchStrikes: 20,
        groundOuts: 9,
        flyOuts: 9,
      },
    },
  };

  const StatRow = ({ label, value, hidden = false }) => (
    <div
      className={`justify-between py-1 border-b border-muted-foreground/20 last:border-b-0 ${
        hidden ? "hidden 2xl:flex" : "flex"
      }`}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-4">
        {Object.entries(teams).map(([key, team]) => (
          <div
            key={key}
            className={`flex items-center justify-center cursor-pointer w-full ${
              selectedTeam === key ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setSelectedTeam(key)}
          >
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className="w-20 h-20 rounded-full mb-4 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold pl-4">Offensive Stats</h2>
          <div className="bg-muted p-4 rounded-md">
            <StatRow label="Runs" value={teams[selectedTeam].offensive.runs} />
            <StatRow label="Hits" value={teams[selectedTeam].offensive.hits} />
            <StatRow
              label="Doubles"
              value={teams[selectedTeam].offensive.doubles}
            />
            <StatRow
              label="Triples"
              value={teams[selectedTeam].offensive.triples}
            />
            <StatRow
              label="Home Runs"
              value={teams[selectedTeam].offensive.homeRuns}
            />
            <StatRow label="RBI" value={teams[selectedTeam].offensive.rbi} />
            <StatRow
              label="Walks"
              value={teams[selectedTeam].offensive.walks}
            />
            <StatRow
              label="Strikeouts"
              value={teams[selectedTeam].offensive.strikeouts}
            />
            <StatRow
              label="Stolen Bases"
              value={teams[selectedTeam].offensive.stolenBases}
              hidden={true}
            />
            <StatRow
              label="AVG"
              value={teams[selectedTeam].offensive.avg}
              hidden={true}
            />
            <StatRow
              label="OBP"
              value={teams[selectedTeam].offensive.obp}
              hidden={true}
            />
            <StatRow
              label="SLG"
              value={teams[selectedTeam].offensive.slg}
              hidden={true}
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold pl-4">Defensive Stats</h2>
          <div className="bg-muted p-4 rounded-md">
            <StatRow
              label="IP"
              value={teams[selectedTeam].defensive.inningsPitched}
            />
            <StatRow label="Hits" value={teams[selectedTeam].defensive.hits} />
            <StatRow label="Runs" value={teams[selectedTeam].defensive.runs} />
            <StatRow
              label="Earned Runs"
              value={teams[selectedTeam].defensive.earnedRuns}
            />
            <StatRow
              label="Walks"
              value={teams[selectedTeam].defensive.walks}
            />
            <StatRow
              label="Strikeouts"
              value={teams[selectedTeam].defensive.strikeouts}
            />
            <StatRow
              label="HR Allowed"
              value={teams[selectedTeam].defensive.homeRunsAllowed}
            />
            <StatRow
              label="Batters Faced"
              value={teams[selectedTeam].defensive.battersFaced}
            />
            <StatRow
              label="ERA"
              value={teams[selectedTeam].defensive.era}
              hidden={true}
            />
            <StatRow
              label="WHIP"
              value={teams[selectedTeam].defensive.whip}
              hidden={true}
            />
            <StatRow
              label="K/9"
              value={teams[selectedTeam].defensive.strikeoutsPer9}
              hidden={true}
            />
            <StatRow
              label="H/9"
              value={teams[selectedTeam].defensive.hitsPer9}
              hidden={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoGrid() {
  const gameImages = [game1, game2, game3, game4, game5, game6];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {gameImages.map((image, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg shadow-md flex items-center justify-center w-full max-w-48 max-h-48 2xl:max-w-64 2xl:max-h-64 mb-8 overflow-hidden cursor-pointer"
        >
          <img
            src={image}
            alt={`Game ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 p-6 flex flex-col items-center">
        <div
          className="text-red-500 font-bold text-xl mb-6 cursor-pointer"
          onClick={() => setScreen("dashboard")}
        >
          SF
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setScreen("dashboard")}
          >
            <CalendarIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setScreen("dashboard")}
          >
            <MapPinIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setScreen("dashboard")}
          >
            <BookmarkIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setScreen("dashboard")}
          >
            <MessageSquareIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setScreen("dashboard")}
          >
            <SettingsIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center bg-gray-800 rounded-lg py-2 pl-2 w-96 h-10">
            <SearchIcon className="text-gray-400" />
            <Input
              type="text"
              placeholder="Search by date, venue, friends, etc."
              className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 h-full"
            />
            <Button className="bg-red-500 hover:bg-red-600">Search</Button>
          </div>
          <div className="flex items-center space-x-2 gap-4">
            <div className="flex items-center space-x-2">
              <img
                src={friend1}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>Joe</span>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Upload
              <UploadIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Main content wrapper */}
        {screen === "dashboard" ? (
          <>
            <div className="flex space-x-8 flex-1 mt-6">
              <div className="flex-1 flex flex-col space-y-6">
                {/* Your Games Section */}
                <section className="flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">Your Games</h2>
                  <div className="flex mb-4">
                    <Button variant="ghost" className="text-red-500 pl-0">
                      All
                    </Button>
                    <Button variant="ghost">2024</Button>
                    <Button variant="ghost">2023</Button>
                    <Button variant="ghost">2022</Button>
                  </div>
                  <div className="flex h-[calc(100%+2rem)] justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center px-2 mr-4 h-auto"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </Button>
                    <div className="flex justify-between overflow-x-auto h-full flex-1">
                      {[
                        {
                          date: "09/08/2022",
                          result: "W",
                          team1: "Yankees",
                          team1Logo: yankeesLogo,
                          team2: "Orioles",
                          team2Logo: oriolesLogo,
                          image: game1,
                        },
                        {
                          date: "07/15/2023",
                          result: "L",
                          team1: "Yankees",
                          team1Logo: yankeesLogo,
                          team2: "Dodgers",
                          team2Logo: dodgersLogo,
                          image: game2,
                        },
                        {
                          date: "05/22/2023",
                          result: "W",
                          team1: "Yankees",
                          team1Logo: yankeesLogo,
                          team2: "Red Sox",
                          team2Logo: redSoxLogo,
                          image: game3,
                        },
                        {
                          date: "06/30/2023",
                          result: "L",
                          team1: "Yankees",
                          team1Logo: yankeesLogo,
                          team2: "Mets",
                          team2Logo: metsLogo,
                          image: game4,
                        },
                        {
                          date: "08/12/2023",
                          result: "W",
                          team1: "Yankees",
                          team1Logo: yankeesLogo,
                          team2: "Phillies",
                          team2Logo: philliesLogo,
                          image: game5,
                        },
                      ].map((game, index) => (
                        <Card
                          key={index}
                          className="w-48 flex-shrink-0 bg-gray-800 h-full last:hidden 2xl:last:block cursor-pointer border-none"
                          onClick={() => setScreen("game")}
                        >
                          <CardContent className="p-4 h-full flex flex-col justify-between">
                            <div className="w-full h-24 bg-gray-600 rounded-lg mb-2">
                              <img
                                src={game.image}
                                alt={`Game ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <img
                                src={game.team1Logo}
                                alt={game.team1}
                                className="w-8 h-8 rounded-full object-contain"
                              />
                              <span className="font-semibold">vs</span>
                              <img
                                src={game.team2Logo}
                                alt={game.team2}
                                className="w-8 h-8 rounded-full object-contain"
                              />
                            </div>
                            <div className="flex justify-between items-center px-1 mt-1">
                              <p className="text-sm text-gray-400">
                                {game.date}
                              </p>
                              <span className="text-xl font-bold">
                                {game.result}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center px-2 h-auto ml-4"
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </Button>
                  </div>
                </section>

                <div className="flex space-x-10 flex-1">
                  {/* Overview Section */}
                  <section className="flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <Card className="bg-gray-800 flex-1 border-none">
                      <CardContent className="p-4 grid grid-cols-2 gap-4 h-full">
                        <StatCard
                          icon={MapPinIcon}
                          title="Venues Visited"
                          value="4"
                        />
                        <StatCard
                          icon={AwardIcon}
                          title="Home Runs Seen"
                          value="29"
                        />
                        <StatCard
                          icon={TrophyIcon}
                          title="Runs Seen"
                          value="133"
                        />
                        <StatCard
                          icon={CrownIcon}
                          title="Strikeouts Seen"
                          value="73"
                        />
                      </CardContent>
                    </Card>
                  </section>

                  {/* Your Top Players Section */}
                  <section className="flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold mb-4">
                      Your Top Players
                    </h2>
                    <div className="flex-1 flex flex-col justify-between overflow-y-auto">
                      {/* Top player card */}
                      <Card className="bg-gray-800 border-none">
                        <CardContent className="px-2 py-6 flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                            <img
                              src={judge}
                              alt="Aaron Judge"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold text-lg">Aaron Judge</p>
                            <p className="text-sm text-gray-400">
                              In-Person Batting Avg:{" "}
                              <span className="text-white font-bold">.311</span>
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-xl">12</p>
                            <p className="text-xs text-gray-400">times seen</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Other top players */}
                      {[
                        { name: "Anthony Rizzo", image: rizzo, seen: 12 },
                        { name: "Giancarlo Stanton", image: stanton, seen: 10 },
                        { name: "Juan Soto", image: soto, seen: 8 },
                        { name: "Gerrit Cole", image: cole, seen: 6 },
                      ].map((player, index) => (
                        <Card
                          key={index}
                          className={`bg-gray-800 border-none ${
                            index > 2 ? "hidden 2xl:block" : ""
                          }`}
                        >
                          <CardContent className="p-2 flex items-center space-x-2">
                            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                              <img
                                src={player.image}
                                alt={player.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <p className="font-semibold">{player.name}</p>
                              <p className="text-sm text-gray-400">
                                In-Person Batting Avg:{" "}
                                <span className="text-white font-bold">
                                  .{280 + index * 5}
                                </span>
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">{player.seen}</p>
                              <p className="text-xs text-gray-400">
                                times seen
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Right column: Games Summary and Tickets */}
              <div className="w-1/4 flex flex-col space-y-6">
                {/* Games Summary */}
                <Card className="bg-gray-800 border-none">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                      <h3 className="font-semibold text-xl">Attended</h3>
                      <p className="text-4xl font-bold">26</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center items-center mt-2 gap-4">
                        <span className="text-2xl">16</span>
                        <span className="text-gray-400">-</span>
                        <span className="text-2xl">10</span>
                      </div>
                      <p className="text-gray-400">When You're There</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Memorable Moments Section */}
                <section className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Memorable Moments</h2>
                    <Button variant="link" className="text-red-500">
                      View All
                    </Button>
                  </div>
                  <Card className="bg-gray-800 flex-1 border-none">
                    <CardContent className="p-4 space-y-4 h-full overflow-y-auto">
                      <h3 className="font-semibold text-xl">2024</h3>
                      {[
                        {
                          day: 16,
                          month: "May",
                          place: "Yankee Stadium",
                          moment: "Aaron Judge's 100th HR",
                        },
                        {
                          day: 11,
                          month: "Jun",
                          place: "Yankee Stadium",
                          moment: "Giancarlo Stanton's Walkoff HR",
                        },
                        {
                          day: 22,
                          month: "Aug",
                          place: "Wrigley Field",
                          moment: "Carlos Rodón's No Hitter",
                        },
                      ].map((moment, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-12 h-12 rounded-lg shadow-md flex flex-col items-center justify-center bg-gray-600">
                            <div className="text-xl font-bold">
                              {moment.day}
                            </div>
                            <div className="text-sm uppercase">
                              {moment.month}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">{moment.place}</p>
                            <p className="text-sm text-gray-400">
                              {moment.moment}
                            </p>
                          </div>
                        </div>
                      ))}
                      <h3 className="font-semibold text-xl mt-4">2023</h3>
                      {[
                        {
                          day: 3,
                          month: "Apr",
                          place: "Yankee Stadium",
                          moment: "Gerrit Cole's 15 K Complete Game",
                        },
                        {
                          day: 28,
                          month: "Jul",
                          place: "Fenway Park",
                          moment: "Aaron Judge's 500ft HR vs Red Sox",
                        },
                      ].map((moment, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-12 h-12 rounded-lg shadow-md flex flex-col items-center justify-center bg-gray-600">
                            <div className="text-xl font-bold">
                              {moment.day}
                            </div>
                            <div className="text-sm uppercase">
                              {moment.month}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">{moment.place}</p>
                            <p className="text-sm text-gray-400">
                              {moment.moment}
                            </p>
                          </div>
                        </div>
                      ))}
                      <h3 className="font-semibold text-xl mt-4 hidden 2xl:block">
                        2022
                      </h3>
                      {[
                        {
                          day: 17,
                          month: "May",
                          place: "Citi Field",
                          moment: "Aaron Judge's 2 HR Game vs Mets",
                        },
                        {
                          day: 9,
                          month: "Sep",
                          place: "Yankee Stadium",
                          moment: "Aaron Judge's 60th HR of the Season",
                        },
                      ].map((moment, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 hidden 2xl:flex"
                        >
                          <div className="w-12 h-12 rounded-lg shadow-md flex flex-col items-center justify-center bg-gray-600">
                            <div className="text-xl font-bold">
                              {moment.day}
                            </div>
                            <div className="text-sm uppercase">
                              {moment.month}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">{moment.place}</p>
                            <p className="text-sm text-gray-400">
                              {moment.moment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col flex-1 mt-6 overflow-hidden">
            <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
              {/* "Ticket" Card */}
              <div className="flex w-full overflow-hidden rounded-2xl shadow-lg relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>

                {/* Overlay to ensure content visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content */}
                <div className="flex w-full relative z-10">
                  {/* Left section */}
                  <div className="flex flex-col justify-between p-6 text-white w-1/4 border-r border-white border-opacity-20">
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full mb-2 flex items-center justify-center">
                          <img
                            src={yankeesLogo}
                            alt="Yankees Logo"
                            className="w-24 h-24 rounded-full mb-2 flex items-center justify-center"
                          />
                        </div>
                        <div className="text-lg font-medium">NYY</div>
                      </div>
                      <div className="text-4xl font-semibold">v</div>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full mb-2 flex items-center justify-center">
                          <img
                            src={dodgersLogo}
                            alt="Dodgers Logo"
                            className="w-24 h-24 rounded-full mb-2 flex items-center justify-center"
                          />
                        </div>
                        <div className="text-lg font-medium">LAD</div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between mt-2">
                      <div className="text-sm font-semibold">
                        Yankee Stadium
                      </div>
                      <div className="text-sm  text-gray-400">
                        4:00PM ET · 10/22/2024
                      </div>
                    </div>
                  </div>

                  {/* Right section */}
                  <div className="flex flex-col flex-1 p-6 items-center justify-between text-white">
                    <div className="flex items-center w-2/3 justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold">Yankees</div>
                        <div className="text-4xl font-bold">5</div>
                      </div>
                      <LoaderPinwheel />
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold">Dodgers</div>
                        <div className="text-4xl font-bold">3</div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <div>Weather: </div>
                          <div>75°F</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>Attendance: </div>
                          <div>47,329</div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <div>Seat Info: </div>
                          <div>Section 203, Row 7</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>Game Length: </div>
                          <div>3h 12m</div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <div>Strikeouts: </div>
                          <div>17</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>Home Runs: </div>
                          <div>3</div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <div>Errors: </div>
                          <div>1</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>Stolen Bases: </div>
                          <div>2</div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div>With:</div>
                        <div className="flex items-center gap-4">
                          <img
                            src={friend1}
                            alt="Friend 1"
                            className="w-8 h-8 rounded-full cursor-pointer"
                          />
                          <img
                            src={friend1}
                            alt="Friend 2"
                            className="w-8 h-8 rounded-full cursor-pointer"
                          />
                          <img
                            src={friend1}
                            alt="Friend 3"
                            className="w-8 h-8 rounded-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom section */}
              <div className="flex-1 flex w-full overflow-hidden">
                {/* Detailed Stats */}
                <div className="w-2/5 overflow-y-auto pr-4">
                  <StatsSection />
                </div>

                {/* picture / videos of the game */}
                <div className="w-3/5">
                  <PhotoGrid />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
