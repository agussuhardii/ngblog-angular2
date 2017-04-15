import {UserModel} from "./user-model";
export class ArticleModel {

  private id:string;
  private title:string;
  private article:string;
  private status:string;
  private active:number;
  private userNameChange:string;
  private localIpChange:string;
  private publicIpChange:string;
  private operatingSystemChange:string;
  private informationChange:string;
  private hostNameChange:string;
  private browserChange:string;
  private createDate:Date;
  private updateDate:Date;
  private userName:UserModel;
  private userAccessList:UserModel;
  private onEdit:boolean;


  constructor(id: string, title: string, article: string, status: string, active: number, userNameChange: string, localIpChange: string, publicIpChange: string, operatingSystemChange: string, informationChange: string, hostNameChange: string, browserChange: string, createDate: Date, updateDate: Date, userName: UserModel, userAccessList: UserModel, onEdit: boolean) {
    this.id = id;
    this.title = title;
    this.article = article;
    this.status = status;
    this.active = active;
    this.userNameChange = userNameChange;
    this.localIpChange = localIpChange;
    this.publicIpChange = publicIpChange;
    this.operatingSystemChange = operatingSystemChange;
    this.informationChange = informationChange;
    this.hostNameChange = hostNameChange;
    this.browserChange = browserChange;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.userName = userName;
    this.userAccessList = userAccessList;
    this.onEdit = onEdit;
  }
}
