import type { AuthModel } from "../../../domain/entity/auth_model";
import type { AuthService } from "../../../domain/port/service/auth_service";

class AuthApi implements AuthService {
  async login(option: AuthModel): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { AuthApi };
