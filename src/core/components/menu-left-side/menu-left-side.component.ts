import {Component} from '@angular/core';
import {PanelMenu} from 'primeng/panelmenu';
import {$dt} from '@primeng/themes';

@Component({
  selector: 'her-menu-left-side',
  imports: [
    PanelMenu,
  ],
  templateUrl: './menu-left-side.component.html',
  styleUrl: './menu-left-side.component.css',
})
export class MenuLeftSideComponent {
  items = [
    {
      label: 'Tableau de board',
      icon: 'pi pi-home',
      routerLink: ['/dashboard']
    },
    // TODO : exemple à delete
    {
      label: 'Gestion des utilisateurs',
      icon: 'pi pi-users',
      items: [
        { label: 'Liste des utilisateurs', icon: 'pi pi-list', routerLink: ['/users'] },
        { label: 'Ajouter un utilisateur', icon: 'pi pi-user-plus', routerLink: ['/users/add'] }
      ]
    },
    // TODO : exemple à delete
    {
      label: 'Paramètres',
      icon: 'pi pi-cog',
      routerLink: ['/settings']
    }
  ];

  token = {
    root: {
      gap: "0rem",
    },
    panel: {
      background: ``,
      borderColor: "none",
      borderWidth: "0px",
      padding: "0.25rem 0.25rem",
      borderRadius: "none",
      first: {
        borderWidth: "0px",
        topBorderRadius: "none"
      },
      last: {
        borderWidth: "0px",
        bottomBorderRadius: "none"
      }
    },
    item: {
      focusBackground: $dt('neutral.950').value,
      color: "white",
      focusColor: "white",
      gap: "0.5rem",
      padding: "{navigation.item.padding}",
      borderRadius: "none",
      icon: {
        color: "{navigation.item.icon.color}",
        focusColor: "{navigation.item.icon.focus.color}"
      }
    },
    submenu: {
      indent: "1rem"
    },
    submenuIcon: {
      color:  $dt('gold.500').value,
      focusColor: "white"
    }
  }
}
