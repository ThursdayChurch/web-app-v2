import { useEffect } from 'react';
import { useSearchGroups } from 'hooks';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { Box, CardGrid, GroupCard } from 'ui-kit';

export default function GroupSearch(props = {}) {
  const [filtersState] = useGroupFilters();
  const [searchGroups, { loading, groups, error }] = useSearchGroups({
    fetchPolicy: 'network-only',
  });

  console.groupCollapsed('%c<GroupSearch> render()', 'color: #888');
  console.log('filtersState:', filtersState);
  console.log('loading:', loading);
  console.log('groups:', groups);
  console.log('error:', error);
  console.groupEnd();

  useEffect(() => {
    if (filtersState.hydrated) {
      console.log(
        '🔍%c Searching groups...',
        'color: #00aeff; font-weight: bold;'
      );

      searchGroups({
        variables: {
          query: 'test',
        },
      });
    } else {
      console.log(
        '<GroupSearch> ⏳ Waiting for state to hydrate from query string'
      );
    }
  }, [searchGroups, filtersState.hydrated]);

  return (
    <Box>
      <Box as="h1">Find your Community</Box>
      <Box as="p" color="subdued" mb="l">
        Found {groups?.length} groups that meet your search criteria.
      </Box>
      <Box
        as="pre"
        color="subdued"
        mb="l"
        fontSize="xs"
        position="fixed"
        bottom="0"
        left={16}
        padding="base"
        bg="white"
        borderRadius="base"
        boxShadow="xl"
        maxWidth={300}
        overflow="scroll"
        zIndex="10"
      >
        {JSON.stringify(filtersState, null, 2)}
      </Box>
      <CardGrid>
        {groups?.map((group, index) => (
          <GroupCard
            /* Temporarily need to use index in key due to duplicate data */
            key={`${group.node?.id}-${index}`}
            title={group.title}
            groupType={group.type}
            summary={group.summary}
            heroAvatars={[]}
            avatars={[]}
            dateTime="Wednesdays at 6:30pm"
            coverImage="https://source.unsplash.com/random/1000x1000"
            totalAvatars={100}
          />
        ))}
      </CardGrid>
    </Box>
  );
}
