import { useEffect, useReducer } from "react";
import { AuthMock } from "../../adapter/service/auth/auth_mock";
import { AppInteractor } from "../../domain/interactor/app_interactor";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import { AppModel } from "../../domain/entity/app_model";

import logo from "../../assets/logo.png";

const authService = new AuthMock();
const appInteractor = new AppInteractor();
const authInteractor = new AuthInteractor(authService, appInteractor);

type State = {
  payload?: AppModel;
  loading: boolean;
  error?: string;
};

type Action =
  | { type: "request" }
  | { type: "success"; payload: AppModel }
  | { type: "failure"; error: string };

function reducer(state: any, action: any) {
  //
}

function LoginPage() {
  const [state, dispatch] = useReducer(reducer, {});

  async function init() {
    await authInteractor.login({ username: "", password: "" });

    const conf = appInteractor.config();

    console.log(conf);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className="flex flex-col h-screen justify-center 
items-center px-6"
    >
      <div className="flex flex-col w-full max-w-sm items-center space-y-10 mb-6">
        <img src={logo} alt="PPA LOGO" className="h-32" />
        <p className="text-2xl md:text-3xl font-semibold text-onBackground">
          Login Karyawan
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 mb-6 w-full max-w-sm">
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
        />
        <button className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full disabled:bg-background focus:bg-primaryDarker">
          LOGIN
        </button>
        <p className="text-onBackground text-sm">Atau</p>
        <p className="text-onBackground">
          Klik di sini untuk masuk sebagai
          <a href="/guest" className="text-primary font-bold">
            {" "}
            tamu
          </a>
        </p>
      </div>
    </div>
  );
}

export { LoginPage };
