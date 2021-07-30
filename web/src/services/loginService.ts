interface Response {
  data: object | boolean | number | Array<any>,
  error: boolean,
  errorMessage: string
}

type LoginData = {
  name: string,
  lastLoginTime: Date
}

interface LoginResponse extends Response {
  data: LoginData
}

class LoginService {
  constructor() {
  }

  async login (username: string, password: string): LoginResponse {
    return {
      data: {
        name: '郭超凡',
        lastLoginTime: new Date()
      },
      error: false,
      errorMessage: null
    }
  }

  async signup (username: string, password: string): LoginResponse {
    return {
      data: {
        name: '郭超凡',
        lastLoginTime: new Date()
      },
      error: false,
      errorMessage: null
    }
  }

  async logout (): Response {
    return {
      data: true,
      error: false,
      errorMessage: null
    }
  }
}

const loginService = new LoginService()

export default loginService

export {
  loginService
}
