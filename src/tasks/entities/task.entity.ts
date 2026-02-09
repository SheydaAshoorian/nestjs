import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity('tasks')

export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true})
    description: string;

    @Column({default: 'OPEN'})
    status: string;

    @CreateDateColumn()
    createdAt: Date;

}




