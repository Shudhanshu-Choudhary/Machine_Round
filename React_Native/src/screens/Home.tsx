import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import { moderateScale, scale } from 'react-native-size-matters';
import { boldFont, danger, iconSize, lightFont, mainColor, mediumFont, mediumText, normalText } from '../../assets/styles/GlobalTheme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GetDataListService } from '../services/axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Skeleton } from '@rneui/themed';

interface photos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
export default function Home() {
    const navigation = useNavigation();
    const [data, setData] = useState(Array<photos> || []);
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true)
        setTimeout(async () => {
            try {
                setIsLoading(true)
                const res = await GetDataListService();
                if (res.data) {
                    const data = res.data.slice(1, 30);
                    setData([...data]);
                    setIsLoading(false)
                }


            } catch (error) {
                console.log(error);
                setIsLoading(false)

            }
        }, 3000);

    }

    useEffect(() => {
        getData()
    }, []);
    return (

        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', alignSelf: 'center', }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {isLoading && [1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => {
                            return (
                                <View style={{ marginTop: moderateScale(40), height: moderateScale(140), width: "45%" }}>
                                    <Skeleton
                                        animation="wave"
                                        width={'100%'}
                                        height={'100%'}
                                    />
                                </View>
                            )
                        })
                        }
                        {/* </Stack> */}
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: moderateScale(200) }}>
                        {!isLoading && data.filter((d, i) => {
                            if (searchText == '') {
                                return d
                            }
                            else if (d.title.toLocaleLowerCase().startsWith((searchText.toLocaleLowerCase()))) {
                                return d
                            }
                        }).map((item: photos) => {
                            return (
                                <TouchableOpacity activeOpacity={0.5} key={item.id} onPress={() => console.log('Hola')}
                                    style={styles.card}>
                                    <View style={{ height: moderateScale(100), width: '100%' }}>
                                        <Image source={{ uri: item.thumbnailUrl }} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                                    </View>
                                    {/* <Text style={{ fontFamily: mediumFont, fontSize: mediumText }}>{i18n.t('name')}</Text> */}
                                    <Text style={{ fontFamily: mediumFont, fontSize: mediumText + 2, marginBottom: moderateScale(20) }} numberOfLines={1}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1.2,
        borderTopColor: '#C3CFC5',
    },
    card: {
        borderColor: "#34b8ed",
        marginVertical: moderateScale(15),
        minHeight: moderateScale(150),
        borderRadius: moderateScale(6),
        alignItems: 'center',
        justifyContent: "space-between",
        width: '43%',
        marginHorizontal: moderateScale(12),
        backgroundColor: '#fff',
        shadowColor: mainColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 3,
        borderWidth: 0.5,
        overflow: 'hidden'

    },
    searchBarContainer: {
        height: moderateScale(100),
        width: '100%',
        alignSelf: "center",
        marginTop: moderateScale(15),
    }
});
