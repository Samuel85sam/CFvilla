import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';
import React from 'react';
import PostList from './post-list';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children);

const Subgrid = () => {
    const theme = useMantineTheme();
    return (
        <Container my="md">
            <SimpleGrid cols={{ base: 1, xs: 4 }}>
                {getChild(BASE_HEIGHT)}
                <Stack>
                    {/* {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
                    {getChild(getSubHeight(2, px(theme.spacing.md) as number))} */}
                </Stack>
                <Stack>
                    {/* {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
                    {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
                    {getChild(getSubHeight(3, px(theme.spacing.md) as number))} */}
                </Stack>
                {getChild(BASE_HEIGHT)}
            </SimpleGrid>
        </Container>
    );
}


export default PostList