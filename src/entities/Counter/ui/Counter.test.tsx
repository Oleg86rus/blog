import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/componentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test title', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
