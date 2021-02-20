import {Entity, Column, Generated } from 'typeorm'


@Entity()
export class User {
   @Generated()
   @Column()
        id: number
    
   @Column({nullable:true})
        name: string;
    
    
   @Column({nullable:true})
        nin: string 

    @Column({nullable:true})    
        email:string

}
