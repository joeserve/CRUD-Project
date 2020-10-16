import { UserId } from 'src/app/_models/user';

export type StaffId = string;
export interface Staff{
    id: StaffId,
    userId : UserId
    firstname: string
    lastname: string
    
} 
