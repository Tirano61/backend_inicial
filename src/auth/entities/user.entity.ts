import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('text', { unique: true })
	email: string;

	@Column('text', {
		select: false,
	})
	password: string;

	@Column('text')
	fullName: string;

	@Column('bool', {
		default: true
	})
	isActive: boolean;

	@Column('text', {
		array: true,
		default: ['user']
	})
	roles: string[];


	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: Date;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	updated_at: Date;


	@BeforeInsert()
	checkFieldsBeforeInsert() {
		this.email = this.email.toLocaleLowerCase().trim();
	}

	@BeforeUpdate()
	checkFieldsBeforeUpdate() {
		this.checkFieldsBeforeInsert();
	}
}


