import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "rest",
  stateFactory: true,
  namespaced: true,
})
export default class RestModule extends VuexModule {
  isSending = false;

  @Mutation
  SET_IS_SENDING(v: boolean) {
    this.isSending = v;
  }

  @Action({ commit: "SET_IS_SENDING" })
  send() {
    return true;
  }

  @Action({ commit: "SET_IS_SENDING" })
  stop() {
    return false;
  }
}
