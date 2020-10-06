import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proporção do painel superior na tela
  difficultLevel: 0.1, // 10% de mina
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize); // O floor arredonda para baixo. Pegamos a largura da tela e dividimos pelo tamanho do bloco, retornando a quantidade de colunas
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio); // Altura da área do jogo vai ser a dimenção total vezes 100% menos a porcentagem do cabeçalho.
    return Math.floor(boardHeight / this.blockSize)
  }
}

export default params;