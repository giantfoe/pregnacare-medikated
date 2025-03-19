import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image, Linking, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';

// Define types for videos and articles
interface Video {
  id: number | string;
  title: string;
  duration: string;
  views: string;
  youtube_id?: string;
  youtubeId?: string;
}

interface Article {
  id: number | string;
  title: string;
  description: string;
  url: string;
}

// Styles remain the same
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  }
});

export default function EducationScreen() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEducationContent();
  }, []);

  const fetchEducationContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch videos
      const { data: videosData, error: videosError } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (videosError) throw videosError;
      
      // Fetch articles
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (articlesError) throw articlesError;
      
      // If no data is returned, use fallback data
      setVideos(videosData?.length ? videosData : educationData.videos);
      setArticles(articlesData?.length ? articlesData : educationData.articles);
      
    } catch (err) {
      console.error('Error fetching education content:', err);
      setError('Failed to load content. Please try again later.');
      // Use fallback data on error
      setVideos(educationData.videos);
      setArticles(educationData.articles);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoPress = (youtubeId: string) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${youtubeId}`);
  };

  const handleArticlePress = (url: string) => {
    Linking.openURL(url);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={{ marginTop: 10 }}>Loading education content...</Text>
      </View>
    );
  }

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

        {error && <Text style={styles.errorText}>{error}</Text>}

        <ThemedText variant="title" style={{ marginBottom: 16 }}>
          Featured Videos
        </ThemedText>
        
        {videos.map((video) => (
          <TouchableOpacity 
            key={video.id} 
            style={styles.videoCard}
            onPress={() => handleVideoPress(video.youtube_id || video.youtubeId || '')}
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

        {articles.map((article) => (
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

// Fallback data in case Supabase connection fails
const educationData = {
  videos: [
    {
      id: 1,
      title: 'First Trimester of Pregnancy | What to Expect',
      duration: '10:21',
      views: '2.3M',
      youtubeId: 'WO7Oa2XVPc4',
    },
    {
      id: 2,
      title: 'Pregnancy Diet: What to Eat and What to Avoid',
      duration: '8:45',
      views: '1.5M',
      youtubeId: 'TLvHMNGVeFM',
    },
    {
      id: 3,
      title: 'Safe Pregnancy Exercises for Each Trimester',
      duration: '15:32',
      views: '987K',
      youtubeId: 'HKHlCuBqSjE',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Essential Nutrients During Pregnancy',
      description: 'Learn about the key nutrients you need during pregnancy from trusted medical sources.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/prenatal-care/art-20045302',
    },
    {
      id: 2,
      title: 'Preparing for Labor and Delivery',
      description: 'A comprehensive guide to preparing for childbirth from medical professionals.',
      url: 'https://www.nichd.nih.gov/health/topics/labor-delivery/topicinfo/prepare',
    },
  ],
};