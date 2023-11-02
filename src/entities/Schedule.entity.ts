import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import RealEstate from "./RealEstate.entity";

@Entity('Schedules')
export default class Schedule {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:'date'})
    date:string

    @Column({type:'time'})  
    hour:string

    @ManyToOne(() => User, (user) => user.schedule)
    user: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule)
    realEstate: RealEstate
}