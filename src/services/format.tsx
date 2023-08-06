import { KindValue, UserActivityJson, UserAverageSessionJson, UserJson, UserPerformanceJson } from "../modeles/json";
import { RadarFormated, UserFormated } from "../modeles/user";

// paramètres null valides pour retourner un objet avec certains graphiques vides
function formatUser(
 json: UserJson,
 activity: UserActivityJson,
 average: UserAverageSessionJson,
 performance: UserPerformanceJson
): UserFormated {
 let score: number = 0;
 if ("score" in json) {
  score = json.score;
 }
 if ("todayScore" in json) {
  score = json.todayScore;
 }
 const sessions = activity.sessions.map((v, i) => {
  return {
   ...v,
   length: average.sessions[i]?.sessionLength ?? 0
  }
 }).sort((a, b) => {
  if (a.day < b.day) {
   return -1
  }
  if (a.day > b.day) {
   return 1
  }
  return 0
 })

 let radar: RadarFormated = {
  cardio: 0,
  energy: 0,
  endurance: 0,
  strength: 0,
  speed: 0,
  intensity: 0
 }

 Object.keys(performance.kind).forEach(key => {
  // key: string = 1, 2, 3, 4, 5, 6
  let res = performance.data.find(data => data.kind.toString() == key)
  if (res) {
   radar[performance.kind[res.kind]] = res.value
  }
 })

 return {
  id: json.id,
  infos: json.userInfos,
  alimentation: json.keyData,
  score,
  sessions,
  radar
 };
}

function translateRadar(txt: KindValue | string): string {
 switch (txt) {
  case "cardio": return "Cardio";
  case "endurance": return "Endurance";
  case "energy": return "Energie";
  case "intensity": return "Intensité";
  case "speed": return "Vitesse";
  case "strength": return "Force";
  default: return txt;
 }
}

function makeRadarData(radar: RadarFormated): any {

 const fullMark = 300;
 let data = [];
 for (const [key, value] of Object.entries(radar)) {
  let k = key as KindValue;
  let v = Number(value) as number;
  data.push({
   "subject": translateRadar(k),
   "A": v,
   "fullMark": fullMark
  })
 }
 data = data.reverse()
 return data;
}

export { formatUser, translateRadar, makeRadarData }
