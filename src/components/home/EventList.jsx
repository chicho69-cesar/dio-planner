import React from 'react'
import { FlatList } from 'native-base'
import Event from '../Event'

export default function EventList({ events }) {
  return (
    <FlatList
      h="100%"
      data={events}
      ItemSeparatorComponent={<></>}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Event item={item} />}
    />
  )
}
