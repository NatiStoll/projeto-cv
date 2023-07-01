
export interface InfosDataList {
   infosDataList: InfosData[];
  }

  export interface InfosData {
   sectionTitle: string;
   infos: InfosItem[];
 }
 
 export interface InfosItem {
   title: string;
   subTitle: string;
   text: string;
 }