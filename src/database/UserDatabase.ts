import { UsersDB } from "../type";
import { BaseDataBase } from "./BaseDataBase";


//Essa classe UserDatabase busca a extensão de BaseDatabase que acessa o banco de dados SQL

export class UserDatabase extends BaseDataBase{

    public static TABLE_USERS = "users"

    public async findUsers(q: string | undefined){
         let usersDB


         if(q){
            const result : UsersDB[] = await BaseDataBase
            .connection(UserDatabase.TABLE_USERS)
            


            usersDB = result
         }else {
            const result: UsersDB[] = await BaseDataBase
            .connection(UserDatabase.TABLE_USERS)

            usersDB = result

         }

         return usersDB

    }


    public async findUserId(id: string){

        const [userDB]: UsersDB[] | undefined[] = await BaseDataBase
        .connection(UserDatabase.TABLE_USERS)
        .where({id})

        return userDB

    }



    public async insertUsers(newUsers: UsersDB){
        await BaseDataBase
        .connection(UserDatabase.TABLE_USERS)
        .insert(newUsers)
    }

}