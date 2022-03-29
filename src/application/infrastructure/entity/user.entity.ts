import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('userdetails')
export class UserEntity extends BaseEntity{
  @Column({ name: 'email', update: false })
  email: string;
  @Column({ name: 'password' })
  password: string;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'enabled' })
  enabled: boolean;
}