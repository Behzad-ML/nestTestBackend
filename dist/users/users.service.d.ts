import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(createUserDto: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
