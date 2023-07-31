
interface UserInfosJson {
 firstName: string,
 lastName: string,
 age: number
}

interface KeyDataJson {
 calorieCount: number,
 proteinCount: number,
 carbohydrateCount: number,
 lipidCount: number
}

interface AbstractUserJson {
 id: number,
 userInfos: UserInfosJson,
 keyData: KeyDataJson
}

interface UserJson1 extends AbstractUserJson {
 todayScore: number
}

interface UserJson2 extends AbstractUserJson {
 score: number,
}

// export
type UserJson = UserJson1 | UserJson2;

interface SessionActivityJson {
 day: string,
 kilogram: number,
 calories: number
}

// export
interface UserActivityJson {
 userId: number,
 sessions: SessionActivityJson[]
}

interface UserAverageSessionLengthJson {
 day: number,
 sessionLength: number
}

// export
interface UserAverageSessionJson {
 userId: number,
 sessions: UserAverageSessionLengthJson[]
}

type KindValue = 'cardio' | 'energy' | 'endurance' | 'strength' | 'speed' | 'intensity';

type KindKey = 1 | 2 | 3 | 4 | 5 | 6;

interface KindJson {
 1: KindValue,
 2: KindValue,
 3: KindValue,
 4: KindValue,
 5: KindValue,
 6: KindValue
}

interface KindDataJson {
 value: number,
 kind: KindKey
}

// export
interface UserPerformanceJson {
 userId: number,
 kind: KindJson,
 data: KindDataJson[]
}

export type { UserInfosJson, KeyDataJson, UserJson, SessionActivityJson, UserActivityJson, UserAverageSessionJson, KindValue, KindKey, KindJson, UserPerformanceJson };
