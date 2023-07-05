import React, { useCallback, useMemo, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../CustomBackdrop';

type AboutProps = {
    open: any
}

const About = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isOpen, setIsOpen] = useState(true);
    const snapPoints = useMemo(() => ["25%", "60%", "100%"], []);
    const handleSnapPress = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    }, [])
    return (
    <View style={[isOpen && styles.bsContainer]}>
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={CustomBackdrop}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            >
            <View style={styles.bsContentContainer}>
                <Text>Text</Text>
            </View>
        </BottomSheet>
    </View>
    )
}

export default About

const styles = StyleSheet.create({
    bsContainer: {
        flex: 1,
        padding: 24,
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 1
    },
    bsContentContainer: {
        flex: 1,
        alignItems: 'center'
    },
})