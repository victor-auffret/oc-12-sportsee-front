import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//
import type { UserFormated } from '../../modeles/user'
import { UserActivityJson, UserAverageSessionJson, UserJson, UserPerformanceJson } from '../../modeles/json';
//
import { GraphContainer } from '../graph-container';
import { formatUser } from '../../services/format';

// pour désactiver les moock il faut commenter/dé-commanter la ligne correspondante
// import { Api } from '../../services/api';
import { MockApi as Api } from '../../services/mock';

import "./index.css";

interface IProps {
}

interface IParams {
 id: number
}

// TODO : utiliser recoil js pour un user global

const Dashboard: FunctionComponent<IProps> = (_: IProps) => {

 const params: Partial<IParams> = useParams()
 //const logements: Logement[] = useLocations()
 const [userJson, setUserJson] = useState<UserJson | null>(null)
 const [userActivityJson, setUserActivityJson] = useState<UserActivityJson | null>(null)
 const [userAverageSessionJson, setUserAverageSessionJson] = useState<UserAverageSessionJson | null>(null)
 const [userPerformanceJson, setUserPerformanceJson] = useState<UserPerformanceJson | null>(null)

 const [user, setUser] = useState<UserFormated | null>(null)

 const navigate = useNavigate()

 useEffect(() => {
  if (params.id) {
   //console.log("params id ", params.id)
   const redirect = (_: string) => {
    navigate("/404")
   }

   const resolveUser = (v: any) => {
    const userJson = v.data as UserJson
    setUserJson(userJson)
   }
   Api.getUser(params.id, resolveUser, redirect)

   const resolveActivity = (v: any) => {
    const activity = v.data as UserActivityJson
    setUserActivityJson(activity)
   }
   Api.getUserActivity(params.id, resolveActivity, redirect)

   const resolveAverage = (v: any) => {
    const average = v.data as UserAverageSessionJson
    setUserAverageSessionJson(average)
   }
   Api.getUserAverageSession(params.id, resolveAverage, redirect)

   const resolvePerformance = (v: any) => {
    const performance = v.data as UserPerformanceJson
    setUserPerformanceJson(performance)
   }
   Api.getUserPerformance(params.id, resolvePerformance, redirect)
  }
 }, [navigate, params.id])


 useEffect(() => {
  // tester graphique vide
  if (userJson != null && userActivityJson != null && userAverageSessionJson != null && userPerformanceJson != null) {
   const userOk = formatUser(userJson, userActivityJson, userAverageSessionJson, userPerformanceJson)
   //console.log("USER OK  : ", userOk)
   setUser(userOk)
  }
 }, [userJson, userActivityJson, userAverageSessionJson, userPerformanceJson])


 return (<main className={`dashboard-container`}>
  <header className={`dashboard-header`}>
   <h1>
    Bonjour <span className={`c-rouge`}>{user?.infos.firstName ?? "inconnu"}</span>
   </h1>
   <h2>
    Félicitation ! Vous avez explosé vos objectifs hier 👏
   </h2>
  </header>

  {user ? <GraphContainer user={user} /> : null}


 </main>)
}

export { Dashboard }
