import dynamic from 'next/dynamic';

export const LazyYoutubeEmbed = dynamic(() => import('@/components/shared/YoutubeEmbed/ui'), {
    ssr: false, // Отключаем серверный рендеринг для этого компонента
    loading: () => <p>Загрузка...</p>, // Вспомогательная загрузка, пока iframe не загрузился
});
