import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    padding: 16,
    paddingTop:40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  searchButton: {
    padding: 8,
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  videoThumbnailContainer: {
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  videoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  videoDuration: {
    fontSize: 12,
    color: '#666',
    marginRight: 12,
  },
  videoViews: {
    fontSize: 12,
    color: '#666',
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

const educationData = {
  videos: [
    {
      id: 1,
      title: 'Understanding Your First Trimester',
      duration: '12:34',
      views: '10K',
      youtubeId: 'YOUTUBE_VIDEO_ID_1',
    },
    {
      id: 2,
      title: 'Pregnancy Exercise Guide',
      duration: '8:45',
      views: '8.5K',
      youtubeId: 'YOUTUBE_VIDEO_ID_2',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Essential Nutrients During Pregnancy',
      description: 'Learn about the key nutrients you need during pregnancy...',
      url: 'https://your-domain.com/article1',
    },
    {
      id: 2,
      title: 'Preparing for Labor and Delivery',
      description: 'A comprehensive guide to preparing for childbirth...',
      url: 'https://your-domain.com/article2',
    },
  ],
};

export default function EducationScreen() {
  const handleVideoPress = (youtubeId: string) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${youtubeId}`);
  };

  const handleArticlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false,
        }} 
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Education</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#6C63FF" />
          </TouchableOpacity>
        </View>

        <ThemedText variant="title" style={{ marginBottom: 16 }}>
          Featured Videos
        </ThemedText>
        
        {educationData.videos.map((video) => (
          <TouchableOpacity 
            key={video.id} 
            style={styles.videoCard}
            onPress={() => handleVideoPress(video.youtubeId)}
          >
            <View style={styles.videoThumbnailContainer}>
              <View style={[styles.videoThumbnail, { backgroundColor: '#E0E0E0' }]} />
              <View style={styles.playButton}>
                <Ionicons name="play" size={24} color="white" />
              </View>
            </View>
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <View style={styles.videoMeta}>
                <Text style={styles.videoDuration}>{video.duration}</Text>
                <Text style={styles.videoViews}>{video.views} views</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <ThemedText variant="title" style={{ marginTop: 24, marginBottom: 16 }}>
          Recommended Articles
        </ThemedText>

        {educationData.articles.map((article) => (
          <TouchableOpacity 
            key={article.id} 
            style={styles.articleCard}
            onPress={() => handleArticlePress(article.url)}
          >
            <Text style={styles.videoTitle}>{article.title}</Text>
            <Text style={{ color: '#666' }}>{article.description}</Text>
            <Text style={{ color: '#6C63FF', marginTop: 8 }}>Read More →</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}