import { CmpApp } from "@/components/app";
import { shallowMount } from "@vue/test-utils";

const wrapper = shallowMount(CmpApp, {
  slots: {
    default: ["Test do slot"],
  },
});

describe("App", () => {
  // Has a slot default
  it("has a slot default", () => {
    expect(wrapper.vm.$slots.default);
  });
});
