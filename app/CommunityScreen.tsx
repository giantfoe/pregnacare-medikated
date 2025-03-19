import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// Update the styles first
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    paddingTop: 50,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
  },
  searchBar: {
    backgroundColor: '#F6F7FF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  hashtagContainer: {
    marginTop: 8,
  },
  hashtag: {
    backgroundColor: '#F6F7FF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeHashtag: {
    backgroundColor: '#6C63FF',
    borderColor: '#6C63FF',
  },
  hashtagText: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '600',
  },
  activeHashtagText: {
    color: '#FFFFFF',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    margin: 12,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6C63FF15',
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  postTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  postContent: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 16,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7FF',
    borderRadius: 20,
    padding: 8,
  },
  voteButton: {
    padding: 8,
    borderRadius: 16,
  },
  votedButton: {
    backgroundColor: '#6C63FF15',
  },
  voteCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: 12,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7FF',
    borderRadius: 20,
    padding: 12,
  },
  commentCount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6C63FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  verifiedBadge: {
    backgroundColor: '#6C63FF15',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  verifiedText: {
    color: '#6C63FF',
    fontSize: 12,
    fontWeight: '600',
  },
});

// Update the mock data
const posts = [
    {
      id: 1,
      user: 'Sarah M.',
      time: '2h ago',
      title: 'Morning Sickness Tips',
      content: 'Found some great remedies for morning sickness that actually work! Anyone else tried ginger tea with honey? I have been having it three times a day and it has made such a difference! 🌿',
      votes: 45,
      comments: 12,
      hashtag: 'firstTrimester',
    },
    {
      id: 2,
      user: 'Emma K.',
      time: '4h ago',
      title: 'Pregnancy-Safe Exercises',
      content: 'Just finished my prenatal yoga session! Here are some safe exercises my doctor recommended for the third trimester: gentle walking, swimming, and modified yoga poses. Always listen to your body! 🧘‍♀️',
      votes: 32,
      comments: 8,
      hashtag: 'exercise',
    },
    {
      id: 3,
      user: 'Dr. Lisa Chen',
      time: '6h ago',
      title: 'Nutrition Facts',
      content: 'Lets talk about folic acid! It is crucial during pregnancy. Aim for foods rich in folate like leafy greens, legumes, and fortified cereals. Remember to take your prenatal vitamins too! 🥗',
      votes: 89,
      comments: 15,
      hashtag: 'nutrition',
      verified: true,
    },
    {
      id: 4,
      user: 'Maria G.',
      time: '1d ago',
      title: 'Labor Preparation',
      content: 'Week 36 and starting to prepare my hospital bag! Here is my checklist: comfortable nightgown, toiletries, snacks, and babys first outfit. What else should I pack? 👶',
      votes: 67,
      comments: 23,
      hashtag: 'laborPrep',
    },
    {
      id: 5,
      user: 'Rachel W.',
      time: '1d ago',
      title: 'Mental Health Check',
      content: 'Feeling a bit overwhelmed today. Remember it is okay to have ups and downs during pregnancy. Taking time for self-care and meditation really helps. Anyone else want to share their experiences? 💭',
      votes: 92,
      comments: 31,
      hashtag: 'mentalHealth',
    },
    {
      id: 6,
      user: 'Dr. Maya Patel',
      time: '2d ago',
      title: 'Sleep Tips for Third Trimester',
      content: 'Having trouble sleeping? Try these positions: left side with pillow between knees, elevated upper body with pregnancy pillow, or semi-reclined with support. Remember to avoid back sleeping! 😴',
      votes: 156,
      comments: 42,
      hashtag: 'thirdTrimester',
      verified: true,
    },
    {
      id: 7,
      user: 'Jessica B.',
      time: '2d ago',
      title: 'First Kick Experience',
      content: 'Just felt my baby kick for the first time at week 19! It felt like tiny butterfly flutters. Such an incredible moment! When did you first feel movement? 👶✨',
      votes: 204,
      comments: 67,
      hashtag: 'secondTrimester',
    },
    {
      id: 8,
      user: 'Sophie W.',
      time: '3d ago',
      title: 'Pregnancy Workout Routine',
      content: 'Starting week with a gentle prenatal workout: 20min walking, 10min stretching, 15min pregnancy yoga. Remember to stay hydrated! Who else is keeping active? 💪🚶‍♀️',
      votes: 88,
      comments: 29,
      hashtag: 'exercise',
    },
    {
      id: 9,
      user: 'Dr. Anna Kim',
      time: '3d ago',
      title: 'Common Pregnancy Myths',
      content: 'Lets debunk some myths! No, you dont need to eat for two. Instead, focus on nutrient-rich foods and only need about 300 extra calories per day in second trimester. Ask me anything! 🍎',
      votes: 267,
      comments: 89,
      hashtag: 'nutrition',
      verified: true,
    },
    {
      id: 10,
      user: 'Linda M.',
      time: '4d ago',
      title: 'Birth Plan Template',
      content: 'Created a comprehensive birth plan template! Includes preferences for labor, delivery, and postpartum care. Would anyone like me to share it? Planning ahead reduces anxiety! 📝',
      votes: 178,
      comments: 56,
      hashtag: 'laborPrep',
    }
];

