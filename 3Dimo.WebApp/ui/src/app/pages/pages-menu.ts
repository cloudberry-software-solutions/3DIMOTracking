/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    
    const menu: NbMenuItem[] = [
      {
        title: 'Dashboard',
        icon: 'layout-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'User Management',
        icon: 'people-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Scheduling',
        icon: 'calendar-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Perfomance Analysis',
        icon: 'compass-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Stress Analysis',
        icon: 'flash-off-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Video Analysis',
        icon: 'video-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Technical Analysis',
        icon: 'activity-outline',
        link: '/pages/dashboard'       
        
      },
      {
        title: 'Report',
        icon: 'book-open-outline',
        link: '/pages/dashboard'       
        
      }
    ];

    const MenuFiller: NbMenuItem[] = [
      {
        title: '',
        group: true,
      }
    ]

    const configMenu: NbMenuItem[] = [
      {
        title: 'Settings',
        group: true,
      },
      {
        title: 'Administration',
        icon: 'inbox-outline',
        link: '/pages/dashboard'
        
      },
      {
        title: 'Configuration',
        icon: 'settings-2-outline',
        link: '/pages/iot-dashboard'        
      }
    ];

    return of([...menu, ...MenuFiller, ...configMenu]);
  }
}
