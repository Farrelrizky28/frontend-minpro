import { headers } from 'next/dist/client/components/headers'
import axios from '../../config/endpoint'

const getCurriculum = () => {
    return axios.get(`curriculum/lala`)
}

const createSection = async (data: any) => {
  try {
    console.log("apimethod",data);
    const result = await axios.post('/curriculum/section', data);
    return result;
  } catch (error) {
    throw error;
  }
};

const getCurriculumById = (id:any) =>{
    return axios.get(`curriculum/lele/${id}`)
}
const createCurriculum = (data: any) => {
    return axios.post(`curriculum/tambah`, data, { headers: { 'Content-Type': 'multipart/form-data' } });

}
const updateCurriculum = (data: any) => {
    console.log("kontol", data);
    let id = data.get("prog_entity_id");
    console.log("IDDDD", typeof(id));
    console.log("IDDDD", (id));
    return axios.patch(`curriculum/koko/${+id}`,data, { headers: { 'Content-Type': 'multipart/form-data' } });
}


const getMaster = () => {
    return axios.get(`master/category`)
}

const getCurrNum = () => {
    return axios.get(`curriculum/curr`)
}

const getUserEmployee = () => {
    return axios.get(`/users`  )
}

const createSectionDetail = (id:any, data:any) =>{
    return axios.post(`curriculum/section_detail/${id}`,data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    };


      const sectionMerge = async () => {
        try {
          const response = await axios.get(`/curriculum/getMerged`);
          console.log("abg",response.data)
          return response;
        } catch (error) {
          throw error;
        }
      };
      
      const sectionMergeUp = async (id: any) => {
        try {
          console.log(id);
          const response = await axios.get(`/program-entity/getMergedUp/${id}`);
          console.log('abg', response.data.mergedData[0]);
          return response;
        } catch (error) {
          throw error;
        }
      };

      const deleteCurriculum = (data: any) => {
        console.log('apiMethod', data);
        const id: number = +data.id;
        return axios.patch(`/curriculum/delete/${id}`);
      };
export default { getCurriculum, getCurriculumById ,createCurriculum, getMaster, getCurrNum, getUserEmployee , updateCurriculum, createSection, createSectionDetail, sectionMerge , sectionMergeUp, deleteCurriculum}