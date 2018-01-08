import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { MineService } from "../MineService";
import { GtaskinfoPage } from "../gtaskinfo/gtaskinfo";

@Component({
  selector: 'page-down',
  templateUrl: 'down.html',
  providers: [MineService]
})
export class DownPage {
  catemenu:number = 0;
  cate:any = [];
  list:any = [];
  constructor(
  private navController: NavController,
  private viewCtrl: ViewController,
  private mineService: MineService
  ) {
    
  };

  ionViewDidLoad(){
    this.getDataCate();
    this.getData({s:1})
  }
  
  back(){
    this.viewCtrl.dismiss();
  }

	info(){
		this.navController.push(GtaskinfoPage)
	}

  setCate(cate){
    this.catemenu = cate;
    this.getData({cid:cate});
  }

  getData(param){
    this.mineService.getDown(param).subscribe(res=>{
      if(res.code==0){
        this.list = res.value;
      }
    });
  }
  getDataCate(){
    this.mineService.getDowncate().subscribe(res=>{
      if(res.code==0){
        this.cate = res.value;
      }
    });
  }

}
