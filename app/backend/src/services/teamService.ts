import TeamModel from '../models/teamModel';
import ITeam from '../Interfaces/ITeam';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ITeamsModel } from '../Interfaces/ITeamModel';

export default class TeamService {
  constructor(
    private teamModel: ITeamsModel = new TeamModel(),
  ) {}

  public async getAllTeam(): Promise<ServiceResponse<ITeam[]>> {
    const allTeam = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeam };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.FindByPk(id);
    console.log('TEAM SERVICE', team);
    if (team === null) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
