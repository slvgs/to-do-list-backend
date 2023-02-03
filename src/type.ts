export interface UsersDB{
    id: string,
    name: string, 
    email: string,
    password: string, 
    created_at: string
}

export interface TasksDB{
    id: string, 
    title: string, 
    description: string, 
    create_at: string, 
}

export interface RegisterDB{

    userId: string,
    taskID: string
   
    
}