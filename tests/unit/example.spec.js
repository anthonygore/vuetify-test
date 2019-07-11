import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import { VBtn, VTextField } from "vuetify/lib";
Vue.use(Vuetify);
import Test from "@/components/Test.vue";

describe("test", () => {
  it('should find v-btn', () => {
    const wrapper = shallowMount(Test);
    expect(wrapper.find(VBtn).exists()).toBe(true);
  });
  it('should find v-text-field', () => {
    const wrapper = shallowMount(Test);
    expect(wrapper.find(VTextField).exists()).toBe(true);
  });
});
