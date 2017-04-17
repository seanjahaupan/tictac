import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const GameSquare = (props) => {
    return (
        <TouchableOpacity 
            style={styles.touchableGameSquareStyle} 
            onPress={props.onPress}
        >
            <Text style={styles.textGameSquareStyle}>
                {props.turn}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    touchableGameSquareStyle: {
        height: '33.33%',
        width: '33.33%',
        backgroundColor: 'azure',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textGameSquareStyle: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'gold'
    }
};

export default GameSquare;
