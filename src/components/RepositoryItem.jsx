import React from 'react';
import { View} from 'react-native'
import Text from './Text';

const RepositoryItem = ({item}) => {
    return (
        <View>
            <Text color='primary' fontWeight='bold'>Full name: {item.fullName}</Text>
            <Text fontSize='subheading'>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
        </View>
    )
}

export default RepositoryItem