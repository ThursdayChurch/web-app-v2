import { useEffect } from 'react';
import { useSearchGroups } from 'hooks';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { Box, CardGrid, GroupCard, Loader } from 'ui-kit';

import DebugGroupFilterValues from './DebugGroupFilterValues';
import GroupSearchFilters from './GroupSearchFilters';

export default function GroupSearch(props = {}) {
  const [filtersState] = useGroupFilters();
  const [searchGroups, { loading, groups, error }] = useSearchGroups({
    fetchPolicy: 'cache-and-network',
  });

  console.groupCollapsed('%c<GroupSearch> render()', 'color: #888');
  console.log('filtersState:', filtersState);
  console.log('loading:', loading);
  console.log('groups:', groups);
  console.log('error:', error);
  console.groupEnd();

  useEffect(() => {
    console.log('✨ Use Effect ✨');

    if (!filtersState.hydrated) {
      return;
    }

    console.log(
      '🔍%c Searching groups...',
      'background: #00aeff; color: white; font-weight: bold;'
    );
    console.log('--> queryParams: ', filtersState.queryParams);

    searchGroups({
      variables: {
        query: filtersState.queryParams,
      },
    });
  }, [searchGroups, filtersState.hydrated, filtersState.queryParams]);

  return (
    <Box>
      <Box as="h1">Find your Community</Box>
      <GroupSearchFilters loading={loading} resultsCount={groups?.length} />
      <Box as="hr" mt="s" mb="l" border="none" bg="neutrals.200" height={2} />
      <CardGrid>
        {loading && <Loader />}
        {!loading &&
          groups?.map((group, index) => (
            <GroupCard
              /* Temporarily need to use index in key due to duplicate data */
              key={`${group.node?.id}-${index}`}
              callToAction={{
                call: 'Contact',
                action: 'action',
              }}
              campus={group.node?.campus.name}
              coverImage={group.coverImage?.sources[0]?.uri}
              dateTime={''}
              groupType={group.type}
              heroAvatars={group.node?.leaders?.edges}
              preference={group.node?.preference}
              subPreference={group.node?.subPreference}
              summary={group.summary}
              title={group.title}
              totalAvatars={group.node?.members?.totalCount}
            />
          ))}
      </CardGrid>
      <DebugGroupFilterValues />
    </Box>
  );
}
