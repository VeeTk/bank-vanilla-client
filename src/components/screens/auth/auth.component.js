import { BaseScreen } from "../../../core/component/base-screen.component";
export class Auth extends BaseScreen{
  constructor() {
    super({ title: "Authorization" });
  }
  render() {
    return "<p>Auth</p>";
  }
}