// Add a type for the post
interface Post {
  id: number;
  user: string;
  time: string;
  title: string;
  content: string;
  votes: number;
  comments: number;
  hashtag: string;
  verified?: boolean;
}

// Add a type for hashtags
interface Hashtag {
  id: string;
  label: string;
}

export default function CommunityScreen() {
  const [activeHashtag, setActiveHashtag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [votedPosts, setVotedPosts] = useState<Record<number, 'up' | 'down' | null>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    setVotedPosts(prev => ({
      ...prev,
      [postId]: prev[postId] === voteType ? null : voteType
    }));
  };

  const hashtags: Hashtag[] = [
    { id: 'all', label: 'All' },
    { id: 'firstTrimester', label: '#FirstTrimester' },
    { id: 'secondTrimester', label: '#SecondTrimester' },
    { id: 'thirdTrimester', label: '#ThirdTrimester' },
    { id: 'nutrition', label: '#Nutrition' },
    { id: 'laborPrep', label: '#LaborPrep' },
    { id: 'exercise', label: '#Exercise' },
    { id: 'mentalHealth', label: '#MentalHealth' },
  ];

  // Remove this duplicate posts array
  // const posts: Post[] = [
  //   {
  //     id: 1,
  //     user: 'Sarah M.',
  //     time: '2h ago',
  //     title: 'Morning Sickness Tips',
  //     content: 'Found some great remedies for morning sickness that actually work! Anyone else tried ginger tea with honey?',
  //     votes: 45,
  //     comments: 12,
  //     hashtag: 'firstTrimester',
  //   },
  //   {
  //     id: 2,
  //     user: 'Emma K.',
  //     time: '4h ago',
  //     title: 'Pregnancy-Safe Exercises',
  //     content: 'Looking for recommendations on pregnancy-safe exercises for the third trimester. What worked for you?',
  //     votes: 32,
  //     comments: 8,
  //     hashtag: 'exercise',
  //   },
  // ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#1F2937', marginBottom: 8 }}>
          Community
        </Text>
        <View style={styles.searchBar}>
          <Text>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search discussions..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
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

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {isLoading ? (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text>Loading discussions...</Text>
          </View>
        ) : (
          posts
            .filter((post) => {
              const matchesHashtag = activeHashtag === 'all' || post.hashtag === activeHashtag;
              const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  post.content.toLowerCase().includes(searchQuery.toLowerCase());
              return matchesHashtag && matchesSearch;
            })
            .map((post) => (
              <View key={post.id} style={styles.postCard}>
                <View style={styles.postHeader}>
                  <View style={styles.userAvatar} />
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.userName}>{post.user}</Text>
                      {post.verified && (
                        <View style={styles.verifiedBadge}>
                          <Text style={styles.verifiedText}>Expert</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.postTime}>{post.time}</Text>
                  </View>
                </View>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
                <View style={styles.postFooter}>
                  <View style={styles.voteContainer}>
                    <TouchableOpacity 
                      style={[styles.voteButton, votedPosts[post.id] === 'up' && styles.votedButton]}
                      onPress={() => handleVote(post.id, 'up')}
                    >
                      <Text>⬆️</Text>
                    </TouchableOpacity>
                    <Text style={styles.voteCount}>
                      {post.votes + (votedPosts[post.id] === 'up' ? 1 : votedPosts[post.id] === 'down' ? -1 : 0)}
                    </Text>
                    <TouchableOpacity 
                      style={[styles.voteButton, votedPosts[post.id] === 'down' && styles.votedButton]}
                      onPress={() => handleVote(post.id, 'down')}
                    >
                      <Text>⬇️</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.commentButton}>
                    <Text>💬</Text>
                    <Text style={styles.commentCount}>{post.comments}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
        )}
      </ScrollView>

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => {
          // In a real app, this would navigate to a new post screen
          alert('Create a new post');
        }}
      >
        <Text style={{ color: '#fff', fontSize: 28, fontWeight: '600' }}>✏️</Text>
      </TouchableOpacity>
    </View>
  );
}