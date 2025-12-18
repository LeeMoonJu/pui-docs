import { ComponentPage } from '../ComponentPage';
import { Button, IconButton } from '@skybaer0804/pui/Button';
import { Stack } from '@skybaer0804/pui/Layout';
import { IconPlus } from '@tabler/icons-react';

export function ButtonPage() {
    return (
        <ComponentPage title="Button" description="Button 컴포넌트는 사용자 액션을 트리거하는 데 사용됩니다.">
            <Stack spacing="md">
                <Stack spacing="sm">
                    <h3>Variants</h3>
                    <Stack direction="row" spacing="sm">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                    </Stack>
                </Stack>
                <Stack spacing="sm">
                    <h3>Sizes</h3>
                    <Stack direction="row" spacing="sm" align="center">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </Stack>
                </Stack>
                <Stack spacing="sm">
                    <h3>IconButton</h3>
                    <Stack direction="row" spacing="sm">
                        <IconButton>
                            <IconPlus />
                        </IconButton>
                        <IconButton color="primary">
                            <IconPlus />
                        </IconButton>
                        <IconButton color="secondary">
                            <IconPlus />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </ComponentPage>
    );
}
