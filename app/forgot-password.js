import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants/theme';
import AppButton from '../components/AppButton';

const ResetMethodItem = ({ icon, title, subtitle, selected, onSelect }) => (
  <TouchableOpacity
    style={[styles.methodItem, selected && styles.methodItemSelected]}
    onPress={onSelect}
    activeOpacity={0.7}
  >
    <View style={[styles.methodIconContainer, selected && styles.methodIconSelected]}>
      <Ionicons
        name={icon}
        size={24}
        color={selected ? COLORS.primary : COLORS.textSecondary}
      />
    </View>
    <View style={styles.methodTextContainer}>
      <Text style={styles.methodTitle}>{title}</Text>
      <Text style={styles.methodSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('email');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Select which methods you'd like to reset.</Text>
        </View>

        <View style={styles.methodsContainer}>
          <ResetMethodItem
            icon="mail-outline"
            title="Email Address"
            subtitle="Send via email address securely."
            selected={selectedMethod === 'email'}
            onSelect={() => setSelectedMethod('email')}
          />
          <ResetMethodItem
            icon="shield-checkmark-outline"
            title="2 Factor Authentication"
            subtitle="Send via 2FA securely."
            selected={selectedMethod === '2fa'}
            onSelect={() => setSelectedMethod('2fa')}
          />
          <ResetMethodItem
            icon="lock-closed-outline"
            title="Google Authenticator"
            subtitle="Send via authenticator securely."
            selected={selectedMethod === 'google'}
            onSelect={() => setSelectedMethod('google')}
          />
        </View>

        <AppButton
          title="Reset Password"
          onPress={() => console.log('Reset Password pressed')}
          style={styles.resetButton}
        />
      </ScrollView>

      {/* Decorative background icon */}
      <View style={styles.backgroundIconContainer}>
        <Ionicons name="lock-closed" size={150} color="rgba(0, 0, 0, 0.03)" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerRow: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: SPACING.xl,
  },
  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
  },
  methodsContainer: {
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  methodItemSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  methodIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  methodIconSelected: {
    backgroundColor: 'rgba(141, 225, 0, 0.1)',
  },
  methodTextContainer: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  methodSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  resetButton: {
    marginTop: SPACING.md,
  },
  backgroundIconContainer: {
    position: 'absolute',
    bottom: -30,
    left: 20,
    zIndex: -1,
  },
});
