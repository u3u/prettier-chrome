/* eslint no-underscore-dangle: off */

export default {
  // JS - Babel
  get babel() {
    return prettierPlugins.babylon.parsers.babel;
  },
  get 'babel-flow'() {
    return prettierPlugins.babylon.parsers['babel-flow'];
  },
  // backward compatibility
  get babylon() {
    return prettierPlugins.babylon.parsers.babylon;
  },
  get json() {
    return prettierPlugins.babylon.parsers.json;
  },
  get json5() {
    return prettierPlugins.babylon.parsers.json5;
  },
  get 'json-stringify'() {
    return prettierPlugins.babylon.parsers['json-stringify'];
  },
  get __js_expression() {
    return prettierPlugins.babylon.parsers.__js_expression;
  },
  get __vue_expression() {
    return prettierPlugins.babylon.parsers.__vue_expression;
  },
  get __vue_event_binding() {
    return prettierPlugins.babylon.parsers.__vue_event_binding;
  },
  // JS - Flow
  get flow() {
    return prettierPlugins.flow.parsers.flow;
  },
  // JS - TypeScript
  get typescript() {
    return prettierPlugins.typescript.parsers.typescript;
  },
  // JS - Angular Action
  get __ng_action() {
    return prettierPlugins.angular.parsers.__ng_action;
  },
  // JS - Angular Binding
  get __ng_binding() {
    return prettierPlugins.angular.parsers.__ng_binding;
  },
  // JS - Angular Interpolation
  get __ng_interpolation() {
    return prettierPlugins.angular.parsers.__ng_interpolation;
  },
  // JS - Angular Directive
  get __ng_directive() {
    return prettierPlugins.angular.parsers.__ng_directive;
  },

  // CSS
  get css() {
    return prettierPlugins.postcss.parsers.css;
  },
  get less() {
    return prettierPlugins.postcss.parsers.css;
  },
  get scss() {
    return prettierPlugins.postcss.parsers.css;
  },

  // GraphQL
  get graphql() {
    return prettierPlugins.graphql.parsers.graphql;
  },

  // Markdown
  get markdown() {
    return prettierPlugins.markdown.parsers.remark;
  },
  get mdx() {
    return prettierPlugins.markdown.parsers.mdx;
  },

  // YAML
  get yaml() {
    return prettierPlugins.yaml.parsers.yaml;
  },

  // Handlebars
  get glimmer() {
    return prettierPlugins.glimmer.parsers.glimmer;
  },

  // HTML
  get html() {
    return prettierPlugins.html.parsers.html;
  },
  // Vue
  get vue() {
    return prettierPlugins.html.parsers.vue;
  },
  // Angular
  get angular() {
    return prettierPlugins.html.parsers.angular;
  },
  // Lightning Web Components
  get lwc() {
    return prettierPlugins.html.parsers.lwc;
  },
};
