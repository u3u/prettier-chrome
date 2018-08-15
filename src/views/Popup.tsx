import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class';
import {
  Form,
  FormItem,
  Input,
  Switch,
  Select,
  Option,
  Button,
  Tooltip,
  MessageBox,
} from 'element-ui';
import { css } from 'vue-emotion';

const msgbox = css`
  width: 300px;
`;

@Component
export default class Popup extends Vue {
  @State('cacheOptions')
  private options!: Prettier.Options;

  @Mutation('updateCache')
  private updateCache!: (payload: any) => void;

  @Mutation('save')
  private save!: () => void;

  @Mutation('reset')
  private reset!: () => void;

  // #region 计算属性
  private get parser(): string {
    return this.options.parser;
  }

  private set parser(parser: string) {
    this.updateCache({ parser });
  }

  private get printWidth(): number {
    return this.options.printWidth;
  }

  private set printWidth(printWidth: number) {
    this.updateCache({ printWidth: '' });
    setTimeout(() => this.updateCache({ printWidth: Number(printWidth) || 0 }));
  }

  private get tabWidth(): number {
    return this.options.tabWidth;
  }

  private set tabWidth(tabWidth: number) {
    this.updateCache({ tabWidth: '' });
    setTimeout(() => this.updateCache({ tabWidth: Number(tabWidth) || 0 }));
  }

  private get useTabs(): boolean {
    return this.options.useTabs;
  }

  private set useTabs(useTabs: boolean) {
    this.updateCache({ useTabs });
  }

  private get semi(): boolean {
    return this.options.semi;
  }

  private set semi(semi: boolean) {
    this.updateCache({ semi });
  }

  private get singleQuote(): boolean {
    return this.options.singleQuote;
  }

  private set singleQuote(singleQuote: boolean) {
    this.updateCache({ singleQuote });
  }

  private get trailingComma(): string {
    return this.options.trailingComma;
  }

  private set trailingComma(trailingComma: string) {
    this.updateCache({ trailingComma });
  }

  private get bracketSpacing(): boolean {
    return this.options.bracketSpacing;
  }

  private set bracketSpacing(bracketSpacing: boolean) {
    this.updateCache({ bracketSpacing });
  }

  private get jsxBracketSameLine(): boolean {
    return this.options.jsxBracketSameLine;
  }

  private set jsxBracketSameLine(jsxBracketSameLine: boolean) {
    this.updateCache({ jsxBracketSameLine });
  }

  private get arrowParens(): string {
    return this.options.arrowParens;
  }

  private set arrowParens(arrowParens: string) {
    this.updateCache({ arrowParens });
  }

  private get proseWrap(): string {
    return this.options.proseWrap;
  }

  private set proseWrap(proseWrap: string) {
    this.updateCache({ proseWrap });
  }
  // #endregion

  private handleClickSave() {
    this.save();
    MessageBox.alert('Saved successfully', 'Message', {
      type: 'success',
      confirmButtonText: 'OK',
      customClass: msgbox,
    });
  }

  private async handleClickReset() {
    await MessageBox.confirm(
      'Are you sure you want to reset the options to the default values?',
      'Question',
      {
        type: 'warning',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        customClass: msgbox,
      },
    );
    this.reset();
  }

  render() {
    return (
      <Form
        size="mini"
        labelWidth="130px"
        labelPosition="right"
        class={css`
          padding: 18px;
          min-width: 360px;

          label {
            font-size: 12px;
          }

          .el-form-item:last-child {
            margin-bottom: 0;
          }
        `}
      >
        <FormItem label="parser:">
          <Select
            tabIndex="0"
            placeholder="Specify which parser to use"
            v-model={this.parser}
            style={{ width: '100%' }}
          >
            <Option label="markdown" value="markdown" />
            <Option label="babylon" value="babylon" />
            <Option label="flow" value="flow" />
            <Option label="typescript" value="typescript" />
            <Option label="postcss" value="postcss" />
            <Option label="json" value="json" />
            <Option label="graphql" value="graphql" />
          </Select>
        </FormItem>
        <FormItem label="printWidth:" title="Fit code within this line limit">
          <Input
            placeholder="Fit code within this line limit"
            v-model={this.printWidth}
          />
        </FormItem>
        <FormItem
          label="tabWidth:"
          title="Number of spaces it should use per tab"
        >
          <Input
            placeholder="Number of spaces it should use per tab"
            v-model={this.tabWidth}
          />
        </FormItem>
        <FormItem label="useTabs:">
          <Tooltip content="Indent lines with tabs" placement="top-start">
            <Switch v-model={this.useTabs} />
          </Tooltip>
        </FormItem>
        <FormItem label="semi:">
          <Tooltip
            content="Whether to add a semicolon at the end of every line"
            placement="top-start"
          >
            <Switch v-model={this.semi} />
          </Tooltip>
        </FormItem>
        <FormItem label="singleQuote:">
          <Tooltip
            content="If true, will use single instead of double quotes"
            placement="top-start"
          >
            <Switch v-model={this.singleQuote} />
          </Tooltip>
        </FormItem>
        <FormItem
          label="trailingComma:"
          title="Print trailing commas wherever possible when multi-line"
        >
          <Select
            placeholder="Print trailing commas wherever possible when multi-line"
            v-model={this.trailingComma}
            style={{ width: '100%' }}
          >
            <Option label="none" value="none" />
            <Option label="es5" value="es5" />
            <Option label="all" value="all" />
          </Select>
        </FormItem>
        <FormItem label="bracketSpacing:">
          <Tooltip
            content="Controls the printing of spaces inside object literals"
            placement="top-start"
          >
            <Switch v-model={this.bracketSpacing} />
          </Tooltip>
        </FormItem>
        <FormItem label="jsxBracketSameLine:">
          <Tooltip placement="top-start">
            <div slot="content">
              {/* eslint-disable-next-line max-len */}
              If true, puts the `>` of a multi-line jsx element at the end of
              <br />
              the last line instead of being alone on the next line
            </div>
            <Switch v-model={this.jsxBracketSameLine} />
          </Tooltip>
        </FormItem>
        <FormItem
          label="arrowParens:"
          title="Include parentheses around a sole arrow function parameter"
        >
          <Select
            placeholder="Include parentheses around a sole arrow function parameter"
            v-model={this.arrowParens}
            style={{ width: '100%' }}
          >
            <Option label="avoid" value="avoid" />
            <Option label="always" value="always" />
          </Select>
        </FormItem>
        <FormItem
          label="proseWrap:"
          title="(Markdown) wrap prose over multiple lines"
        >
          <Select
            placeholder="(Markdown) wrap prose over multiple lines"
            v-model={this.proseWrap}
            style={{ width: '100%' }}
          >
            <Option label="always" value="always" />
            <Option label="never" value="never" />
            <Option label="preserve" value="preserve" />
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleClickSave}>
            Save
          </Button>
          <Button onClick={this.handleClickReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  }
}
