import { Injectable } from "@angular/core";
import { Response, Http } from "@angular/http";
import { APP_SERVE_URL } from "../../providers/Constants";
import 'rxjs/add/operator/map';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MineService {
  constructor(
  public http: Http,public httpService: HttpService) {
  }
  
  
  doOut(idcode){
    return this.httpService.get('login/logout/'+idcode).map((res: Response) => res.json());
  }
  
  setRole(type,uid){
         
    return this.httpService.get( 'user/settype?type='+type+'&uid='+uid).map((res: Response) => res.json());
 }
  
  getTask( type ){

  }

  saveinfo ( params ){
    
    return this.httpService.post( 'user/saveinfo',params).map((res: Response) => res.json());

  }

  certify ( params ){
    
    return this.httpService.post( 'user/certify',params).map((res: Response) => res.json());

  }

  getAuth (){
    
    return this.httpService.post( 'user/certifyinfo').map((res: Response) => res.json());

  }

  geCityData() {
    return this.http.get('./assets/data/cityData.json').map((res: Response) => res.json());
  }
  
  geCitys(pid) {
    return this.httpService.get( 'index/area?pid='+pid).map((res: Response) => res.json());
  }

  geSkill() {
    return this.httpService.get( 'user/ywSkill').map((res: Response) => res.json());
  }

  sendcode(url){
      return this.httpService.get( url ).map((res: Response) => res.json());
  }

  getToken(){
    
    return this.http.get( APP_SERVE_URL + 'index/token/66321c572377623b2a9c37f2abcb0a0b').map((res: Response) => res.json());

  }
  
  getUserinfo(){
    return this.httpService.get( 'user/index').map((res: Response) => res.json());

  }

  applyCash(param){
    return this.httpService.posting( 'user/applycash',param ).map((res: Response) => res.json());
  }

  recharge(strings){
    return this.httpService.geting( 'center/balancedoex?'+strings ).map((res: Response) => res.json());
  }


  getHelp(){
    return this.httpService.get( 'help/index' ).map((res: Response) => res.json());
  }

  getAbout(){
    return this.httpService.get( 'help/about' ).map((res: Response) => res.json());
  }


  getCase(param){
    return this.httpService.get( 'user/case',param ).map((res: Response) => res.json());
  }

  getCaseinfo(number){
    return this.httpService.get( 'user/caseinfo/'+number ).map((res: Response) => res.json());
  }

  getOffer(param){
    return this.httpService.get( 'user/offer',param ).map((res: Response) => res.json());
  }

  getDemand( param ){
    return this.httpService.get( 'user/demand' , param ).map((res: Response) => res.json());
  }

  getRecommend( param ){
    return this.httpService.get( 'demand/recommend' , param ).map((res: Response) => res.json());
  }

  getDemandUser( param ){
    return this.httpService.get( 'user/demanduser' , param ).map((res: Response) => res.json());
  }

  getDemandUserDetail( number ){
      return this.httpService.get( 'user/demanduserdetail/'+number).map((res: Response) => res.json());
  }

  cancelUserDemand( number ){
      return this.httpService.get( 'user/canceldemanduser/'+number).map((res: Response) => res.json());
  }

  getRecord( type ){
      return this.httpService.get( 'user/record/'+type).map((res: Response) => res.json());
  }
  
  getDown( param ){
      return this.httpService.get( 'user/mydown',param).map((res: Response) => res.json());
  }

  getDownDetail( id ){
      return this.httpService.get( 'user/mydowninfo/'+id).map((res: Response) => res.json());
  }

  getDowncate(){
      return this.httpService.get( 'user/downcate').map((res: Response) => res.json());
  }

  bindEmail(param){
      return this.httpService.post( 'user/acountsafe',param).map((res: Response) => res.json());
  }

  // 我的主页栏目数量
  getColumnCount(param){
      return this.httpService.post( 'user/columncount',param).map((res: Response) => res.json());
  }
  // 我的任务栏目数量
  getDemandCount(param){
      return this.httpService.post( 'user/demandcolumncount',param).map((res: Response) => res.json());
  }
  // 我的收藏
  getDemandCollect(param){
      return this.httpService.get( 'user/collect',param).map((res: Response) => res.json());
  }
  
  delCollect(demandid){
      return this.httpService.get( 'demand/collect/'+demandid).map((res: Response) => res.json());
  }

  //版本检测
  getVersion(){
      return this.httpService.get( 'version/index').map((res: Response) => res.json());
  }

}
