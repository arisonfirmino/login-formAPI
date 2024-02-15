import prismaClient from "../prisma";

interface CreateUserServiceProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, surname, email, password }: CreateUserServiceProps) {
    const user = await prismaClient.user.create({
      data: {
        name,
        surname,
        email,
        password,
      },
    });

    return user;
  }
}

export { CreateUserService };
