# StatusBarStyle

The `@StatusBarStyle`-Decorator automatically adjusts the style of the StatusBar for your page.
It uses Ionic Native's `StatusBar` and applys your requested style when the page will be presented.

```typescript
@StatusBarStyle('lightContent')
@IonicPage()
@Component({
    templateUrl: './your.page.html'
})
export class YourPage {
    constructor(
        public readonly statusBar: StatusBar
    ) { }
}
```

## Installation

```bash
$ npm install --save @ionic-decorator/status-bar-style @ionic-native/core @ionic-native/status-bar
$ ionic plugin add --save cordova-plugin-statusbar
```

## Author

Valentin Knabel, [@vknabel](https://twitter.com/vknabel), dev@vknabel.com

## License

Rock is available under the [MIT](LICENSE) license.
