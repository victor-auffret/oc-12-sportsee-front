const URL_API = `http://localhost:3000/user/`;
const ACTIONS = {
 ACTIVITY: `activity`,
 AVERAGE_SESSIONS: `average-sessions`,
 PERFORMANCE: `performance`
}

// TODO : abort controller !!!

class Api {

 static async getUser(id: number, setUser: (u: any) => void) {
  await fetch(`${URL_API}${id}`)
   .then(r => r.json())
   .then(setUser)
 }

 static async getUserActivity(id: number, setActivity: (u: any) => void) {
  await fetch(`${URL_API}${id}/${ACTIONS.ACTIVITY}`)
   .then(r => r.json())
   .then(setActivity)
 }

 static async getUserAverageSession(id: number, setAverageSession: (u: any) => void) {
  await fetch(`${URL_API}${id}/${ACTIONS.AVERAGE_SESSIONS}`)
   .then(r => r.json())
   .then(setAverageSession)
 }

 static async getUserPerformance(id: number, setPerformance: (u: any) => void) {
  await fetch(`${URL_API}${id}/${ACTIONS.PERFORMANCE}`)
   .then(r => r.json())
   .then(setPerformance)
 }

}