import React from "react";
import {StyleSheet, View, Text, TouchableHighlight, Modal} from "react-native";
import ModalPiker from "./modalPiker";
import DropDown from "../svg/icons/dropDown";


const Modal = ({selectedValue}) => {

    const [modalVisibility, changeModalVisibility] = useState(false)

    return(
        <View style={styles.modal}>
            <Text style={styles.label}>Категорія</Text>
            <TouchableHighlight 
                style={styles.touchableHighlight}
                underlayColor="#313533"
                onPress={() => changeModalVisibility(true)}
            >
                <View style={styles.modalPiker}>
                    <View style={styles.option}>
                        {selectedValue.icon && <View style={styles.icon}>{selectedValue.icon}</View>}
                        <Text style={styles.modalPikerText}>{selectedValue.description}</Text>
                    </View>
                        <DropDown/>
                </View>
            </TouchableHighlight>
            <Modal
                transparent={true}
                animationType='fade'
                visible={modalVisibility}
                nRequestClose={()=> changeModalVisibility(false)}
            >
                <ModalPiker 
                    changeModalVisibility={changeModalVisibility}
                    selectedValue={selectedValue}
                />
            </Modal>
        </View>
    )
}

export default Modal

const styles = StyleSheet.create({
    
})