import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default (props) => {
  const { mined, opened, nearMines } = props;


  /*** Condições de estilos ***/
  const styleField = [styles.field]
  // Se tiver somente um estilo aplicado em Field, então colocamos o estilo default, que é o campo fechado
  styleField.length === 1 && styleField.push(styles.default);
  // Se contiver a propriedade opened, inserimos o estilo de campo aberto.
  opened && styleField.push(styles.opened);
  // Configurando cores dos campos de acordo com a quantidade de minas ao redor
  let color = null
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2A28D7'
    if (nearMines == 2) color = '#2B520F'
    if (nearMines > 2 && nearMines <6) color = '#F9060A'
    if (nearMines >= 6) color = '#F221A9'
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 
        ?
        <Text style={[styles.label, {color: color}]}>
          {nearMines}
        </Text> 
        :
        false
      }
      
    </View>
  )
}