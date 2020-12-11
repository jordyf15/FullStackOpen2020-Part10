import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import theme from '../theme';
import NativeText from './Text';
import {useHistory} from 'react-router-native';
import * as Linking from 'expo-linking';

const styles=StyleSheet.create({
    repoContainer:{
        backgroundColor: theme.colors.RepoListBgColor,
        display: 'flex',
        flexDirection:'column',
        paddingTop: 15,
        paddingBottom: 15,
    },
    topPartContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
    bottomPartContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    avatarImage:{
        width: 50,
        height: 50,
        marginLeft: 15,
        marginRight: 15
    },
    detailContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    languageStyle:{
        display: 'flex',
        flexWrap:'wrap'
    },
    languageTag:{
        backgroundColor: theme.colors.languageBgColor,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
        color: theme.colors.tabLabel
    },
    repoInfoStyle:{
        marginBottom: 15
    },
    urlButton:{
        backgroundColor: theme.colors.primary,
        width: '90%',
        height: 40,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 'auto',
    },
    textButton:{
        textAlign: 'center',
        color: theme.colors.tabLabel,
        lineHeight: 40,
    },
    textStyle:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '70%'
    }
});

const RepositoryItem=({data})=>{
    const history=useHistory();

    const handleClick=()=>{
        history.push(`/singlerepoview/${data.id}`);
    };

    const openUrl=()=>{
        Linking.openURL(data.url);
    };
    // console.log(data.ownerAvatarUrl);
    return(
        <>
        <TouchableOpacity key={data.id} style={styles.repoContainer} activeOpacity={0.7} onPress={handleClick}>
            <View style={styles.topPartContainer}>{/* top part of repo*/}
                <View>
                    <Image style={styles.avatarImage} source={{uri:data.ownerAvatarUrl}}/>
                </View>
                <View style={styles.textStyle}>
                    <NativeText testID={`${data.id}.fullName`} style={{marginBottom: 10}} fontWeight='bold' fontSize='subheading' color='textPrimary'>{data.fullName}</NativeText>
                    <NativeText testID={`${data.id}.description`} style={{marginBottom: 10}} fontSize='subheading' color='textSecondary'>{data.description}</NativeText>
                    <View testID={`${data.id}.language`} style={styles.repoInfoStyle}>
                        <Text>
                            <NativeText style={styles.languageTag} color='primary' fontSize='subheading'>{data.language}</NativeText>
                        </Text>
                    </View>
                   
                </View>
            </View>
            <View style={styles.bottomPartContainer}>
                {/* repo detail */}
                <View testID={`${data.id}.stargazersCount`} style={styles.detailContainer}>
                    <NativeText fontWeight='bold' fontSize='subheading'>{`${data.stargazersCount>=1000
                    ?Math.round((data.stargazersCount/1000)*10)/10+'k'
                    :data.stargazersCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Stars</NativeText>
                </View>
                <View testID={`${data.id}.forksCount`} style={styles.detailContainer}>
                <NativeText fontWeight='bold' fontSize='subheading'>{`${data.forksCount>=1000
                    ?Math.round((data.forksCount/1000)*10)/10+'k'
                    :data.forksCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Forks</NativeText>
                  
                </View>
                <View testID={`${data.id}.reviewCount`} style={styles.detailContainer}>
                <NativeText fontWeight='bold' fontSize='subheading'>{`${data.reviewCount>=1000
                    ?Math.round((data.reviewCount/1000)*10)/10+'k'
                    :data.reviewCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Reviews</NativeText>
                  
                </View>
                <View testID={`${data.id}.ratingAverage`} style={styles.detailContainer}>
                    <NativeText fontWeight='bold' fontSize='subheading'>{`${data.ratingAverage>=1000
                    ?Math.round((data.ratingAverage/1000)*10)/10+'k'
                    :data.ratingAverage}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Rating</NativeText>
                </View>
            </View>
            {data.url
            ?<TouchableOpacity style={styles.urlButton} onPress={openUrl}>
                <NativeText style={styles.textButton} fontSize='subheading'>Open in Github</NativeText>
            </TouchableOpacity>
            :null}
        </TouchableOpacity>
            {data.url
            ?<View style={{marginBottom:10}}/>
            :null}
        </>
    );
};

export default RepositoryItem;