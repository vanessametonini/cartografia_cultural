export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: string;
    ageRange: string;
    education: string;
    avatarId: string;
    categoryId: string
    confirmToken: string;
    recoverToken: string;
}
