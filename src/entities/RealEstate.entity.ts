import { Column,  CreateDateColumn,  Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";
import Schedule from "./Schedule.entity";
import Address from "./Address.entity";
import Category from "./Category.entity";

@Entity('RealEstates')
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:"boolean", default:false})
    sold:boolean

    @Column({type:"decimal",precision:12, scale:2, default:0})
    value:number | string

    @Column({type:"integer"})
    size:number

    @CreateDateColumn({type:'date'})
    createdAt:string

    @UpdateDateColumn({type:'date'})
    updatedAt:string
    
    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules:Schedule[]

    @OneToOne(() => Address, (Address) => Address.realEstate)
    @JoinColumn()
    address: Address
    
    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category
}