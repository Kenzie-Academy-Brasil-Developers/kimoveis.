import { Column,  CreateDateColumn,  Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";
import Schedule from "./Schedule.entity";
import Address from "./Address.entity";
import Category from "./Category.entity";

@Entity('RealEstates')
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({default:false})
    sold:boolean

    @Column("decimal",{precision:12, scale:2})
    value:number | string

    @Column({})
    size:number

    @CreateDateColumn({type:'date'})
    createAt:string

    @UpdateDateColumn({type:'date'})
    updateAt:string
    
    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedule:Schedule[]

    @OneToOne(() => Address, (Address) => Address.realEstate)
    @JoinColumn()
    address: Address
    
    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category
}