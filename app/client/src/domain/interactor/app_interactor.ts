import type { AppModel } from "../entity/app_model";

class AppInteractor {
  config(): AppModel | null {
    const config = sessionStorage.getItem("config");

    if (config != null) {
      const results = JSON.parse(config);

      return results;
    }

    return null;
  }

  saveConfig(appModel: AppModel): void {
    sessionStorage.setItem("config", JSON.stringify(appModel));
  }

  clearConfig(): void {
    sessionStorage.clear();
  }
}

export { AppInteractor };
