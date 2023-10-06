import { useEffect, useState } from 'react';
import { getFiles } from '../utilities/utils';
interface FilesData {
  id: number;
  location: string;
  sources_of_water: number;
  proximity_to_industries: string;
  number_of_garages_in_area: number;
  proximity_to_dumpsite: number;
  presence_of_open_sewage: number;
  past_cases_of_lead_poisoning: number;
  women_and_children_population: number;
  file_hash: string;
}
const useGetFiles = () => {
  const [files, setFiles] = useState<FilesData[]>([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fetchedFiles = await getFiles();
        setFiles(fetchedFiles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFiles();
  }, []);
  return { files };
};
export default useGetFiles;