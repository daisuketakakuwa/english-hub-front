const validation = {
    requiredRule(message = '入力してください') {
        return (value: any) => {
            return !!value || message;
        };
    },
    requiredRuleBySelectBox(message = '選択してください') {
        return (value: any) => {
            return !!value || message;
        };
    }
};

export default function(_app: any, inject: any) {
  inject('validation', validation);
}
