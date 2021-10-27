import { Vue, Component, Prop } from "vue-property-decorator";
import "./cmp-template.scss";

@Component
export default class CmpTemplate extends Vue {
  @Prop({ type: String, default: "" })
  title!: string;

  render() {
    return (
      <div class="area-geral">
        <div class="center">
          <div></div>
        </div>
      </div>
    );
  }
}
