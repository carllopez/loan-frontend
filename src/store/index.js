import { alert } from './alert.module';
import { account } from './account.module';
import { operation } from './operation.module';

import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    alert,
    account,
    operation
  }
})