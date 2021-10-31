import { CmpBtn } from "@/components/button";
import { shallowMount } from "@vue/test-utils";

const wrapper = shallowMount(CmpBtn, {
  propsData: {
    color: "foreground",
  },
  slots: {
    default: ["Test do slot"],
  },
});

describe("Button", () => {
  // Has a slot default
  it("has a slot default", () => {
    expect(wrapper.vm.$slots.default);
  });

  // has a prop color
  it("has a prop color ", () => {
    expect(wrapper.vm.color).toBe("foreground");
  });
});
