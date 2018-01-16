import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { WalletPage } from './wallet/wallet';
import { DownPage } from './down/down';
import { DowninfoPage } from './downinfo/downinfo';
import { CasePage } from './case/case';
import { CaseinfoPage } from './caseinfo/caseinfo';
import { CollectPage } from './collect/collect';
import { GtaskPage } from './gtask/gtask';
import { GtaskinfoPage } from './gtaskinfo/gtaskinfo';
import { RolePage } from './role/role';
import { InfoPage } from './info/info';
import { SafePage } from './safe/safe';
import { UserPage } from './user/user';
import { BindemailPage } from './bindemail/bindemail';
import { RechargePage } from './recharge/recharge';
import { CashPage } from './cash/cash';
import { AboutPage } from './about/about';
import { HelpPage } from './help/help';
import { HelpinfoPage } from './helpinfo/helpinfo';
import { CertifyPage } from './certify/certify';
import { UpdateinfoPage } from './updateinfo/updateinfo';
import { Wechats } from './../../providers/Wechats';

@NgModule({
  imports: [ IonicModule, ],
  declarations: [ MinePage, GtaskPage,CollectPage,GtaskinfoPage,RolePage,InfoPage,UpdateinfoPage,CertifyPage,WalletPage,DownPage,DowninfoPage,CasePage,CaseinfoPage,SafePage,UserPage,BindemailPage,RechargePage,CashPage,AboutPage,HelpPage,HelpinfoPage, ],
  entryComponents:[MinePage, GtaskPage,CollectPage,GtaskinfoPage,RolePage,InfoPage,UpdateinfoPage,CertifyPage,WalletPage,DownPage,DowninfoPage,CasePage,CaseinfoPage,SafePage,UserPage,BindemailPage,RechargePage,CashPage,AboutPage,HelpPage,HelpinfoPage, ],
  providers:[Wechats],
  exports: [IonicModule]


})
export class MineModule {}
