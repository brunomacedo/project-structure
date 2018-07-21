export default class Messages {
    constructor(options) {
        this.empty = options.empty || 'Preencha todos os campos.';
        this.error = options.error || 'Campo inválido.';
        this.loader = options.loader || 'Aguarde...';
        this.success = options.success || 'Enviado com sucesso, estamos redirecionando.';
        this.warning = options.warning || 'Não encontrado.';
    }

    show() {
        return this.empty;
    }

    clear() {
        return this.error;
    }
}
