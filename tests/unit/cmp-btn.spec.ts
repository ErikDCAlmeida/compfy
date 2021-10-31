import { CmpBtn } from "@/components/button";
import { shallowMount } from "@vue/test-utils";

const mockMethod = jest.fn();

const wrapper = shallowMount(CmpBtn, {
  propsData: {
    color: "foreground",
    disabled: true,
    flat: true,
    outline: true,
    xSmall: true,
    small: true,
    large: true,
    xLarge: true,
  },
  slots: {
    default: ["Test do slot"],
  },
  listeners: {
    click: mockMethod,
  },
});

describe("Button", () => {
  // Has a slot default
  it("has a slot default", () => {
    expect(wrapper.vm.$slots.default);
  });

  // Has a prop color
  it("has a prop color", () => {
    expect(wrapper.props().color).toBe("foreground");
  });

  // Has a prop disabled
  /* it("has a prop disabled", () => {
    expect(wrapper.props().disabled).toBe(true);
    if (wrapper.props().disabled) {
      expect(wrapper.classes()).toContain("cmp-btn--disabled");
    } else {
      expect(wrapper.classes()).not.toContain("cmp-btn--disabled");
    }
  }); */

  // ["1", "2"].map((v) => console.log(v));

  it.each([
    { name: "disabled", value: true },
    { name: "disabled", value: false },
  ])(`has a prop $name and class disabled => $o`, async ({ name, value }) => {
    await wrapper.setProps({ [name]: value });

    expect(wrapper.props().disabled).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain("cmp-btn--disabled");
    } else {
      expect(wrapper.classes()).not.toContain("cmp-btn--disabled");
    }
  });

  // Has a prop flat
  it("has a prop flat", () => {
    expect(wrapper.props().flat).toBe(true);
  });

  // Has a prop outline
  it("has a prop outline", () => {
    expect(wrapper.props().outline).toBe(true);
  });

  // Has a prop x-small
  it("has a prop x-small", () => {
    expect(wrapper.props().xSmall).toBe(true);
  });

  // Has a prop small
  it("has a prop small", () => {
    expect(wrapper.props().small).toBe(true);
  });

  // Has a prop large
  it("has a prop large", () => {
    expect(wrapper.props().large).toBe(true);
  });

  // Has a prop x-large
  it("has a prop x-large", () => {
    expect(wrapper.props().xLarge).toBe(true);
  });

  // Has a click listener
  it("has a click listener", () => {
    wrapper.trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
