import { KeyDataJson, SessionActivityJson, UserInfosJson } from "./json";

interface SessionFormated extends SessionActivityJson {
 length: number
}

interface RadarFormated {
 cardio: number,
 energy: number,
 endurance: number,
 strength: number,
 speed: number,
 intensity: number
}

interface UserFormated {
 id: number,
 infos: UserInfosJson,
 alimentation: KeyDataJson,
 score: number,
 sessions: SessionFormated[],
 radar: RadarFormated
}

export type { RadarFormated, UserFormated, SessionFormated }
