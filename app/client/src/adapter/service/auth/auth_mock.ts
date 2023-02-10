import type { AuthModel } from "../../../domain/entity/auth_model";
import type { AuthService } from "../../../domain/port/service/auth_service";

class AuthMock implements AuthService {
  async login(option: AuthModel): Promise<string> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<string>((resolve) => {
      const results = "aaksdjaskd123kj123kjkasd";

      resolve(results);
    });
  }

  async logout(): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  }
}

export { AuthMock };
