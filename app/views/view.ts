export abstract class View<T> {
  //classe abstrata precisa que a classe filha a instancie

  protected elemento: HTMLElement;
  //protected deixa que os 'filhos' tenham acesso

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
