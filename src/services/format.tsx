import { UserActivityJson, UserAverageSessionJson, UserJson, UserPerformanceJson } from "../modeles/json";
import { RadarFormated, UserFormated } from "../modeles/user";

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

export { formatUser }
