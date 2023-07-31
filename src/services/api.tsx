const URL_API = `http://localhost:3000/user/`;
const ACTIONS = {
  ACTIVITY: `activity`,
  AVERAGE_SESSIONS: `average-sessions`,
  PERFORMANCE: `performance`
}

// TODO : abort controller !!!

class Api {

  static async getUser(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
    return await fetch(`${URL_API}${id}`)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
        throw new Error("pas trouvé")
      })
      .then(r => resolve(r))
      .catch(reject)
  }

  static async getUserActivity(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
    return await fetch(`${URL_API}${id}/${ACTIONS.ACTIVITY}`)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
        throw new Error("pas trouvé")
      })
      .then(r => resolve(r))
      .catch(reject)
  }

  static async getUserAverageSession(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
    return await fetch(`${URL_API}${id}/${ACTIONS.AVERAGE_SESSIONS}`)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
        throw new Error("pas trouvé")
      })
      .then(r => resolve(r))
      .catch(reject)
  }

  static async getUserPerformance(id: number, resolve: (m: any) => void, reject: (m: any) => void) {
    return await fetch(`${URL_API}${id}/${ACTIONS.PERFORMANCE}`)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
        throw new Error("pas trouvé")
      })
      .then(r => resolve(r))
      .catch(reject)
  }

}

export { Api }
