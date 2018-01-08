import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { RegisterPage } from "../login/register/register";
import { InfoPage } from "./info/info";
import { RolePage } from "./role/role";
import { SafePage } from "./safe/safe";
import { GtaskPage } from "./gtask/gtask";
import { CollectPage } from "./collect/collect";
import { CertifyPage } from "./certify/certify";
import { DownPage } from "./down/down";
import { WalletPage } from "./wallet/wallet";
import { CasePage } from "./case/case";
import { MessagePage } from "../message/message";
import { UserPage } from "./user/user";
import { HelpPage } from "./help/help";
import { AboutPage } from "./about/about";
import { DemandinfoPage } from "../demand/demandinfo/demandinfo";

import { GlobalData } from "../../providers/GlobalData";
import { Storage } from '@ionic/storage';
import { MineService } from "./MineService";
import { AlertController } from 'ionic-angular';
import { NativeService } from "../../providers/NativeService";
import { Helper } from "../../providers/Helper";


/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
  providers: [MineService]
})
export class MinePage {
  user: any;
  pwd: any;
  isLogin : any = false;
  hidemodal : any = false;
  versionCode : any = 1;
  uinfo : any;
  constructor(
  public alertCtrl: AlertController,
  private mineService: MineService,
  private storage: Storage,
  private helper: Helper,
  private globalData: GlobalData,
  private modalCtrl: ModalController,
  private nativeService: NativeService,
  public navCtrl: NavController, 
  public navParams: NavParams) {
    this.nativeService.showLoading();
  }

  goLogin(){
    this.hidemodal = true;
    let modal = this.modalCtrl.create(LoginPage);
    modal.onDidDismiss(data => {
     if(data && data.id){
        this.uinfo = data;
        this.isLogin = true;
      if(data.type == 0 || data.type == ''){
        this.goRole();
      }
      this.hidemodal = false;
      
     }else{

      this.hidemodal = true;
     }
   });
    modal.present();

  }

  getToken(){
    this.storage.get('token').then(res=>{
      let nowtime = new Date().getTime();
      if( (res.token && res.refreshToken * 1000 <= nowtime) || !res.token ){
        this.mineService.getToken().subscribe(res => {
          if(res && res.code == 0){
              this.globalData.token = res.value.token;
              this.globalData.refreshToken = res.value.expires;
              this.globalData.authTime = res.value.authTime;
              let tokens = {
                token:res.value.token,
                refreshToken:res.value.expires,
                authTime:res.value.authTime,
              }
              this.storage.set('token',tokens)
              
          }else{
            this.nativeService.showToast('秘钥获取失败!')
          }
          this.nativeService.hideLoading();
        },err=>{
            this.nativeService.hideLoading();
            this.nativeService.showToast('网络错误!')
        });
      }else{
        this.globalData.token = res.token;
        this.globalData.refreshToken = res.refreshToken;
        this.globalData.authTime = res.authTime;
      }
    });
    
  }

  goReg(){
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

  goTask(){
    
      this.navCtrl.push(GtaskPage,{uinfo:this.uinfo});
  }

  goUserpage(){
    this.navCtrl.push(UserPage,{uinfo:this.uinfo});
  }

  goInfo(){
    this.navCtrl.push(InfoPage,{uinfo:this.uinfo});
  }

  goSafe(){
    this.navCtrl.push(SafePage,{uinfo:this.uinfo});
  }

  goCertify(){
    this.navCtrl.push(CertifyPage,{uinfo:this.uinfo});
  }

  goDown(){
    this.navCtrl.push(DownPage,{uinfo:this.uinfo});
  }

  goCase(){
    this.navCtrl.push(CasePage,{uinfo:this.uinfo});
  }

  goWallet(){
    this.navCtrl.push(WalletPage,{uinfo:this.uinfo});
  }

  goMessage(){
    this.navCtrl.push(MessagePage,{uinfo:this.uinfo});
  }

  goHelp(){
    this.navCtrl.push(HelpPage);
  }


  goCollect(){
    this.navCtrl.push(CollectPage);
  }

  goAbout(){
    this.navCtrl.push(AboutPage);
  }

  ionViewWillEnter() {
    this.isLogined();
  }

  //去任务详情
  goDemanddetail(){
    let number = this.uinfo.demandNumber;
    this.navCtrl.push(DemandinfoPage,{info:{number:number}});

  }

  // 去认证
  goAuth(){
    this.navCtrl.push(CertifyPage);

  }

  isLogined(){

      
    this.mineService.getUserinfo().subscribe(result => {
        
        if(result.code==500){
          this.isLogin = false;
          this.hidemodal = true;
        }

        if(result.code==0){
          let value = result.value;
          this.uinfo = value;
          console.log(this.uinfo)
          this.storage.set('UserInfo',value);
          
          this.isLogin = true;
          this.hidemodal = false;
          this.globalData.userId = value.id;
          this.globalData.idcode = value.idcode;
          this.globalData.username = value.username;
          this.globalData.nickname = value.nickname;
          this.globalData.fullName = value.name;
          this.globalData.sex = value.sex;
          this.globalData.telphone = value.telphone;
          this.globalData.avatar = value.avatar;
          this.globalData.validate = value.validate;
          this.globalData.type = value.type;

          if(value.type == 0 ){
            this.goRole();
          }
        }
    })
  
    this.nativeService.hideLoading();
  }

  goRole(){
    let modal = this.modalCtrl.create(RolePage);
    modal.onDidDismiss(data => {
     
   });
    modal.present();
  }

  ionViewDidEnter() {

  }

  ionViewWillLeave(){
      this.hidemodal = false;
    if(this.isLogin){
      this.hidemodal = false;
    }
  }


  ionViewDidLoad() {
    this.nativeService.getVersionNumber().subscribe(currentNo => {
      this.versionCode = currentNo;
    });
    
  }

  // 版本检测
  selectViersion(){
    let that = this;
    this.nativeService.showLoading();
    this.mineService.getVersion().subscribe(result => {
        that.nativeService.hideLoading();
        
        if(result.code==0 && result.version != that.versionCode){
          that.helper.assertUpgrade().subscribe(res => {//检测app是否升级
            res.update && this.nativeService.downloadApp();
          });
        }else{
            that.nativeService.showToast("已经是最新版本");
        }
    });

  }

}
