import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/create-user-service";

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, surname, email, password } = request.body as {
      name: string;
      surname: string;
      email: string;
      password: string;
    };

    const userService = new CreateUserService();
    const user = await userService.execute({ name, surname, email, password });

    reply.send(user);
  }
}

export { CreateUserController };
