import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <p-breadcrumb [home]="home" [model]="menuItems"></p-breadcrumb>
`,
})
export class BreadcrumbsComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = { icon: 'pi pi-home', routerLink: '/' };
  menuItems: MenuItem[]; 
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.menuItems = this.createBreadcrumbs(this.activatedRoute.root.firstChild);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root)));
  }
  //ceci la creation de file ariane basé sur la route courante
  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }
    let i = 0 ; 
    for (const child of children) {
      i++
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
       if (routeURL.length == 0) {
        url = 'test';
      }
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      let label = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];
      console.log(label)
      if (!isNullOrUndefined(label)) {
        if (label.includes(':'))
         label = child.snapshot.paramMap.get( label.substring(1, label.length));
        if(breadcrumbs.length>1)
        {
          let lastChild = url.split('/');
          if( breadcrumbs[breadcrumbs.length -1 ].url !== url)
            url = breadcrumbs[breadcrumbs.length -1 ].url + url
            }
        breadcrumbs.push({ label, url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
