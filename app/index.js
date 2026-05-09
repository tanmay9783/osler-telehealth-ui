import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import SocialButton from '../components/SocialButton';
import Logo from '../components/Logo';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('elementary221b@gmail.co');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Logo />
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>
          </View>

          <View style={styles.form}>
            <AppInput
              label="Email Address"
              placeholder="Enter your email..."
              icon="mail-outline"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <AppInput
              label="Password"
              placeholder="Enter your password..."
              icon="lock-closed-outline"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <AppButton
              title="Sign In"
              onPress={() => console.log('Sign In pressed')}
              style={styles.signInButton}
            />
          </View>

          <View style={styles.socialContainer}>
            <SocialButton icon="logo-facebook" onPress={() => {}} />
            <SocialButton icon="logo-google" onPress={() => {}} />
            <SocialButton icon="logo-instagram" onPress={() => {}} />
          </View>

          <View style={styles.footer}>
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text style={styles.footerLink}>Sign Up.</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => router.push('/forgot-password')}>
              <Text style={styles.footerLink}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    ...TYPOGRAPHY.caption,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: SPACING.xl,
  },
  signInButton: {
    marginTop: SPACING.md,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  footer: {
    alignItems: 'center',
    gap: SPACING.sm,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
  },
  footerLink: {
    ...TYPOGRAPHY.caption,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
