import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    conversation = [
        { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: 'assets/images/sg2.jpg',attach:0 },
        { text: 'Right, it totally blew my mind', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true,attach:0 },
        { text: 'And it is free ?', sender: 0, image: 'assets/images/sg2.jpg', attach:1},
        { text: 'Yes, totally free', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true,attach:0 },
        { text: 'Wow, that\'s so cool', sender: 0, image: 'assets/images/sg2.jpg',attach:0 },
        { text: 'Hats off to the developers', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: true, sent: true,attach:0 },
        { text: 'Oh yes, this is gooood stuff', sender: 0, image: 'assets/images/sg2.jpg' },
        { text: 'Check out their other designs ', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: false, sent: true,attach:0 }

    ]
    phone_model = 'iPhone';
    input = '';

    constructor(private platform: Platform,
        public alertController: AlertController, private device: Device, private menuCtrl: MenuController) { }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'end');
        this.menuCtrl.enable(true, 'start');

        setTimeout(() => {
            this.scrollToBottom()
        }, 10)
        setTimeout(() => {
            this.presentAlert();
        }, 100)


    }

    async presentAlert() {
        if (this.device.platform = 'iOS') {
            switch (this.platform.height()) {
                case 812:
                    this.phone_model = 'iPhone X';
                    break;
                case 736:
                    this.phone_model = 'iPhone 6/7/8 Plus';
                    break;
                case 667:
                    this.phone_model = 'iPhone 6/7/8';
                    break;
            }

            // const alert = await this.alertController.create({
            //     header: 'Hey there',
            //     subHeader: 'Information',
            //     message: 'We have adjusted the layout as per the phone model - ' + this.phone_model,
            //     buttons: ['OK']
            // });

            // await alert.present();
        }
    }

    send() {
        if (this.input != '') {
            this.conversation.push({ text: this.input, sender: 1, image: 'assets/images/sg1.jpg' });
            this.input = '';
            setTimeout(() => {
                this.scrollToBottom()
            }, 10)
        }
    }

    scrollToBottom() {
        let content = document.getElementById("chat-container");
        let parent = document.getElementById("chat-parent");
        let scrollOptions = {
            left: 0,
            top: content.offsetHeight
        }

        parent.scrollTo(scrollOptions)
    }
}
