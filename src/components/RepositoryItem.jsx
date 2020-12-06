import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import theme from '../theme';
import NativeText from './Text';

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
        flexDirection: 'row'
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
});

const RepositoryItem=({data})=>{
    // console.log(data.ownerAvatarUrl);
    return(
        <View key={data.id} style={styles.repoContainer}>
            <View style={styles.topPartContainer}>{/* top part of repo*/}
                <View>
                    <Image style={styles.avatarImage} source={{uri:data.ownerAvatarUrl}}/>
                </View>
                <View>
                    <NativeText style={{marginBottom: 10}} fontWeight='bold' fontSize='subheading' color='textPrimary'>{data.fullName}</NativeText>
                    <NativeText style={{marginBottom: 10}} fontSize='subheading' color='textSecondary'>{data.description}</NativeText>
                    <View style={styles.repoInfoStyle}>
                        <Text>
                            <NativeText style={styles.languageTag} color='primary' fontSize='subheading'>{data.language}</NativeText>
                        </Text>
                    </View>
                   
                </View>
            </View>
            <View style={styles.bottomPartContainer}>
                {/* repo detail */}
                <View style={styles.detailContainer}>
                    <NativeText fontWeight='bold' fontSize='subheading'>{`${data.stargazersCount>=1000
                    ?Math.round((data.stargazersCount/1000)*10)/10+'k'
                    :data.stargazersCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Stars</NativeText>
                </View>
                <View style={styles.detailContainer}>
                <NativeText fontWeight='bold' fontSize='subheading'>{`${data.forksCount>=1000
                    ?Math.round((data.forksCount/1000)*10)/10+'k'
                    :data.forksCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Forks</NativeText>
                  
                </View>
                <View style={styles.detailContainer}>
                <NativeText fontWeight='bold' fontSize='subheading'>{`${data.reviewCount>=1000
                    ?Math.round((data.reviewCount/1000)*10)/10+'k'
                    :data.reviewCount}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Reviews</NativeText>
                  
                </View>
                <View style={styles.detailContainer}>
                    <NativeText fontWeight='bold' fontSize='subheading'>{`${data.ratingAverage>=1000
                    ?Math.round((data.ratingAverage/1000)*10)/10+'k'
                    :data.ratingAverage}`}</NativeText>
                    <NativeText fontSize='subheading' color='textSecondary'>Rating</NativeText>
                   
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;