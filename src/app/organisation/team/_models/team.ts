import { Staff, StaffId } from '../staff/_models/staff';

export type TeamId = string;
export interface Team{
    id: TeamId,
    name: string
    staffMembers: Staff[]
    teamLeaderId: StaffId
} 
