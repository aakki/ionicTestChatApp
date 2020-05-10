import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    //public appPages = [
    //  {
    //    title: 'Inbox',
    //    url: '/folder/Inbox',
    //    icon: 'mail'
    //  },
    //  {
    //    title: 'Outbox',
    //    url: '/folder/Outbox',
    //    icon: 'paper-plane'
    //  },
    //  {
    //    title: 'Favorites',
    //    url: '/folder/Favorites',
    //    icon: 'heart'
    //  },
    //  {
    //    title: 'Archived',
    //    url: '/folder/Archived',
    //    icon: 'archive'
    //  },
    //  {
    //    title: 'Trash',
    //    url: '/folder/Trash',
    //    icon: 'trash'
    //  },
    //  {
    //    title: 'Spam',
    //    url: '/folder/Spam',
    //    icon: 'warning'
    //  }
    //];
    //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    public showListToggle = false;
    public showScreenToggle = false;

    public ChatLists = [
        {
            title: 'Elegance',
            url: 'elegance',
            icon: 'list'
        }
    ]
    public ChatScreens = [

        {
            title: 'Chat',
            url: 'chat',
            icon: 'chatboxes'
        }
    ]

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private route: Router,
        public alertCtrl: AlertController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    showList() {
        this.showScreenToggle = false
        this.showListToggle = !this.showListToggle;
    }
    showScreens() {
        this.showListToggle = false;
        this.showScreenToggle = !this.showScreenToggle
    }

    pageRedirect(page) {
        console.log(page)
        this.route.navigate([page.url])
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            //this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
}
