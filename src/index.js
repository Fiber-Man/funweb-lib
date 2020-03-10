const App = {
    get AppBrowser() {
        return this.browser
    },
    set AppBrowser(value) {
        this.browser = value;
    },
    get AppModal() {
        return this.modal
    },
    set AppModal(value) {
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
    }
};
export default App;
export let AppBrowser = App.AppBrowser;
export let AppModal = App.AppModal;
export let ModalLink = App.ModalLink;
export let SessionContext = App.SessionContext;