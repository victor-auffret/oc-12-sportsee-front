import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GraphContainer } from '../graph-container';

import type { UserFormated } from '../../modeles/user'

import "./index.css";
import { formatUser } from '../../services/format';
import { UserActivityJson, UserAverageSessionJson, UserJson, UserPerformanceJson } from '../../modeles/json';
import { Api } from '../../services/api';

interface IProps {
}

interface IParams {
 id: number
}

// TODO : utiliser recoil js pour un user global

const Dashboard: FunctionComponent<IProps> = (props: IProps) => {

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
   console.log("params id ", params.id)
   const redirect = () => { navigate("/404") }

   const resolveUser = (v: any) => {
    const userJson = v.data as UserJson
    console.log("userJson", userJson)
    setUserJson(userJson)
   }
   Api.getUser(params.id, resolveUser, redirect)

   const resolveActivity = (v: any) => {
    const activity = v.data as UserActivityJson
    console.log("UserActivityJson", activity)
    setUserActivityJson(activity)
   }
   Api.getUserActivity(params.id, resolveActivity, redirect)

   const resolveAverage = (v: any) => {
    const average = v.data as UserAverageSessionJson
    console.log("UserAverageSessionJson", average)
    setUserAverageSessionJson(average)
   }
   Api.getUserAverageSession(params.id, resolveAverage, redirect)

   const resolvePerformance = (v: any) => {
    const performance = v.data as UserPerformanceJson
    console.log("UserPerformanceJson", performance)
    setUserPerformanceJson(performance)
   }
   Api.getUserPerformance(params.id, resolvePerformance, redirect)
  }
 }, [navigate, params.id])


 useEffect(() => {
  if (userJson != null && userActivityJson != null && userAverageSessionJson != null && userPerformanceJson != null) {
   const userOk = formatUser(userJson, userActivityJson, userAverageSessionJson, userPerformanceJson)
   console.log("USER OK  : ", userOk)
   setUser(userOk)
  }
 }, [userJson, userActivityJson, userAverageSessionJson, userPerformanceJson])


 return (<main className={`dashboard-container`}>
  <header>
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
