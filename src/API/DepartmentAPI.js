import { api } from "./api";


const getListDepartmentAPI = () => {
  return api("GET", "listDepartment/", null);
};


// export
export  {getListDepartmentAPI} ;
