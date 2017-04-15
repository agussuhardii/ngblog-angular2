import {ArticleModel} from "./article-model";
export class HistoryModel {

  private id:number;
  private newTitle:string;
  private oldTitle:string;
  private newArticle:string;
  private oldArticle:string;
  private browserChange:string;
  private hostNameChange:string;
  private informationChange:string;
  private localIpChange:string;
  private publicIpChange:string;
  private operatingSystemChange:string;
  private userNameChange:string;
  private updateDate:Date;
  private article:ArticleModel;


  constructor(id: number, newTitle: string, oldTitle: string, newArticle: string, oldArticle: string, browserChange: string, hostNameChange: string, informationChange: string, localIpChange: string, publicIpChange: string, operatingSystemChange: string, userNameChange: string, updateDate: Date, article: ArticleModel) {
    this.id = id;
    this.newTitle = newTitle;
    this.oldTitle = oldTitle;
    this.newArticle = newArticle;
    this.oldArticle = oldArticle;
    this.browserChange = browserChange;
    this.hostNameChange = hostNameChange;
    this.informationChange = informationChange;
    this.localIpChange = localIpChange;
    this.publicIpChange = publicIpChange;
    this.operatingSystemChange = operatingSystemChange;
    this.userNameChange = userNameChange;
    this.updateDate = updateDate;
    this.article = article;
  }
}
