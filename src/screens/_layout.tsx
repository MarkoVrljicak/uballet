import React from 'react';
import { Stack } from 'expo-router';

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen name="balance" />
    </Stack>
  );
}
