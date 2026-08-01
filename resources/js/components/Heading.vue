<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import { ArrowLeft } from "@lucide/vue";
import type { RouteDefinition } from "@/wayfinder";
import { Button } from "./ui/button";

type Props = {
    title: string;
    description?: string;
    variant?: 'default' | 'small';
    href?: RouteDefinition<'get'>;
};

withDefaults(defineProps<Props>(), {
    variant: 'default',
});
</script>

<template>
    <header
        :class="[
            'flex flex-col gap-4 sm:flex-row sm:justify-between',
            variant === 'small' ? '' : 'mb-8'
        ]"
    >
        <div :class="variant === 'small' ? '' : 'space-y-0.5'">
            <h2
                :class="
                    variant === 'small'
                        ? 'mb-0.5 text-base font-medium'
                        : 'text-xl font-semibold tracking-tight'
                "
            >
                <span class="flex items-center gap-2">
                    <Link
                        v-if="href"
                        :href="href"
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            title="Voltar"
                        >
                            <ArrowLeft />
                        </Button>
                    </Link>
                    {{ title }}
                </span>
            </h2>

            <p
                v-if="description"
                class="text-sm text-muted-foreground"
            >
                {{ description }}
            </p>
        </div>

        <div v-if="$slots.action">
            <slot name="action" />
        </div>
    </header>
</template>
