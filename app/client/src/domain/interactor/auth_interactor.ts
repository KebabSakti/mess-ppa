import type { AuthModel } from "../entity/auth_model";
import type { AuthService } from "../port/service/auth_service";
import type { AppInteractor } from "./app_interactor";

class AuthInteractor {
  private authService: AuthService;
  private appInteractor: AppInteractor;

  constructor(authService: AuthService, appInteractor: AppInteractor) {
    this.authService = authService;
    this.appInteractor = appInteractor;
  }

  async login(option: AuthModel): Promise<void> {
    const results = await this.authService.login(option);

    if (results != null) {
      const savedConfig = this.appInteractor.config();
      const config = { ...savedConfig, auth: results };
      this.appInteractor.saveConfig(config);
    }
  }

  async logout(): Promise<void> {
    const savedConfig = this.appInteractor.config();

    if (savedConfig != null) {
      const config = { ...savedConfig, auth: "" };
      this.appInteractor.saveConfig(config);
    }

    await this.authService.logout();
  }
}

export { AuthInteractor };
