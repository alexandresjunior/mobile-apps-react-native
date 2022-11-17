# React Native: Componentes e Unidades de Medida

## Tela Física vs. Tela Virtual

Quando trabalhamos com desenvolvimento mobile, em algum momento do processo precisamos desenhar telas. Normalmente, os layouts são feitos pela equipe de design e, depois, são encaminhados para o time de desenvolvimento, para fazer a "montagem" do app. E, antes de começar a desenhar os componentes na tela, primeiro precisamos entender alguns conceitos importantes. Existem dois tipos de tamanho em uma tela de celular. O tamanho físico que normalmente medimos com polegadas, e o tamanho virtual que costumamos medir com pixels.

<div align="center">
  <img src="https://user-images.githubusercontent.com/83607914/202467942-7cd8a3a1-0fce-459b-9f09-41f906909d5e.png" alt="telas" width="50%" />
</div>

A informação importante é que tamanho físico não escala proporcionalmente com tamanho virtual. Inclusive, esses tamanhos são independentes um do outro. Esta informação é útil, porque significa que não podemos assumir uma resolução de tela (quantidade de pixels em uma tela) baseada em seu tamanho físico. Quando vamos desenhar componentes na tela, vamos desenhar em uma tela virtual.

## As Unidades de Medida

Como estamos trabalhando com telas virtuais, a principal unidade de medida será pixels. Mas, podemos trabalhar com a unidade relativa `%`, ou seja, com valores de porcentagem. Enquanto pixels são unidades absolutas, porcentagens permitem uma maior adaptabilidade em dispositivos diferentes. Vamos pegar, por exemplo, dois dispositivos com resoluções diferentes (lembrando que tamanho físico não é proporcional ao tamanho virtual). O primeiro dispositivo tem uma resolução de `1080px` de largura e `1920px` de altura. O segundo tem uma resolução de `720px` de largura e `1280px` de altura.

<div align="center">
  <img src="https://user-images.githubusercontent.com/83607914/202469378-68711c17-7837-4a65-9774-86d5f29e8ec6.png" alt="unidades" width="50%" />
</div>

Agora, vamos colocar um botão azul com `800px` de largura nas duas telas.

<div align="center">
  <img src="https://user-images.githubusercontent.com/83607914/202469630-56398042-90a3-44d1-9c40-e9574a179dcd.png" alt="unidades" width="50%" />
</div>

O botão azul na primeira tela conseguiu aparecer por completo. No entanto, na segunda tela, **o botão era muito maior do que a largura disponível** e um pedaço ficou escondido ou "vazado". Se houvesse a necessidade do botão ocupar uma certa proporção da tela, poderíamos usar `%`. Por exemplo, o botão ocupar apenas metade da tela: 50%. Essas são as diferenças entre unidades absolutas e unidades relativas. Faz sentido até aqui?

E quais outras unidades de medida temos? Bem, basicamente, apenas essas duas. Esta é uma peculiaridade do React Native. Ele espera que a gente trabalhe apenas com pixels. Quando colocamos um valor na propriedade de largura de um componente ou elemento, não precisamos digitar a unidade de medida, por exemplo, `width: 800`. Diferente do CSS que pode trabalhar com diversas unidades: `pt`, `rem`, `em`, `px`, etc... E a porcentagem? Esse é o único valor em que precisamos aplicar uma `string`. Por exemplo `width: '50%'`.

Agora que vimos um pouco sobre unidades de medida, vamos entender outra noção importante relacionada aos comportamentos visuais dos componentes.

## Componentes e seus Comportamentos Visuais

