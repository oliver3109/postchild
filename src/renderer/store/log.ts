import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({
  name: "log",
  stateFactory: true,
  namespaced: true,
})
export default class LogModule extends VuexModule {}
