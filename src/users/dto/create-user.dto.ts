// import * as mongoose from 'mongoose';

import { Category } from "src/categories/schemas/category.schema";


export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: string;
    ageRange: string;
    education: string;
    avatar: string;
    categoryId: string
}
