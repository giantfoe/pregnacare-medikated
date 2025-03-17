import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  hashtag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },
  activeHashtag: {
    backgroundColor: '#5196F4',
  },
  hashtagText: {
    color: '#666',
    fontSize: 14,
  },
  activeHashtagText: {
    color: '#fff',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    marginRight: 8,
  },
  userName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  postContent: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteButton: {
    padding: 8,
  },
  voteCount: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 8,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#5196F4',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function CommunityScreen() {
  const [activeHashtag, setActiveHashtag] = useState('all');

  const hashtags = [
    { id: 'all', label: 'All' },
    { id: 'firstTrimester', label: '#FirstTrimester' },
    { id: 'nutrition', label: '#Nutrition' },
    { id: 'laborPrep', label: '#LaborPrep' },
    { id: 'exercise', label: '#Exercise' },
    { id: 'mentalHealth', label: '#MentalHealth' },
  ];

  const posts = [
    {
      id: 1,
      user: 'Sarah M.',
      time: '2h ago',
      title: 'Morning Sickness Tips',
      content: 'Found some great remedies for morning sickness that actually work! Anyone else tried ginger tea with honey?',
      votes: 45,
      comments: 12,
      hashtag: 'firstTrimester',
    },
    {
      id: 2,
      user: 'Emma K.',
      time: '4h ago',
      title: 'Pregnancy-Safe Exercises',
      content: 'Looking for recommendations on pregnancy-safe exercises for the third trimester. What worked for you?',
      votes: 32,
      comments: 8,
      hashtag: 'exercise',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Text>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search discussions..."
            placeholderTextColor="#666"
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.hashtagContainer}
        >
          {hashtags.map((tag) => (
            <TouchableOpacity
              key={tag.id}
              style={[styles.hashtag, activeHashtag === tag.id && styles.activeHashtag]}
              onPress={() => setActiveHashtag(tag.id)}
            >
              <Text
                style={[styles.hashtagText, activeHashtag === tag.id && styles.activeHashtagText]}
              >
                {tag.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView>
        {posts
          .filter((post) => activeHashtag === 'all' || post.hashtag === activeHashtag)
          .map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.userAvatar} />
                <Text style={styles.userName}>{post.user}</Text>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postContent}>{post.content}</Text>
              <View style={styles.postFooter}>
                <View style={styles.voteContainer}>
                  <TouchableOpacity style={styles.voteButton}>
                    <Text>⬆️</Text>
                  </TouchableOpacity>
                  <Text style={styles.voteCount}>{post.votes}</Text>
                  <TouchableOpacity style={styles.voteButton}>
                    <Text>⬇️</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.commentButton}>
                  <Text>💬</Text>
                  <Text style={styles.commentCount}>{post.comments}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}