import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })

export class TemplatePageTitleStrategy extends TitleStrategy{
  constructor(private readonly title: Title){
    super()
  }

  override updateTitle(routeState: RouterStateSnapshot){
    const title = this.buildTitle(routeState)
    if(title !== undefined){
      this.title.setTitle(`UEX Contacts | ${title}`)
    }
  }

}

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }
  ]
})
export class AppRoutingModule { }
