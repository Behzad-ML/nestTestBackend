"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                "id": 1,
                "name": "Mohammad Khan",
                "email": "mohammad_khan@gmail.com",
                "role": "INTERN"
            },
            {
                "id": 2,
                "name": "Ali Ahmed",
                "email": "ali_ahmed@gmail.com",
                "role": "INTERN"
            },
            {
                "id": 3,
                "name": "Fatima Siddiqui",
                "email": "fatima_siddiqui@gmail.com",
                "role": "ENGINEER"
            },
            {
                "id": 4,
                "name": "Aisha Malik",
                "email": "aisha_malik@egmail.com",
                "role": "ENGINEER"
            },
            {
                "id": 5,
                "name": "Usman Khan",
                "email": "usman_khan@egmail.com",
                "role": "ADMIN"
            }
        ];
    }
    findAll(role) {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0)
                throw new common_2.NotFoundException('User Role Not Found');
            return rolesArray;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new common_2.NotFoundException('User Not Found');
        return user;
    }
    create(createUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map