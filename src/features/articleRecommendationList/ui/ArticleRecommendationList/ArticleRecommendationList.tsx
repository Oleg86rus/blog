import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/tests/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }
        const title = t('Рекомендуем');

        return (
            <VStack
                data-testid="ArticleRecommendationList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text
                    size={TextSize.L}
                    title={title}
                />
                <ArticleList
                    articles={articles}
                    target="_blank"
                />
            </VStack>
        );
    },
);
