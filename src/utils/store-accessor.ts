import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import LogStore from "~/store/log";
import RestStore from "~/store/rest";

let logStore: LogStore;
let restStore: RestStore;

function initialiseStores(store: Store<any>): void {
  logStore = getModule(LogStore, store);
  restStore = getModule(RestStore, store);
}

export { initialiseStores, logStore, restStore };
