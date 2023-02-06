
export class Task{
    constructor(

       private id: string, 
       private title: string, 
       private description: string, 
       private createdAt: string, 




    ){}

    public getId(): string{
        return this.id
    }

    public setId(value: string ): void{
        this.id = value
    }

    public getTitle(): string{
        return this.title
    }

    public setTitle(value : string): void{
        this.title = value
    }

    public getDescription(): string{
        return this.description
    }

    public setDescription(value : string): void{
        this.description = value
    }

    public getCreateAt(): string{
        return this.createdAt
    }

    public setCreateAt(value : string): void{
        this.createdAt = value
    }



}