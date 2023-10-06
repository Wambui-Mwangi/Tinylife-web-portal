import { useEffect, useState } from "react";
import { getLocations } from "@/app/utilities/utils";
interface MapData {
prediction:string
}
const useGetLocations = (initialMapData : MapData)=>{
  const [locations, setLocations] = useState<MapData>(initialMapData);
  useEffect(()=>{
    (async()=>{
      const location = await getLocations(initialMapData);
      setLocations(location);
    })();
  },[])
  return {locations}
}
export default useGetLocations;