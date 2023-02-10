import type { AuthModel } from "../../entity/auth_model";

abstract class AuthService {
  abstract login(option: AuthModel): Promise<string | null>;
  abstract logout(): Promise<void>;
}

export { type AuthService };
