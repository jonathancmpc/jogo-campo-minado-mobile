import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default (props) => {

  /*** Condições de estilos ***/
  const styleField = [styles.field]
  // Se tiver somente um estilo aplicado em Field, então colocamos o estilo default, que é o campo minado fechado
  styleField.length === 1 && styleField.push(styles.default);

  return (
    <View style={styleField}>
      
    </View>
  )
}