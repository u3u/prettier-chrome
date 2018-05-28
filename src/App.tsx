import Vue from 'vue';
import Component from 'vue-class-component';
import { injectGlobal } from 'vue-emotion';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    outline: none !important;
  }
  html, body, #app {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
  }
`;

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    );
  }
}
