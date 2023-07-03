import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { InfosData } from "./infos-data-list.model";
import { Profile } from "./profile.model";
import { Skill } from "./skills-list.model";

export interface DataPerson {
  about: string;
  profile: Profile;
  skillsList: Skill[];
  infosDataList: InfosData[];
  address: Address;
  contact: Contact;
}
