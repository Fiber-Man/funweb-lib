const App = {
    get AppBrowser() {
        return this.browser
    },
    set AppBrowser(value) {
        this.browser = value;
    },
    get AppSwitch() {
        return this.modal
    },
    set AppSwitch(value) {
        this.modal = value;
    },
    get ModalLink() {
        return this.modalLink;
    },
    set ModalLink(value) {
        this.modalLink = value;
    },
    get SessionContext() {
        return this.sessionContext
    },
    set SessionContext(value) {
        this.sessionContext = value;
    },
    get CreatePaginationContainer() {
        return this.createPaginationContainer
    },
    set CreatePaginationContainer(value) {
        this.createPaginationContainer = value;
    }
};
export default App;
export let AppBrowser = App.AppBrowser;
export let AppSwitch = App.AppSwitch;
export let ModalLink = App.ModalLink;
export let SessionContext = App.SessionContext;
export let CreatePaginationContainer = App.CreatePaginationContainer;