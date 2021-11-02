import { CmpBtn } from "@/components/button";
import { shallowMount } from "@vue/test-utils";

const mockMethod = jest.fn();

const wrapper = shallowMount(CmpBtn, {
  propsData: {
    color: "foreground",
    disabled: true,
    flat: true,
    outline: true,
    xSmall: true || false,
    small: true,
    large: true,
    xLarge: true || false,
  },
  slots: {
    default: ["Test do slot"],
  },
  listeners: {
    click: mockMethod,
  },
});

describe("Button unit tests", () => {
  // Has a slot default
  it("has a slot default", () => {
    expect(wrapper.vm.$slots.default);
  });

  // Has a prop color
  // it.each([
  //   ["color", "danger"],
  //   ["color", "primary"],
  //   ["color", "label"],
  //   ["color", ""],
  // ])("has a prop %p => %p", async (name, value) => {
  //   await wrapper.setProps({ [name]: value });

  //   expect(wrapper.props().color).toBe(value);
  //   if (value) {
  //     expect(wrapper.classes()).toContain(name);
  //   } else {
  //     expect(wrapper.classes()).not.toContain(name);
  //   }
  // });

  it.each([
    ["disabled", true],
    ["disabled", false],
  ])("has a prop and class cmp-btn--%p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-btn--${name}`;

    expect(wrapper.props().disabled).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop flat
  it.each([
    ["flat", true],
    ["flat", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-btn--${name}`;

    expect(wrapper.props().flat).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop outline
  it.each([
    ["outline", true],
    ["outline", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-btn--${name}`;

    expect(wrapper.props().outline).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop x-small
  it.each([
    ["x-small", true],
    ["x-small", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-size--${name}`;

    expect(wrapper.props().xSmall).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop small
  it.each([
    ["small", true],
    ["small", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-size--${name}`;

    expect(wrapper.props().small).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop large
  it.each([
    ["large", true],
    ["large", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-size--${name}`;

    expect(wrapper.props().large).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a prop x-large
  it.each([
    ["x-large", true],
    ["x-large", false],
  ])("has a prop %p => %p", async (name, value) => {
    await wrapper.setProps({ [name]: value });

    const className = `cmp-size--${name}`;

    expect(wrapper.props().xLarge).toBe(value);
    if (value) {
      expect(wrapper.classes()).toContain(className);
    } else {
      expect(wrapper.classes()).not.toContain(className);
    }
  });

  // Has a click listener
  it("has a click listener", () => {
    wrapper.trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
