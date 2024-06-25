import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TicTacToe from '.';
import Header from '@/app/(tabs)/header'
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Header/>
    <TicTacToe/>
    </>
  );
}
