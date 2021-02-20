import {Entity, Column, Generated, Index } from 'typeorm'


@Entity()
export class User {
   @Index()
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
