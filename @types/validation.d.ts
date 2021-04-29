interface Validation {

  requiredRule: (message: string) => any;
  
  requiredRuleBySelectBox: (message: string) => any;

}

declare module '*.vue' {
  interface Vue {
    readonly $validation: Validation;
  }
}
