import { Vue, Component } from "vue-property-decorator";

@Component
export default class CmpButton extends Vue {
  render() {
    return <span>TEstando componente!</span>;
  }
}
