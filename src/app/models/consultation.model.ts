import {User} from "./user.model";

export interface Consultation {
  id: number;
  user: User;
  userId: number;
  consultationDate: string;
  consultationType: string;
  consultationCode: string;
  consultationDateReference: string;
  consultationInterval: string;
}
