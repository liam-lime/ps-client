<template>
    <NuxtLink :to="$i18n.path(`${$routes.blog.path}/${post.slug}`)" class="post-card__link">
        <div class="post-card">
            <h3 class="post-card__title">{{ post.title }}</h3>
            <div class="post-card__content text-content" v-html="post.content"></div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}

/*
Доступность для всего сайта:

1. Все карточки статей обернуть в ссылки и добавить фокус КСС что бы ими
можно было управлять через ТАБ кнопку.

2. По максимуму использовать новые HTML5 теги. Изучить ВСЕ теги и
заменить на них ВО ВСЕХ МЕСТАХ где это только возможно. Не только: футер,
артикле, хедер и нав. Их на самом деле КУЧА. Постараться юзать их по максимуму.

3. Что бы скринридеры знали на как ом языке читать ваш сайт - нада
добавить свойство lang к корневому элементу html.

4. В ссылки-картинки или кнопки-картинки, например иконки соц. сетей или кнопка закрыть-иконка, нужно или:
а) Добавлять внутрь ссылки описание как контент и скрывать его
б) Добавлять к ссылке атрибут aria-label="Описание ссылки"

5. Для секций сайта без заголовков, но с контентом - нужно обязательно
добавлять описательные заголовки текущей секции, используя
КСС лайфхак класс .visually-hidden.

6. Спека с примерами от w3c: WAI-ARIA Authoring Practices 1.1

*/

</script>

<style lang="scss" scoped>
.post-card {
    padding: 20px 10px;

    &__link {
        color: $color-text-secondary;
        background: $color-tile;
        display: flex;
        height: 100%;
        text-decoration: none;

        &:hover {
            background: $color-gray;
        }

        &:focus {
            outline: 5px solid $color-cheese;
        }
    }


    @include tablet {
        padding: 30px 15px;
    }


    @include desktop {
        padding: 40px 20px;
    }
}
</style>
