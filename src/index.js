import ModalLink from './components/ModalLink';
import SessionContext from './contexts/session';

let App = {
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
    }
};

let funwebLib = {
    ModalLink: ModalLink,
    SessionContext: SessionContext,
    App: App,
}

export default funwebLib;
