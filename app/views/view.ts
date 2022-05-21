export abstract class View<T> {
  //classe abstrata precisa que a classe filha a instancie

  protected elemento: HTMLElement;
  private escapar: boolean = false;
  //protected deixa que os 'filhos' tenham acesso

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
      //o ? torna o escapar opcional, junto com essa condicional.
      //não pode ser o primeiro parâmetro
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<script>/, '');
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
