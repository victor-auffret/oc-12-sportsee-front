import {
 USER_MAIN_DATA,
 USER_ACTIVITY,
 USER_AVERAGE_SESSIONS,
 USER_PERFORMANCE
} from "./data"

class MockApi {

 static async getUser(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
  return await new Promise(() => {
   const data = USER_MAIN_DATA.find(u => Number(u.id) == Number(id))
   return (data) ? resolve({ data }) : reject("error mock getUser")
  })
  /*
  if (rep) {
   return Promised(rep).then(resolve)
  }
  else {
   reject("error mock getUser")
  }*/
 }

 static async getUserActivity(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
  return await new Promise(() => {
   const data = USER_ACTIVITY.find(u => u.userId == id)
   return (data) ? resolve({ data }) : reject("error mock getUserActivity")
  })
  /*
  const rep = USER_ACTIVITY.find(u => u.userId == id)
  if (rep) {
   return Promised(rep).then(resolve)
  }
  else {
   reject("error mock getUserActivity")
  }*/
 }

 static async getUserAverageSession(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
  return await new Promise(() => {
   const data = USER_AVERAGE_SESSIONS.find(u => u.userId == id)
   return (data) ? resolve({ data }) : reject("error mock getUserAverageSession")
  })
  /*
  const rep = USER_AVERAGE_SESSIONS.find(u => u.userId == id)
  if (rep) {
   return Promised(rep).then(resolve)
  }
  else {
   reject("error mock getUserAverageSession")
  }*/
 }

 static async getUserPerformance(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
  return await new Promise(() => {
   const data = USER_PERFORMANCE.find(u => u.userId == id)
   return (data) ? resolve({ data }) : reject("error mock getUserPerformance")
  })
  /*
  const rep = USER_PERFORMANCE.find(u => u.userId == id)
  if (rep) {
   return Promised(rep).then(resolve)
  }
  else {
   reject("error mock getUserPerformance")
  }*/
 }

}

export { MockApi }
