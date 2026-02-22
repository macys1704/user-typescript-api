import { STATUS_CODES } from "node:http";
import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersControllers implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) {};

    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();
                return {
                    statusCode: 200,
                    body: users,
                }
        } catch (error) {
            return {
                stausCode: 500,
                body: "falta inserir"
            }
            
        }

        
    };
};