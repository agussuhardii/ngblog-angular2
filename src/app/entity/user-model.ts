export class UserModel {

  private userName:string;
  private password:string;
  private description:string;
  private login:boolean;
  private startLogin: Date;
  private stopLogin: Date;

  macAddressChange:string;
  localIpChange:string;


  constructor(userName: string, password: string, description: string, login: boolean, startLogin: Date, stopLogin: Date, macAddressChange: string, localIpChange: string) {
    this.userName = userName;
    this.password = password;
    this.description = description;
    this.login = login;
    this.startLogin = startLogin;
    this.stopLogin = stopLogin;
    this.macAddressChange = macAddressChange;
    this.localIpChange = localIpChange;
  }
}
