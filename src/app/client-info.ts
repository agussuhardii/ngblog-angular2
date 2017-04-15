export class ClientInfo {
  /*static userName:string = localStorage.getItem("username");
  static localIpChange:string = localStorage.getItem("localIpChange");
  static operatingSystemChange:string = localStorage.getItem("operatingSystemChange");
  static hostNameChange:string = localStorage.getItem("hostNameChange");
  static publicIpChange:string = localStorage.getItem("publicIpChange");
  static browserChange:string = localStorage.getItem("browserChange");*/




    static userName:string = localStorage.getItem("currentUser");
   static localIpChange:string = localStorage.getItem("ip");
   static operatingSystemChange:string = localStorage.getItem("os");
   static hostNameChange:string = "undefined";
   static publicIpChange:string = "undefined";
   static browserChange:string = localStorage.getItem("browser");
  static macAddressChange:string= localStorage.getItem("ip");
}
