// import { getOrganizations } from "@/app/utilities/utils";
// import { getStageTracking } from "@/app/Utilities/utils";

import { useEffect,useState } from "react";
interface OrgData{
    id:number;
    stage_name:string,
    description:string,
    start_date: string,
    end_date: string,
    organizationName:string,
}
const useGetOrganizations=()=>{
    const [organizations, setOrganization]=useState<OrgData[]>([]);
    useEffect(()=>{
      (async()=>{
        // const organizations=await getStageTracking();
        setOrganization(organizations);
      })();
    },[])
    return {organizations}
}
export default useGetOrganizations