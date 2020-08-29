import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {

    items: MenuItem[];
    asideMenuVisible: boolean = true;

    @Input() asideMenuIsVisible: boolean = true;


    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'User', icon: 'pi pi-fw pi-user-plus' },
                        { label: 'Filter', icon: 'pi pi-fw pi-filter' }
                    ]
                },
                { label: 'Open', icon: 'pi pi-fw pi-external-link' },
                { separator: true },
                { label: 'Quit', icon: 'pi pi-fw pi-times' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },

            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            {
                label: 'Reading',
                icon: 'pi pi-fw pi-folder',
                items: [
                    {
                        label: 'Books',
                        icon: 'pi pi-fw  pi-file',
                        items: [
                            { label: 'My list', routerLink: ['/reading/book'], icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Authors',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            { label: 'My list', routerLink: ['/reading/author'], icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            {
                label: 'Cases',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'setup', routerLink: ['/cases/setup'], icon: 'pi pi-fw pi-tags' },
                    { label: 'theming', routerLink: ['/cases/theming'], icon: 'pi pi-fw pi-tags' },
                    { label: 'icons', routerLink: ['/cases/icons'], icon: 'pi pi-fw pi-tags' },
                    { label: 'accordion', routerLink: ['/cases/accordion'], icon: 'pi pi-fw pi-tags' },
                    { label: 'autocomplete', routerLink: ['/cases/autocomplete'], icon: 'pi pi-fw pi-tags' },
                    { label: 'blockui', routerLink: ['/cases/blockui'], icon: 'pi pi-fw pi-tags' },
                    { label: 'breadcrumb', routerLink: ['/cases/breadcrumb'], icon: 'pi pi-fw pi-tags' },
                    { label: 'button', routerLink: ['/cases/button'], icon: 'pi pi-fw pi-tags' },
                    { label: 'calendar', routerLink: ['/cases/calendar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'captcha', routerLink: ['/cases/captcha'], icon: 'pi pi-fw pi-tags' },
                    { label: 'card', routerLink: ['/cases/card'], icon: 'pi pi-fw pi-tags' },
                    { label: 'carousel', routerLink: ['/cases/carousel'], icon: 'pi pi-fw pi-tags' },
                    { label: 'chart', routerLink: ['/cases/chart'], icon: 'pi pi-fw pi-tags' },
                    { label: 'checkbox', routerLink: ['/cases/checkbox'], icon: 'pi pi-fw pi-tags' },
                    { label: 'chips', routerLink: ['/cases/chips'], icon: 'pi pi-fw pi-tags' },
                    { label: 'codehighlighter', routerLink: ['/cases/codehighlighter'], icon: 'pi pi-fw pi-tags' },
                    { label: 'colorpicker', routerLink: ['/cases/colorpicker'], icon: 'pi pi-fw pi-tags' },
                    { label: 'confirmdialog', routerLink: ['/cases/confirmdialog'], icon: 'pi pi-fw pi-tags' },
                    { label: 'contextmenu', routerLink: ['/cases/contextmenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'dataview', routerLink: ['/cases/dataview'], icon: 'pi pi-fw pi-tags' },
                    { label: 'defer', routerLink: ['/cases/defer'], icon: 'pi pi-fw pi-tags' },
                    { label: 'dialog', routerLink: ['/cases/dialog'], icon: 'pi pi-fw pi-tags' },
                    { label: 'dynamicdialog', routerLink: ['/cases/dynamicdialog'], icon: 'pi pi-fw pi-tags' },
                    { label: 'dragdrop', routerLink: ['/cases/dragdrop'], icon: 'pi pi-fw pi-tags' },
                    { label: 'dropdown', routerLink: ['/cases/dropdown'], icon: 'pi pi-fw pi-tags' },
                    { label: 'editor', routerLink: ['/cases/editor'], icon: 'pi pi-fw pi-tags' },
                    { label: 'fieldset', routerLink: ['/cases/fieldset'], icon: 'pi pi-fw pi-tags' },
                    { label: 'fileupload', routerLink: ['/cases/fileupload'], icon: 'pi pi-fw pi-tags' },
                    { label: 'filterutils', routerLink: ['/cases/filterutils'], icon: 'pi pi-fw pi-tags' },
                    { label: 'flexgrid', routerLink: ['/cases/flexgrid'], icon: 'pi pi-fw pi-tags' },
                    { label: 'focustrap', routerLink: ['/cases/focustrap'], icon: 'pi pi-fw pi-tags' },
                    { label: 'fullcalendar', routerLink: ['/cases/fullcalendar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'galleria', routerLink: ['/cases/galleria'], icon: 'pi pi-fw pi-tags' },
                    { label: 'gmap', routerLink: ['/cases/gmap'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inplace', routerLink: ['/cases/inplace'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inputmask', routerLink: ['/cases/inputmask'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inputswitch', routerLink: ['/cases/inputswitch'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inputtext', routerLink: ['/cases/inputtext'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inputgroup', routerLink: ['/cases/inputgroup'], icon: 'pi pi-fw pi-tags' },
                    { label: 'inputtextarea', routerLink: ['/cases/inputtextarea'], icon: 'pi pi-fw pi-tags' },
                    { label: 'keyfilter', routerLink: ['/cases/keyfilter'], icon: 'pi pi-fw pi-tags' },
                    { label: 'lightbox', routerLink: ['/cases/lightbox'], icon: 'pi pi-fw pi-tags' },
                    { label: 'listbox', routerLink: ['/cases/listbox'], icon: 'pi pi-fw pi-tags' },
                    { label: 'lts', routerLink: ['/cases/lts'], icon: 'pi pi-fw pi-tags' },
                    { label: 'megamenu', routerLink: ['/cases/megamenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'menu', routerLink: ['/cases/menu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'menubar', routerLink: ['/cases/menubar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'menumodel', routerLink: ['/cases/menumodel'], icon: 'pi pi-fw pi-tags' },
                    { label: 'messages', routerLink: ['/cases/messages'], icon: 'pi pi-fw pi-tags' },
                    { label: 'multiselect', routerLink: ['/cases/multiselect'], icon: 'pi pi-fw pi-tags' },
                    { label: 'orderlist', routerLink: ['/cases/orderlist'], icon: 'pi pi-fw pi-tags' },
                    { label: 'organizationchart', routerLink: ['/cases/organizationchart'], icon: 'pi pi-fw pi-tags' },
                    { label: 'overlaypanel', routerLink: ['/cases/overlaypanel'], icon: 'pi pi-fw pi-tags' },
                    { label: 'paginator', routerLink: ['/cases/paginator'], icon: 'pi pi-fw pi-tags' },
                    { label: 'panel', routerLink: ['/cases/panel'], icon: 'pi pi-fw pi-tags' },
                    { label: 'panelmenu', routerLink: ['/cases/panelmenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'password', routerLink: ['/cases/password'], icon: 'pi pi-fw pi-tags' },
                    { label: 'picklist', routerLink: ['/cases/picklist'], icon: 'pi pi-fw pi-tags' },
                    { label: 'progressbar', routerLink: ['/cases/progressbar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'progressspinner', routerLink: ['/cases/progressspinner'], icon: 'pi pi-fw pi-tags' },
                    { label: 'radiobutton', routerLink: ['/cases/radiobutton'], icon: 'pi pi-fw pi-tags' },
                    { label: 'rating', routerLink: ['/cases/rating'], icon: 'pi pi-fw pi-tags' },
                    { label: 'responsive', routerLink: ['/cases/responsive'], icon: 'pi pi-fw pi-tags' },
                    { label: 'rtl', routerLink: ['/cases/rtl'], icon: 'pi pi-fw pi-tags' },
                    { label: 'scrollpanel', routerLink: ['/cases/scrollpanel'], icon: 'pi pi-fw pi-tags' },
                    { label: 'selectbutton', routerLink: ['/cases/selectbutton'], icon: 'pi pi-fw pi-tags' },
                    { label: 'sidebar', routerLink: ['/cases/sidebar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'slidemenu', routerLink: ['/cases/slidemenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'slider', routerLink: ['/cases/slider'], icon: 'pi pi-fw pi-tags' },
                    { label: 'spinner', routerLink: ['/cases/spinner'], icon: 'pi pi-fw pi-tags' },
                    { label: 'splitbutton', routerLink: ['/cases/splitbutton'], icon: 'pi pi-fw pi-tags' },
                    { label: 'steps', routerLink: ['/cases/steps'], icon: 'pi pi-fw pi-tags' },
                    { label: 'support', routerLink: ['/cases/support'], icon: 'pi pi-fw pi-tags' },
                    { label: 'table', routerLink: ['/cases/table'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tabmenu', routerLink: ['/cases/tabmenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tabview', routerLink: ['/cases/tabview'], icon: 'pi pi-fw pi-tags' },
                    { label: 'terminal', routerLink: ['/cases/terminal'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tieredmenu', routerLink: ['/cases/tieredmenu'], icon: 'pi pi-fw pi-tags' },
                    { label: 'toast', routerLink: ['/cases/toast'], icon: 'pi pi-fw pi-tags' },
                    { label: 'togglebutton', routerLink: ['/cases/togglebutton'], icon: 'pi pi-fw pi-tags' },
                    { label: 'toolbar', routerLink: ['/cases/toolbar'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tooltip', routerLink: ['/cases/tooltip'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tree', routerLink: ['/cases/tree'], icon: 'pi pi-fw pi-tags' },
                    { label: 'treetable', routerLink: ['/cases/treetable'], icon: 'pi pi-fw pi-tags' },
                    { label: 'tristatecheckbox', routerLink: ['/cases/tristatecheckbox'], icon: 'pi pi-fw pi-tags' },
                    { label: 'validation', routerLink: ['/cases/validation'], icon: 'pi pi-fw pi-tags' },
                    { label: 'virtualscroller', routerLink: ['/cases/virtualscroller'], icon: 'pi pi-fw pi-tags' },
                ]
            }
        ];
    }
    getAsideMenuVisibility(isVisible) {
    }
}